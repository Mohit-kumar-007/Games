const max = prompt("enter your max number");

const random= Math.floor(Math.random()*max)+1;

let guess = prompt("guss the number");

while (true){
    if (guess == "quit"){
        console.log("user quit");
        break;
    }
    if (guess == random ){
        alert("congratulations you win !!")
        console.log("you are right! congrats!! random number was ", random);
        break;

    } else if (guess < random){
        guess = prompt ("hint : your guess was too small. please try again");
    }else {
        guess = prompt ("hint : your guess was too large. please try again")
    }
}
