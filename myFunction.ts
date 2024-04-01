function addTwo(num: number): number {
    return num + 2
    // return 'hello'  we cannot return a string, since we are defining that we are returning a number
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name:string, email: string, password: number){

}

function consoleError(err:string):void{
    console.log(err)
}

function handleError(err: string): never {
    throw new Error(err)
}

signUpUser('john','j@gmail.com',1234)
getUpper('hello')
addTwo(6)



export {}