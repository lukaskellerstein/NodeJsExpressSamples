

/***************/
//This is exactly the same behaviour as in mymodule2.js
/***************/

var PI = Math.PI;

exports.doSomething = function(){
    console.log('Hello World');
}

exports.area = function(x){
    return PI * x * x;
}

exports.square = function(x){
    return x * x;
}
