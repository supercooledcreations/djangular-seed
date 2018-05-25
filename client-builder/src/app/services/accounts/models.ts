export class StandardRegistration {
    'username': string;
    'email': string;
    'password': string;
    'password2': string;
}

export class StandardLogin {

    username: string;
    password: string;

    constructor(username:string, password:string){
        this.username = username;
        this.password = password;
    }
}

export class StandardUser {
    'username': string;
    'email': string;
    'token': string;
    'expires': string;
}

export class EmailRegistration {
    'email': string;
    'password': string;
    'password2': string;
}

export class EmailLogin {

    email: string;
    password: string;

    constructor(email:string, password:string){
        this.email = email;
        this.password = password;
    }
}

export class EmailUser {
    'id': number;
    'email': string;
    'token': string;
    'expires': string;
}