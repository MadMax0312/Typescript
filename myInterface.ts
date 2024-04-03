interface User {
    readonly dbId: number,
    name: string,
    userId: number,
    googleToken?: number,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponName: string, value: number): number
}

const max: User = {dbId: 3,name:'jack',userId:3,
        startTrail: ()=> {
            return 'trail started'
        },
        getCoupon: (name: 'max12', off: 10) => {
            return 10
        }
}

max.name = 'sara'