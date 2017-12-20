import * as stream from "stream";

// CUSTOM WRITABLE STREAM
export class CustomWritableStream extends stream.Writable {
    _write(chunk, enc, next) {
        console.log(chunk.toString());
        next();
    }
}

// CUSTOM READABLE STREAM
export class CustomReadableStream extends stream.Readable {
    currentCharCode: number = 0;
    _read(size){
        this.push(String.fromCharCode(this.currentCharCode++));
        if (this.currentCharCode > 90) {
            this.push(null);
        }
    }
}

// CUSTOM DUPLEX STREAM
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

// CUSTOM TRANSFORM STREAM
export class CustomTransformStream extends stream.Transform {
    _transform(chunk, enc, next){
        this.push(chunk.toString().toUpperCase());
        next();
    }
}
