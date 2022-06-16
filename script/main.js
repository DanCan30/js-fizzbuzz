
// Creating a standard for cycle from 1 to 100
for( i = 1; i <= 100; i++) {

    // Initializing variables for the boxes
    let mainContainer = document.getElementById("container");
    let boxContent;
    let box = document.createElement("div");
    box.classList.add("box");
    
    // Setting a condition where if the index is a 3 or 5 multiplier the console.log will be different
    if (i % 3 == 0 && i % 5 == 0) {

        // #1 Valorizing the variables and giving them css classes for style
        boxContent = "FizzBuzz";
        box.classList.add("fizzbuzz");

    } else if (i % 5 == 0) {

        // #2
        boxContent = "Buzz";
        box.classList.add("buzz");

    } else if (i % 3 == 0) {

        // #3
        boxContent = "Fizz";
        box.classList.add("fizz");

    } else {

        // #4
        boxContent = i;
    }

    box.innerHTML = boxContent;
    mainContainer.append(box);
    console.log(boxContent);
}
