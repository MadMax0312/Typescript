enum SeatChoice {
    AISLE = 'aisle',
    MIDDLE = 3,
    WINDOW,
    FOURTH
}

// if we use 'const' before enum keyword, 
// we can reduce the number of code it 
// executes in js.

// if we don't use 'const' we will get a 
// IIFE type code in compiler

const selectSeat = SeatChoice.WINDOW