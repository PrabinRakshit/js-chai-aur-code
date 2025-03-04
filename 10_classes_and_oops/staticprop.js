class User{
    constructor(username){
        this.username =username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const prabin = new User("Prabin")

console.log(prabin.createId());
