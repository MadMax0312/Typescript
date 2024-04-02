// const User = {
//     name: 'John',
//     email: 'j@gmail.com',
//     isActive: false
// }

// function createUser({name:string, isPaid: boolean}){

// }

// createUser({name:'max', isPaid:false})

// function createCourse():{name:string, price:number}{
//     return {name:"Maddy",price:2000}
// }



// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user:User): User{
//     return {name:'',email:'',isActive:true}
// }

// createUser({name:'',email:'',isActive:false})


type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credcardNumber?: number
}

let myUser: User = {
    _id: '1234',
    name: 'Max',
    email: 'm@gmail.com',
    isActive: false
}

type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = 'j@gmail.com'

export {} 