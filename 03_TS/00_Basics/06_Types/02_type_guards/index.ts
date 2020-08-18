
// -----------------------------------------------------------------------
// TYPE guards 
// -----------------------------------------------------------------------


type Tagged = {
    tag: string;

    getTag(): string;
    renewTag(): void;
}

type Draggable = {
    drag(): never;
}


// type "OR"
type UIElement = Tagged | Draggable;


const doSomething = (el: UIElement) => {

    //guard or type
    if('getTag' in el){
        el.getTag();
    }

    //guard or type
    if('drag' in el){
        el.drag();
    }

}


const doSomething2 = (el: Tagged | Draggable) => {

    //CANNOT USE
    if(typeof el === "Tagged"){

    }

}