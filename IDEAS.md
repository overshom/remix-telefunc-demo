# add telefunc request suffix

To easily debug network requests in browser, specify telefunc suffix

```ts
// Environment: client
import { config } from 'telefunc/client'

// e.g. /_telefunc/hello.telefunc.ts
config.requestPathname = ({ pathname, file }) => `${pathname}/${file}`
```

This way, browser dev tools can show you exact file requested via telefunc instead of all requests being displayed as `_telefunc`

# case insensitive naming convention

While checking for naming convention for collocated files, use case-insensitive approach to avoid such warnings:

```sh
    Your telefunction:
      /app/components/hello.telefunc.ts (base name: 'hello')
    Its collocated files:
      /app/components/Hello.tsx (base name: 'Hello'
    None of its collocated files share its base name 'hello'.
```
