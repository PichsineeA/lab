let randomNum = Math.floor(Math.random() * 101)
let min = 1;
let max = 100;

let number = prompt('Guess the number between ' + min + ' and ' + max + ' inclusive or input other numbers to see the secret number?');
while( number != randomNum )
{
    if (randomNum <= number)
        max = number ;
    else min = number ;
    number = prompt('Guess the number between ' + min + ' and ' + max + ' inclusive or input other numbers to see the secret number?');
}
let win = alert('Matched! You win.\nThe secret number is ' + randomNum );