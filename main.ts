Q1 ----------

Already done

Q2 ----------

let fullName: string = "Muhammad Haroon";
console.log(`Hello ${fullName}, would you like to learn some Python today?`);

Q3 ----------

let fullName: string = "muhammad haroon";

console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());

let splitName: string[] = fullName.split("");
splitName[0] = splitName[0].toUpperCase();
for (let i = 0; i < splitName.length; i++) {
    if (splitName[i] === " ") {
        splitName[i+1] = splitName[i+1].toUpperCase();
    }
}
console.log(splitName.join(""));

Q4 ----------

let fullName: string = "Albert Einstein";
let quote: string = "A person who never made a mistake never tried anything new.";

console.log(`${fullName} once said, "${quote}"`);

Q5 ----------

let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said, A person who never made a mistake never tried anything new.`;
console.log(message);

Q6 ----------

let fullName: string = "\n\tHaroon\n\t";
console.log(fullName);
fullName = fullName.trim();
console.log(fullName);

Q7 ----------

console.log(5 + 3);
console.log(9 - 1);
console.log(4 * 2);
console.log(8 / 1);

Q8 ----------

console.log(8);
console.log(8);
console.log(8);
console.log(8);

Q9 ----------

const favouriteNumber: number = 10;
console.log(`Your favourite number is ${favouriteNumber}.`);

Q10 ----------

Muhammad Haroon 16/02/2024
This program is revealing the favourite number
const favouriteNumber: number = 10;
console.log(`Your favourite number is ${favouriteNumber}.`);

Q11 ----------

let names: string[] = ["Haroon", "Farooq", "Umer"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
} 

Q12 ----------

let names: string[] = ["Haroon", "Farooq", "Umer"];
for (let i = 0; i < names.length; i++) {
    console.log(`Hi my name is ${names[i]}.`);
}

Q13 ----------

let names: string[] = ["motorcycle", "car", "train"];
for (let i = 0; i < names.length; i++) {
    console.log(`I would like to own a Honda ${names[i]}.`);
}

Q14 ----------

let guestsList: string[] = ["Haroon", "Farooq", "Umer"];
for (let i = 0; i < guestsList.length; i++) {
    console.log(`Hey ${guestsList[i]}, I am inviting you to the dinner party.`);
}

Q15 ----------

let guestsList: string[] = ["Haroon", "Farooq", "Umer"];
for (let i = 0; i < guestsList.length; i++) {
    console.log(`Hey ${guestsList[i]}, I am inviting you to the dinner party.`);
}
console.log(`${guestsList[1]} is busy, so he cannot come to dinner.`);
guestsList[1] = "Hassaan";
for (let i = 0; i < guestsList.length; i++) {
    console.log(`Hey ${guestsList[i]}, I am inviting you to the dinner party.`);
}

Q16 ----------

function invitationCard(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Hey ${arr[i]}, I am inviting you to the dinner party.`);
    }
}

let guestsList: string[] = ["Haroon", "Farooq", "Umer"];
invitationCard(guestsList);
console.log(`\n${guestsList[1]} is busy, so he cannot come to the dinner.\n`);
guestsList[1] = "Hassaan";
invitationCard(guestsList);
console.log(`Hey everyone I have founded a bigger dinner table.`);
guestsList.unshift("Hamza");
guestsList.splice(2, 0, "Huzaifa");
guestsList.push("Ali");
invitationCard(guestsList);

Q17 ----------

function invitationCard(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Hey ${arr[i]}, I am inviting you to the dinner party.`);
    }
}

let guestsList: string[] = ["Haroon", "Farooq", "Umer"];
invitationCard(guestsList);
console.log(`\n${guestsList[1]} is busy, so he cannot come to the dinner.\n`);
guestsList[1] = "Hassaan";
invitationCard(guestsList);
console.log(`Hey everyone I have founded a bigger dinner table.`);
guestsList.unshift("Hamza");
guestsList.splice(2, 0, "Huzaifa");
guestsList.push("Ali");
invitationCard(guestsList);
console.log(`I have shortage of space so I will only invite only two people for dinner.`);
for (let i = guestsList.length - 1; i != 1; i--) {
    console.log(`I am sorry, I cannot invite you to the dinner, ${guestsList[i]}`);
    guestsList.pop();
}
invitationCard(guestsList);
guestsList.pop();
guestsList.pop();
console.log(guestsList);

Q19 ----------

function invitationCard(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Hey ${arr[i]}, I am inviting you to the dinner party.`);
    }
}

