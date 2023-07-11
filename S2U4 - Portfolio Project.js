
//Find random number between 0 and 3.
let numRandom = Math.floor(Math.random()*4);
console.log(numRandom);

let storage = {
    name : ["Brent", "Claire", "Charlie", "Kevin", "Sideways", "Butch", "Cereal-killer"],
    type: ["Assault", "Medic", "Engineer", "Support", "Recon", "Scount", "Commander"],
    slogan: ["destroy", "love", "suprise", "ambush", "care", "anihilate", "kill", "eat", "butcher"], //I'm gonna () the enemy
};



if (numRandom === 0) {
    console.log("You are an amazing human being!");
} else if (numRandom === 1) {
    console.log("No matter how tough life is, you just got to find something to get you up in the morning. Find something that brings you joy!");
} else if (numRandom === 3) {
    console.log("You got this!");
} else {
    console.log("Wow! You're amazing");
}
