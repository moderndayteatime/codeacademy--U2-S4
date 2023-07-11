
//Function - returns a random number for index selection
const getRandomNum = num => {
    return Math.floor(Math.random()*(num));
}

//Object that stores our character information
let storage = {
    name : ["Brent", "Claire", "Charlie", "Kevin", "Sideways", "Butch", "Cereal-killer", "Nelly"],
    type: ["Assault", "Medic", "Engineer", "Support", "Recon", "Scout", "Commander"],
    slogan: ["destroy", "love", "suprise", "ambush", "take care of", "anihilate", "kill", "eat", "butcher", "have tea time", "duel", "dance with", "cuddle", " get killed by"], //I'm gonna () the enemy
};

const getCharacter = (name, type, slogan) => {
    
    console.log(`My name is ${name}.`);
    console.log(`I play ${type}.`);
    console.log(`I'm going to ${slogan} the enemy!`);
}

let getName = storage.name[getRandomNum(storage.name.length)];
let getType = storage.type[getRandomNum(storage.type.length)];
let getSlogan = storage.slogan[getRandomNum(storage.slogan.length)]

getCharacter(getName, getType, getSlogan);

