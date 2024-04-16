class User {
    email: string
    name: string
    readonly city: string = 'calicut'
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const obj = new User("t@gmail.com", "max")

// obj.city = 'dd'