# Welcome to Remix + Telefunc!

📖 See the docs for details on supported features.
* [Remix docs](https://remix.run/docs)
* [Telefunc](https://telefunc.com/)

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Production

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

> as of telefunc@0.1.73 prod start requires workaround instead of using conventional `index.js` entry:

```json
"start": "remix-serve ./build/server/index2.js",
```

## Feature requests

See [IDEAS.md](./IDEAS.md)
