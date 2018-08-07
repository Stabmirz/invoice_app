// Exercise 1
var oper1 = 16+8
var oper2 = 32-8
var oper3 = 8*3
var oper4 = 48/2
console.log(oper1,oper2,oper3,oper4)

// Exercise 2

var op1 = 6 % 3
var op2 = 10 % 2
var op3 = 5 % 2
console.log(op1<=op2)


// Exercise 3

var string1 = "Test Grade as Follows:\n"
var string2 = "\t Student 1: 96 \n"
var string3 = "\t Comment :\"none\""
console.log(string1 + string2 + string3)
// exercise 4

var numbers = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
console.log(numbers[2] + numbers[4])

//Exercise 5

var me = {
    Firstname: "Abida",
    Lastname: "Mirza",
    Land: "Bangladesh",
    Hobby: "Fishing",
    Zipcode: "33179"  ,
}
console.log(`Hello, my name is  ${me.Lastname}. I am from ${me['Land']}.`)
// Exercise 6

var num = 1

while(num <=10){
    if(num % 2 == 0){
        console.log(num)
    }
    num++
}

 for( var i=1; i<=10; i++){
     if( i % 2 ==1)
     console.log(i)
 }