let guestsList: string[] = ["Haroon", "Farooq", "Umer"];
console.log(`I am inviting ${guestsList.length} guests to dinner.`);
invitationCard(guestsList);
console.log(`\n${guestsList[1]} is busy, so he cannot come to the dinner.\n`);
guestsList[1] = "Hassaan";
console.log(`I am inviting ${guestsList.length} guests to dinner.`)
invitationCard(guestsList);
console.log(`Hey everyone I have founded a bigger dinner table.`);
guestsList.unshift("Hamza");
guestsList.splice(2, 0, "Huzaifa");
guestsList.push("Ali");
console.log(`I am inviting ${guestsList.length} guests to dinner.`);
invitationCard(guestsList);
console.log(`I have shortage of space so I will only invite only two people for dinner.`);
for (let i = guestsList.length - 1; i != 1; i--) {
    console.log(`I am sorry, I cannot invite you to the dinner, ${guestsList[i]}`);
    guestsList.pop();
}
console.log(`I am inviting ${guestsList.length} guests to dinner.`);
invitationCard(guestsList);
guestsList.pop();
guestsList.pop();
console.log(`I am inviting ${guestsList.length} guests to dinner.`);
console.log(guestsList);

Q20 ----------

const randomThings: any[] = ["USA", "Pakistani", 100];

Q21 ----------

const car: {make: string, model: string, year: number} = {
    make: "Toyota",
    model: "Corolla",
    year: 2001
}

Q22 ----------

let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers[7])
console.log(numbers[1])

Q23 ----------

let x: number = 5;
let y: number = 10;

console.log("Is x < y? I predict True.");
console.log(x < y);

console.log("Is y >= x? I predict True.");
console.log(y >= x);

console.log("Is x == y? I predict False.");
console.log(x == y);

console.log("Is x != y? I predict True.");
console.log(x != y);

console.log("Is x <= 5? I predict True.");
console.log(x <= 5);

console.log("Is y > 20? I predict False.");
console.log(y > 20);

console.log("Is x == '5'? I predict False.");
console.log(x == 17);

console.log("Is y != '10'? I predict False.");
console.log(y != 10);

console.log("Is x === 5? I predict True.");
console.log(x === 5);

console.log("Is y === 10? I predict True.");
console.log(y === 10);

Q24 ----------

let string1: string = "Hello";
let string2: string = "hello";
console.log(string1 === string2);
console.log(string1 !== string2); 

let string: string = "HeLLo";
let lowerString: string = string.toLowerCase();
console.log(lowerString === "hello");  
console.log(lowerString !== "hello");

let num1: number = 10;
let num2: number = 5;
console.log(num1 === num2);  
console.log(num1 !== num2);  
console.log(num1 > num2);    
console.log(num1 < num2);    
console.log(num1 >= num2);   
console.log(num1 <= num2); 

let x: number = 5;
let y: number = 10;
let z: number = 15;
console.log(x < y && y < z);  
console.log(x > y || y < z); 

let array1: number[] = [1, 2, 3, 4, 5];
console.log(array1.indexOf(3) != -1); 
console.log(array1.indexOf(1) != -1);

let array2: number[] = [1, 2, 3, 4, 5];
console.log(!(array2.indexOf(3) != -1)); 
console.log(!(array2.indexOf(6) != -1));
 
Q25 ----------

const alien_color: string = "green";
if (alien_color === "red") {
    console.log(`The player just earned 5 points.`);
}
if (alien_color === "green") {
    console.log(`The player just earned 5 points.`);
}
if (alien_color === "yellow"){
}

Q26 ----------

const alien_color: string = "green";
if (alien_color === " green") {
    console.log(`Player just earned 5 points for shooting the alien`);
} else {
    console.log(`Player just earned 10 points`);
}

const alien_color: string = "red";
if (alien_color === " green") {
    console.log(`Player just earned 5 points for shooting the alien`);
} else {
    console.log(`Player just earned 10 points`);
}

Q27 ----------

const alien_color: string = "red";

if (alien_color === "green") {
    console.log(`The player earned 5 points.`);
} else if (alien_color === "yellow") {
    console.log(`The player earned 10 points.`);
} else if (alien_color === "red") {
    console.log(`The player earned 15 points`);
}

const alien_color: string = "green";

if (alien_color === "green") {
    console.log(`The player earned 5 points.`);
} else if (alien_color === "yellow") {
    console.log(`The player earned 10 points.`);
} else if (alien_color === "red") {
    console.log(`The player earned 15 points`);
}

const alien_color: string = "yellow";

if (alien_color === "green") {
    console.log(`The player earned 5 points.`);
} else if (alien_color === "yellow") {
    console.log(`The player earned 10 points.`);
} else if (alien_color === "red") {
    console.log(`The player earned 15 points`);
}

Q28 ----------

let age: number = 20;
if (age < 2) {
    console.log(`The person is a baby.`);
} else if (age < 4) {
    console.log(`the person is a toddler.`);
} else if (age < 13) {
    console.log(`The person is a kid.`);
} else if (age < 20) {
    console.log(`Ther person is a teenager.`);
} else if (age < 65) {
    console.log(`The person is an adult.`);
} else {
    console.log(`The person is an elder`);
}

Q29 ----------

let favorite_fruits: string[] = ['apple', 'banana', 'strawberry'];

if (favorite_fruits.indexOf('apple') != -1) {
    console.log("You really like apples!");
}

if (favorite_fruits.indexOf('banana') != -1) {
    console.log("You really like bananas!");
}

if (favorite_fruits.indexOf('strawberry') != -1) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.indexOf('kiwi') != -1) {
    console.log("You really like kiwis!");
}

