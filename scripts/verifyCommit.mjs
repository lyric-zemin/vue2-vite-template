import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const dirname = path.dirname(fileURLToPath(import.meta.url), '..')
const msgPath = path.resolve(dirname, '../.git/COMMIT_EDITMSG')
const msg = readFileSync(msgPath, 'utf-8').trim()

const commitRE
  = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.error(
    ` invalid commit message format.\n\n
    Proper commit message format is required for automated changelog generation.\n
    Examples:\n
    feat(compiler): add \'comments\' option\n
    fix(v-model): handle events on blur (close #28)`,
  )
  process.exit(1)
}
