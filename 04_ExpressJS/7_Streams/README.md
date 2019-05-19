

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

> There are a readable, writable and duplex/transform streams.

![alt tag](https://raw.githubusercontent.com/lukaskellerstein/NodeJsExpressSamples/master/images/streams0.png)


![alt tag](https://raw.githubusercontent.com/lukaskellerstein/NodeJsExpressSamples/master/images/streams1.png)


## Readable streams

This streams can read from another stream.

```Typescript
export class CustomReadableStream extends stream.Readable {
    currentCharCode: number = 0;
    _read(size){
        this.push(String.fromCharCode(this.currentCharCode++));
        if (this.currentCharCode > 90) {
            this.push(null);
        }
    }
}
```

## Writable streams 

This streams can write into another stream.

```Typescript
export class CustomWritableStream extends stream.Writable {
    _write(chunk, enc, next) {
        console.log(chunk.toString());
        next();
    }
}
```

## Duplex streams

This streams can read from stream and write into another stream.

```Typescript
export class CustomDuplexStream extends stream.Duplex {
    currentCharCode: number = 0;
    _write(chunk, enc, next) {
        console.log(chunk.toString());
        next();
    }
    _read(size){
        this.push(String.fromCharCode(this.currentCharCode++));
        if (this.currentCharCode > 90) {
            this.push(null);
        }
    }
}
```

## Transform streams

This streams transform data from one stream to another.

```Typescript
export class CustomTransformStream extends stream.Transform {
    _transform(chunk, enc, next){
        this.push(chunk.toString().toUpperCase());
        next();
    }
}
```