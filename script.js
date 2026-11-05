
// var mark=100
// switch (mark) {
//     case (mark>90):
//         console.log("grade a")
//         break;

//     default: 
//        console.log("No Entries")
// }
// var mark=[90,50,60,70,80]
// var length=mark.length
// var it=0
// var total=0

// while(it<length){
//     total=total+mark[it]
//     it=it+1
// }
// console.log(total)

// var signal =prompt("Enter a traffic signal colour");
// switch(true){
//     case(signal=="Red"):
//     console.log("Stop");
//     break;
//      case(signal=="Yellow"):
//     console.log("Get Ready");
//     break;
//      case(signal=="Green"):
//     console.log("Go");
//     break;
//     default:
//         console.log("invalid Signal")
// }
// var food= Number(prompt("Enter the food item number (1,5)"));
// var quantity=Number(prompt("Enter quantity"));

// switch (true){

//     case (food == 1):
//         console.log("Biriyani");
//         console.log("Total Bill: " + (150 * quantity));
//         break;

//     case (food == 2):
//         console.log("Fried Rice");
//         console.log("Total Bill: " + (120 * quantity));
//         break;

//     case (food == 3):
//         console.log("Burger");
//         console.log("Total Bill: " + (100 * quantity));
//         break;

//     case (food == 4):
//         console.log("Pizza");
//         console.log("Total Bill: " + (250 * quantity));
//         break;

//     case (food == 5):
//         console.log("Shawarma");
//         console.log("Total Bill: " + (90 * quantity));
//         break;

//     default:
//         console.log("Invalid Food Item");  

// 
var secretNumber = 25;
var guess = Number(prompt("Guess the secret number"));

while (guess != secretNumber) {
    guess = Number(prompt("Wrong guess! Try again"));
}

console.log("Congratulations! Correct Guess.");