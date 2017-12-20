
export class User {
    id: string;
    name: string;
    role: string;
    description: string;
}

export class Users {
    public items: User[] = [];

    constructor(){
        let temp = new User();
        temp.id = "1";
        temp.name = "Lukas";
        temp.role = "Developer";
        temp.description = "aslkdfjalksjfda";
        this.items.push(temp);

        temp = new User();
        temp.id = "2";
        temp.name = "Ondrej";
        temp.role = "Developer";
        temp.description = "ttttttttttttt";
        this.items.push(temp);

        temp = new User();
        temp.id = "3";
        temp.name = "Pavel";
        temp.role = "Coder";
        temp.description = "vnbnbbnbnbnbn";
        this.items.push(temp);

        temp = new User();
        temp.id = "4";
        temp.name = "Jakub";
        temp.role = "Coder";
        temp.description = "sdsdsdsdsdsds";
        this.items.push(temp);

        temp = new User();
        temp.id = "5";
        temp.name = "Roland";
        temp.role = "Tester";
        temp.description = "testtestetstesttest";
        this.items.push(temp);

        temp = new User();
        temp.id = "6";
        temp.name = "Lukas H.";
        temp.role = "UX";
        temp.description = "uxuxuxuxuxuxuxuxux";
        this.items.push(temp);

    }

    getUser(id: string): User{

        let result = null;

        this.items.forEach(element => {
           
            if(element.id == id){
                result = element;
            }

        });

        return result;

    }
}