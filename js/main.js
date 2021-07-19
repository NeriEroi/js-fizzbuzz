// Stampa numeri da 1 a 100

// Stampa Fizz per multipli di 3

// Stampa Buzz per multipli di 5

// Stampa FizzBuzz per multipli di 3 e di 5

var numeroIterazioni = 100;


for (var i = 1; i < numeroIterazioni + 1; i++) 
{
    if ((i % 3 == 0) && (i % 5 == 0))
    {
     console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
     console.log("Fizz");
    }
    else if (i % 5 == 0)
    {
     console.log("Buzz");
    }
    else 
    {
     console.log(i);
    }
}



    











