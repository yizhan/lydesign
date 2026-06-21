# Agent Notes

This project is usually run with the `local-dev` permission profile.

## Local-Dev Profile

Allowed and verified:

- Read and write files inside this workspace with scoped shell commands.
- Use Node.js and npm from `C:\Users\Robert\AppData\Local\nvs`.
- Run source-focused checks such as `npx eslint src`.

Known limits:

- Do not rely on `apply_patch`; on Windows local-dev it can fail before editing with a sandbox wrapper error.
- Avoid cleanup flows that require delete or rename operations unless the user has switched permissions; these can fail with `EPERM` or access denied.
- Do not use `danger-full-access` unless the user explicitly asks for it.

When editing files under local-dev, use narrowly scoped PowerShell or Node.js writes and mention that `apply_patch` is unavailable in this profile.