if (favorite_fruits.indexOf('orange') != -1) {
    console.log("You really like oranges!");
}

Q30 ----------

let usernames: string[] = ["Eric", "John", "admin", "Elsa"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
        console.log(`Hello admin, would you like to see status report?`);
    } else {
        console.log(`Hello ${usernames[i]}, thankyou for logging in again`);
    }
}

Q31 ----------

let usernames: string[] = [];
if (usernames.length === 0){
    console.log(`We need to find some users`);
}
else {
    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] === "admin") {
             console.log(`Hello admin, would you like to see status report?`);
        } else {
             console.log(`Hello ${usernames[i]}, thankyou for logging in again`);
    }
}
}

Q32 ---------

let current_users: string[] = ["Haroon", "Farooq", "Umer", "Salman", "Ali"];
let new_users: string[] = ["John", "Jae", "HAROON", "Huzaifa", "Ali"];

for (let i = 0; i < current_users.length; i++) {
    current_users[i] = current_users[i].toLowerCase();
}
for (let i = 0; i < new_users.length; i++) {
    let newUser: string = new_users[i].toLowerCase();
    if (current_users.indexOf(newUser) === -1) {
        console.log(`Username is available.`);
    } else {
        console.log(`Person will need to enter a new username.`);
    }
}

Q33 ---------

const numbers: number[] = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] === 1) {
        console.log(`${numbers[i]}st`);
    } else if (numbers[i] === 2) {
        console.log(`${numbers[i]}nd`);
    } else if (numbers[i] === 3) {
        console.log(`${numbers[i]}rd`);
    } else {
        console.log(`${numbers[i]}th`);
    }
}

Q34 ---------

const favouritePizzas: string[] = ["BBQ", "Chicken Tikka", "Malai Boti"];
for (let i = 0; i < favouritePizzas.length; i++) {
    console.log(favouritePizzas[i]);
}
for (let i = 0; i < favouritePizzas.length; i++) {
    console.log(`I like ${favouritePizzas[i]} pizza`);
}
console.log(`I like cheesy pizza.`);
console.log(`I like peporoni pizza.`);
console.log(`I like vegetable pizza.`);
console.log(`I really love pizza!`);

Q35 ---------

const favouritePet: string[] = ["dog", "cat", "horse"];
for (let i = 0; i < favouritePet.length; i++) {
    console.log(favouritePet[i]);
}for (let i = 0; i < favouritePet.length; i++) {
    console.log(`A ${favouritePet[i]} would make a great pet.`);
}
console.log(`Any of these animals would make a great pet.`)

Q36 ---------

function make_shirt(size: string, text: string): void {
    console.log(`The size of shirt is ${size}, and ${text} is written on it.`);
}

make_shirt("small", "I love football");

Q37 ----------

function make_shirt(size: string = "large", text: string = "I love TypeScript"): void {
    console.log(`The size of shirt is ${size}, and ${text} is written on it.`);
}

make_shirt();
make_shirt("medium");
make_shirt("small", "I love cricket");

Q38 ----------

function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");

Q39 ----------

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

city_country("Lahore", "Pakistan");
city_country("Islamabad", "Pakistan");
city_country("Karachi", "Pakistan");

Q40 ---------

function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    if (tracks != undefined) {
        album.tracks = tracks;
    }

    return album;
}

let album1 = make_album("Adele", "25");
let album2 = make_album("Ed Sheeran", "Divide");
let album3 = make_album("Taylor Swift", "Folklore");
let album4 = make_album('Ali Zafar', "Janoon", 10);

console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);

Q41 ---------

function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

show_magicians(["Ali", "Haroon", "Hamza"]);

Q42 ---------

function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians: string[]): string[] {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
    return magicians;
}

let magicians: string[] = ["Ali", "Haroon", "Hamza"];
let greatMagicians = make_great(magicians);
show_magicians(greatMagicians);

Q43 ---------

function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians: string[]): string[] {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
    return magicians;
}


let magicians: string[] = ["Ali", "Haroon", "Hamza"];
let copiedArray: string[] = ["Ali", "Haroon", "Hamza"];
let newArray:string[] = make_great(copiedArray);

show_magicians(newArray);
show_magicians(magicians);

Q44 ---------

function makeSandwich(items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    } else {
        console.log("You ordered a sandwich with:");
        for (let i = 0; i < items.length; i++) {
            console.log(`- ${items[i]}`);
        }
        }
}

makeSandwich(["Turkey", "Lettuce", "Tomato", "Mayo"]);
makeSandwich(["Ham", "Cheese"]);
makeSandwich([]);

Q45 ---------

function storeInformation(manufactor: string, modelName: string, color?: string): { manufactor: string, modelName: string, color?: string} {
    let information: { manufactor: string, modelName: string, color?: string } = {
                 manufactor: manufactor,
                 modelName: modelName,
    
    };
    if (color !== undefined) {
        information.color = color
    }

    return information
}

console.log("Honda", "Accord");
console.log("Honda", "Accord", 1972);


