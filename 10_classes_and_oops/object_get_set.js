const user = {
    _email: 'prabin@gmail.com',
    _password: 'abcdef',
    
    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// console.log(user.email);

const tea = Object.create()