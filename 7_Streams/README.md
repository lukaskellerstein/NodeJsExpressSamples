

This is a example of using NodeJS Express Streams. 

> you can start server by `ts-node server.ts` command or can build with `tsc` and run by `node server.js`

# Streams

Get values (stream of values) from source and send it to the destination.

```Typescript
a.pipe(b).pipe(c).pipe(d)
```

Which is equivalent to:

```Typescript
a.pipe(b)
b.pipe(c)
c.pipe(d)
```

Which, in Linux, is equivalent to:

```Shell
$ a | b | c | d
```
   
## Types

![alt tag](https://raw.githubusercontent.com/lukaskellerstein/NodeJsExpressSamples/master/images/streams0.png)

## Write vs Read stream

![alt tag](https://raw.githubusercontent.com/lukaskellerstein/NodeJsExpressSamples/master/images/streams1.png)
