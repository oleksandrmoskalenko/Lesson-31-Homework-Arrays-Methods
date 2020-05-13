"use strict"

let arr = ['4', 5, 888, 3, 'a2', '1', 666, 75, '23', 'Tracer', 6666, 12, 89, 22]

//Filter
let numArr = arr.filter(item => item === +item)
console.log(numArr)

//Even
let evenArr = numArr.map(item => item % 2 ? 2 : item)
console.log(evenArr)

//Reverse
let reverseArr = evenArr.reverse()
console.log(reverseArr)

//Display
reverseArr.forEach((item, index) => {
  console.log(`Элемент №${index} = ${item}`)
})

//Sum
let result = reverseArr.reduce((sum, current) => sum + current, 0)
console.log(`The sum is ${result}`)

