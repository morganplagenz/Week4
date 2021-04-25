//Week 4 Coding Assignment

//question 1

function question1(firstName, lastName){
    return `Their name is ${firstName} ${lastName}`;
}

console.log(question1("Morgan", "Plagenz"));

//question 2

var question2 = (firstName, lastName) => `Their name is ${firstName} ${lastName}`;

console.log(question2("Tom","Brown"));

//question 3a

setTimeout(() => {alert('Time is up!');}, 5000);

//question 3b

let askAreWeThereYet2 = () => alert("Are we there yet?");

function question3b(callback2){
    setInterval(callback2, 5000);
}

question3b(askAreWeThereYet2);

//question 4a

var array4A = ["String #1", "String #2", "String #3", "String #4"];

console.log(array4A); //writing this to check my work in the Console

function processSplicedValue(array, i, callback){
    array.splice(i,1);
        return callback("(psssst! this is coming from the callback!) '" + array +"'"); // using additional text in value to help me see if function is working
}

processSplicedValue(array4A,1, console.log);

//question 4b

processSplicedValue(array4A,1,alert);

//question 4c

const question4C = alertSplicedVal => alert("This is the alert for question 4C" + " '" + alertSplicedVal + "' ");

processSplicedValue(array4A, 1, question4C);

//question 4e 

const question4D = (joinElements) => joinElements + " (My function is to add text because it helps me explictely understand if my callbacks are working.)";


console.log(processSplicedValue(array4A, 1, question4D));

