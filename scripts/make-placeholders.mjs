// Creates a plain grey placeholder PNG for every screenshot a guide mentions that has not been captured yet.
// To add the real screenshot, save it over the placeholder with the same file name in docs/public/screenshots/.
// Run with: npm run placeholders
import fs from 'node:fs'
import path from 'node:path'
import zlib from 'node:zlib'

const WIDTH = 1200
const HEIGHT = 675
const FILL = [234, 240, 243] // soft grey-blue, close to the Raffinity "soft" colour

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  return c >>> 0
})

function crc32(buf) {
  let c = 0xffffffff
  for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(body))
  return Buffer.concat([len, body, crc])
}

function placeholderPng() {
  const row = Buffer.alloc(1 + WIDTH * 3)
  for (let x = 0; x < WIDTH; x++) row.set(FILL, 1 + x * 3)
  const raw = Buffer.concat(Array.from({ length: HEIGHT }, () => row))
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(WIDTH, 0)
  ihdr.writeUInt32BE(HEIGHT, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 2 // colour type: RGB
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

const outDir = path.join('docs', 'public', 'screenshots')
fs.mkdirSync(outDir, { recursive: true })

const wanted = new Set()
function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    if (name === 'node_modules' || name === '.vitepress' || name === 'public') continue
    const p = path.join(dir, name)
    if (fs.statSync(p).isDirectory()) walk(p)
    else if (p.endsWith('.md')) {
      for (const m of fs.readFileSync(p, 'utf8').matchAll(/\]\(\/screenshots\/([\w.-]+\.png)\)/g)) wanted.add(m[1])
    }
  }
}
walk('docs')

let made = 0
const png = placeholderPng()
for (const file of wanted) {
  const target = path.join(outDir, file)
  if (!fs.existsSync(target)) {
    fs.writeFileSync(target, png)
    made++
  }
}
console.log(`${wanted.size} screenshots referenced, ${made} placeholder(s) created.`)
