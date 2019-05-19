

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

## Variant 1 - Javascript

1. Build a server

![alt tag](https://raw.githubusercontent.com/lukaskellerstein/NodeJsExpressSamples/master/images/Selection_010.png)

In folder with a server run 

```Shell
tsc
```

, then it build server into folder, which you set as outDir in your tsconfig.json

![alt tag](https://raw.githubusercontent.com/lukaskellerstein/NodeJsExpressSamples/master/images/Selection_013.png)


2. Run a server

Go to the outDir folder with your builded server and run `node server.js`


![alt tag](https://raw.githubusercontent.com/lukaskellerstein/NodeJsExpressSamples/master/images/Selection_011.png)


## Variant 2 - Typescript


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
