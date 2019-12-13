
function enhanceClass() {
    return function (constructor: Function) {
        constructor['template'] = "<div>ASDF</div>";
    }
}


@enhanceClass()
class SomeClass {
    
}


const aa = new SomeClass();
console.log(aa.template);