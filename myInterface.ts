interface User {
    readonly dbId: number,
    name: string,
    userId?: number,
    googleToken?: number,
    // startTrail: () => string
    startTrail?(): string,
    getCoupon?(couponName: string, value: number): number
}

// Interface Reopening......
interface User {
    githubToken?: string
}

// Inheritance Property.........
interface Admin extends User {
    role: "admin" | 'ta' | 'learner'
}

const admin: Admin = {
    role: 'admin',
    dbId: 5,
    name: 'Jim',
}

const max: User = {dbId: 3,name:'jack',userId:3,
        startTrail: ()=> {
            return 'trail started'
        },
        getCoupon: (name: 'max12', off: 10) => 10
}

max.name = 'sara'

// Alias extending property
// but cannot be reopened to add new property
type tempClass = {
    name: string
}

type tempSchool = tempClass & {
    age: number
}