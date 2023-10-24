var word = "ducks";
var count = 5;

const list = document.querySelector('#list');

for(var count = 5; count >= 0; count--) {
   let textString = '${ count } little ducks went out one day, Over the hill and far away, Mother duck said, Quack, quack, quack, but only ${ count - 1 } little ducks came back.'

   const verse = document.createElement ('p');
   verse.textContent = textString;

   list.appendChild(verse);
   
    // console.log(count + " " + word + " went out one day,");
    // console.log("Over the hill and far away,");
    // console.log("Mother duck said, 'Quack, quack, quack, '");
    // console.log("but only " + (count - 1) + " little " + word + " came back.");

    // if (count > 1) {
    //     console.log();
    // } else {
    //     console.log("No more " + word + " went out one day.");
    // }



 
        // consol.log(textString);
        // const verse = document.createElement('p');
        // verse.textContent = textString; '${ 1 } bottltes of beer on th wall, ${ 1 } bottles of beer. Take one down pass ir around ${ 1 - 1 } botttles of beer on the wall.

        // list.appendChild(verse);    
}