
    // Creating a standard for cycle from 1 to 100
    for( i = 1; i <= 100; i++) {

        let mainContainer = document.getElementById("container");

        // Setting a condition where if the index is a 3 or 5 multiplier the console.log will be different
        if (i % 3 == 0 && i % 5 == 0) {

            let fb = "FizzBuzz";
            let fizzBuzzBox = document.createElement("div");
            fizzBuzzBox.classList.add("box", "fizzbuzz");
            fizzBuzzBox.innerHTML = fb;
            mainContainer.append(fizzBuzzBox);
            
            console.log(fb);

        } else if (i % 5 == 0) {

            let b = "Buzz";
            let buzzBox = document.createElement("div");
            buzzBox.classList.add("box", "buzz");
            buzzBox.innerHTML = b;
            mainContainer.append(buzzBox);
            console.log(b);

        } else if (i % 3 == 0) {
            
            let f = "Fizz";
            let fizzBox = document.createElement("div");
            fizzBox.classList.add("box", "fizz");
            fizzBox.innerHTML = f;
            mainContainer.append(fizzBox);
            console.log(f);

        } else {
            let normalBox = document.createElement("div");
            normalBox.classList.add("box");
            normalBox.innerHTML = i;
            mainContainer.append(normalBox);
            console.log(i);
        }
    }
