This is a example of some custom application

> you can start server by `ts-node index.ts` command or can build with `tsc` and run by `node index.js`


This application is referencing `lodash` without typings

```JSON
{
  "name": "test-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "lodash": "4.17.15" //<<<<<<<<< here is the reference
  },
  "devDependencies": {
    "typescript": "~3.7.2"
  }
}

```