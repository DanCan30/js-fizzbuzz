
    // Creating a standard for cycle from 1 to 100
    for( i = 1; i <= 100; i++) {

        // Setting a condition where if the index is a 3 or 5 multiplier the console.log will be different
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");

        } else if (i % 5 == 0) {
            console.log("Buzz")

        } else if (i % 3 == 0) {
            console.log("Fizz");
            
        } else {
            console.log(i);
        }
    }
