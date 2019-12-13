This is example howto create and TS libray


# With typings

1. set this in `tsconfig.json`

```JSON
{
    "compilerOptions": {
      "target": "es6",
      "module": "commonjs",
      "outDir": "dist",
      "sourceMap": true,
      "declaration": true //<<<<<<<<<< this line added
    },
    "include": [
      "*.ts"
    ]
  }
```

2. set this in `package.json`

```JSON
{
  "name": "test-library",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "typings": "index.d.ts", //<<<<<<<<<< this line added
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "3.7.2"
  }
}

```


3. just build with tsc

4. you can find result in `dist` folder

now you can see there is added `*.d.ts` file with typings for each `*.js` file


