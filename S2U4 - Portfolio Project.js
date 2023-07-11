
//Function - returns a random number for index selection
const getRandomNum = num => {
    return Math.floor(Math.random()*(num));
}

//Object that stores our character information
let storage = {
    name : ["Brent", "Claire", "Charlie", "Kevin", "Sideways", "Butch", "Cereal-killer", "Nelly"],
    type: ["Assault", "Medic", "Engineer", "Support", "Recon", "Scout", "Commander"],
    slogan: ["destroy", "love", "suprise", "ambush", "take care of", "anihilate", "kill", "eat", "butcher", "have tea time with", "duel", "dance with", "cuddle", "get killed by"], //I'm gonna () the enemy
};

//Gets character information and outputs it as a prompt
const getCharacter = (name, type, slogan) => {
    
    console.log(`My name is ${name}.`);
    console.log(`I play ${type}.`);
    console.log(`I'm going to ${slogan} the enemy!`);
}

//Gets the parameter for getCharacter using storage object and getRandomNum to find the index.
let getName = storage.name[getRandomNum(storage.name.length)];
let getType = storage.type[getRandomNum(storage.type.length)];
let getSlogan = storage.slogan[getRandomNum(storage.slogan.length)]

//Get your character!
getCharacter(getName, getType, getSlogan);

