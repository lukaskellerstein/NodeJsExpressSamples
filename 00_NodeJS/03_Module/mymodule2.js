
/***************/
//This is exactly the same behaviour as in mymodule.js
/***************/

var PI = Math.PI;

module.exports = function(x){
    return {
        doSomething: function(){
            console.log('Hello World');
        },
        area: function(){
            return PI * x * x;
        },
        square: function(){
            return x * x;
        }
    }
}