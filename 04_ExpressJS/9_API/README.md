This is the simplest possible implementation of Express NodeJS server.

> you can start server by `ts-node server.ts` command or can build with `tsc` and run by `node server.js`

# Create a server

This will create folder with package.json

```Shell
mkdir testapp
cd testapp
npm init
```

This will create folder with package.json

```Shell
npm install express --save
```

# Run a server

1. Install ts-node
   https://github.com/TypeStrong/ts-node

- it will remove building steps
- it will replace `node server.js`

```Shell
npm install -g ts-node
npm install -g typescript
```

2. Run a server

Go to the folder with your server in typescript and run `ts-node server.ts`
