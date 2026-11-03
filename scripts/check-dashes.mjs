// Fails if any page, config or doc contains an em dash (U+2014) or an en dash (U+2013).
// House rule: use a full stop, comma, colon, brackets or a plain hyphen with spaces instead.
import fs from 'node:fs'
import path from 'node:path'

const EM = String.fromCharCode(0x2014)
const EN = String.fromCharCode(0x2013)
const roots = ['docs', 'README.md', 'scripts', '.github']
const skip = new Set(['node_modules', 'dist', 'cache', '.git'])
const exts = new Set(['.md', '.mts', '.ts', '.css', '.json', '.yml', '.yaml', '.mjs', '.vue', '.html', '.txt'])

let failures = 0

function scan(file) {
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/)
  lines.forEach((line, i) => {
    for (const [ch, name] of [[EM, 'em dash'], [EN, 'en dash']]) {
      const col = line.indexOf(ch)
      if (col !== -1) {
        console.error(`${file}:${i + 1}:${col + 1} contains an ${name}`)
        failures++
      }
    }
  })
}

function walk(p) {
  if (!fs.existsSync(p)) return
  const stat = fs.statSync(p)
  if (stat.isDirectory()) {
    for (const name of fs.readdirSync(p)) {
      if (!skip.has(name)) walk(path.join(p, name))
    }
  } else if (exts.has(path.extname(p))) {
    scan(p)
  }
}

roots.forEach(walk)

if (failures > 0) {
  console.error(`\n${failures} dash(es) found. Replace them with a full stop, comma, colon, brackets or a plain hyphen.`)
  process.exit(1)
}

console.log('No em or en dashes found.')
