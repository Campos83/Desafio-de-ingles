console.log("Crie 3 variáveis, cada uma com um array:");
console.log("Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:");

let ScienceFiction = [
    {
       title: "Interstellar",
       director: "Christopher Nolan",
       year: 2014
    },

    {
        title: "Gravity",
        director: "Alfonso Cuarón",
        year: 2013
    },

    {
        title: "Tides",
        director: "Tim Fehlbaum",
        year: 2021
    }
]

let action = [
    {
        title: "Avengers Ultimato",
        director: "Anthony Russo, Joe Russo",
        year: 2019
    },

    {
        title: "Conan the Barbarian",
        director: "John Milius",
        year: 1982
    },

    {
        title: "Gladiador",
        director: "Ridley Scott",
        year: 2000
    }
]

let fantasy = [
    {
        title: "Harry Potter",
        director: "Chris Columbus",
        year: 2001
    },

    {
        title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        director: "Andrew Adamson",
        year: 2005
    },
          
    {
        title: "Pirates of the Caribbean - The Curse of the Black Pearl",
        director: "Gore Verbinski",
        year: 2003
    }
]

console.log("Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console:");

let favoriteMovie = true

if (favoriteMovie == true){
    console.log("My favorite movie is:", action[3].title);
}else{
    console.log("Not even 5 star");
}