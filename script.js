var word = "ducks";
var count = 5;

while (count > 0) {
    console.log(count + " " + word + " went out one day,");
    console.log("Over the hill and far away,");
    console.log("Mother duck said, 'Quack, quack, quack, '");
    console.log("but only " + (count - 1) + " little " + word + " came back.");
    count = count - 1;

    if (count > 1) {
        console.log();
    } else   {
        console.log("No more " + word + " went out one day.");
        // break;
    }
    count --;
}