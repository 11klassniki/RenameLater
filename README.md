# RenameLater

Repo's guidelines:

1. Whenever you use MUI, make sure to wrap it with a custom component, don't use it directly

- Exceptions would be cases where the component is meant to be used only once

Install:

1. in terminal run `yarn`
2. run `yarn dev` for development for ui

Tech Stack Guides:
JavaScript - https://www.w3schools.com/js/
TypeScript - https://www.typescriptlang.org/
React - https://reactjs.org/
Next - https://nextjs.org/
MUI - https://mui.com/getting-started/usage/
Jotai - https://jotai.org/

debug:
"@emotion/react": "^11.7.0", // related to mui
and "@emotion/styled": "^11.6.0", // mui

web has tsconfig with "baseUrl": "./"
imports behaviour: https://www.typescriptlang.org/tsconfig#baseUrl

yarn format:fix/format for manual prettier

Prettier autosave:

make sure vscode has this:
"editor.formatOnSave": true

prettier should user prettoerrc.js file from the web repo
