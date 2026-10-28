/**
 * Local-install server entrypoint.
 *
 * OpenCode's plugin resolver (packages/plugin/src/host.ts, `Host.resolve`)
 * tries `<dir>/server` BEFORE the bare directory, so this file lets a local
 * directory install load the TS source directly (no `bun run build`, no
 * `dist/`). `package.json` keeps its npm-facing `main`/`exports` untouched.
 */
export { default } from "./src/plugin"
