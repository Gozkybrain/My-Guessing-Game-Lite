var myVar;

        function myFunction() {
            myVar = setTimeout(showPage, 2000);
        }

        function showPage() {
            document.getElementById("loader").style.display = "none";
            document.getElementById("myDiv").style.display = "block";
        }


        // random value generated

        var y = Math.floor(Math.random() * 10 + 1);



        // counting the number of guesses

        // made for correct Guess

        var guess = 1;



        document.getElementById("submitguess").onclick = function () {



            // number guessed by user

            var x = document.getElementById("guessField").value;


            // css for z variale

            var bra = "<div class='brazil'>";
            var il = "</div>";




            // results

            var z;


            if (x == y) {

                z = "Wow! You got it!";

            }

            else if (x > y) /* if guessed number is greater

                                                   than actual number*/ {

                guess++;

                z = "OOPS You're wrong, The Answer is " + y + "!";

            }

            else {

                guess++;

                z = "OOPS You're wrong, The Answer is " + y + "!";

            }
            document.getElementById("demo").innerHTML = bra + z + "<br /><br /><div class=''>" + "<button class='return' onClick='window.location.reload();'>Try Again</button>" + "</div > " + il;
        }