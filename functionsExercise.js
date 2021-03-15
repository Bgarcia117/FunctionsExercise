// FUNCTIONS EXERCISE

// #1
function fozzieBear(){
    console.log("Wocka Wocka!");
}
fozzieBear();

// #2
function beaker(speak) {
    console.log(speak);
    console.log(speak);
    console.log(speak);
    console.log(speak);
}
beaker("Meep");

// #3
function werewolf(a, b) {
    if (a === "Muppet" && b === "Show"){
        console.log("It's time to play the music. It's time to light the lights." );
    }
}
werewolf("Muppet", "Show")

// #4
function kermit() {
    return "Kermit The Frog";
}
// OR 
// kermit = () => "Kermit The Frog";

// #5
function muppetShowSeasons(seasons) {
    if (seasons === 5){
        return true;
    }
    return false;
}

// #6a
const muppets = [
    "Kermit The Frog",
    "Miss Piggy",
    "Fozzie Bear",
    "The Great Gonzo"
];

// #6b
function showMuppets(names){
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
};
showMuppets(muppets);

// #7
const manOrMuppet = function(){
    console.log("Am I a man or am I a Muppet?");
}
manOrMuppet();

// #8
rainbowConnection = () => (
    "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me"
);
console.log(rainbowConnection());

// #9
// No

// #10
// Yes

// #11a
const newMuppetMovies = [
    "The Muppets", "Muppets Most Wanted"
]

// #11b
function upperC(movie){
    return movie.toUpperCase();
}
const upperCs = newMuppetMovies.map(upperC)
console.log(upperCs);

// #12a
const oldMuppetMovies = [
    "The Muppet Movie",
    "The Muppets Take Manhattan",
    "The Great Muppet Caper",
    "The Muppet Christmas Carol", 
    "Muppet Treasure Island",
    "Muppets From Space"
];

// #12b
const twoMovies = oldMuppetMovies.filter(title => title === "The Great Muppet Caper" || title === "Muppet Treasure Island");
console.log(twoMovies);

// BONUS

// #13a
const charactersOne = [
    "Statler",
    "Waldorf"
];

// #13b
const charactersTwo = [
    "The Swedish Chef",
    "Animal", 
    "Rowlf"
];

// #13c
function randomMuppet(characters){
    console.log(characters[Math.floor(Math.random() * characters.length)]);
}

// #13d
randomMuppet(charactersOne);
randomMuppet(charactersTwo);

// #14
function isLetter(str){
    return str.length === 1 && str.match(/[a-z]/i);
  }
  function caps(string){
    let newString = "";
    let n = 0;
    for (letter of string){
      if (isLetter(letter)){
        if (n % 2 === 0){
          newString += letter.toUpperCase();
          n++;
        } else {
          newString += letter.toLowerCase();
          n++;
        }
      } else {
        newString += letter;
      }
    }
    return newString;
  }
  
  console.log(caps(`I Love The Muppets`));