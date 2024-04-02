let score: string | number = 33

type User = {
    username: string;
    id: number;
}

type Admin = {
    name: string;
    id: number;
}

let max: User | Admin = {name:'jack', id:23}

max = {username:'daniel', id: 55}

function getDbid(id: number | string) {

    if(typeof id === 'string') {
        id.toLowerCase()
    }
    console.log(`DB id is ${id}`);
}

getDbid('5')

//array

const data1: number[] = [1,2,3,4,5]
const data2: string[] = ['a','b','c','d']
const data3: (string | number | boolean)[] = 
                    [1,'a',3,'',true]

let seatAllotment: 'aisle' | 'middle' | 'window'

seatAllotment = "middle"
// seatAllotment = 'crew'