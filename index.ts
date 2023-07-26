import * as readlineSync from 'readline-sync';

//Assignment 1
/*
let userName: string = "TypeScript User";

let repetitions: number = 5;
function greetUser(name: string, times: number) {
    for (let i = 0; i < times; i++) {
        console.log(`Hello, ${name}! This is greeting number ${i + 1}.`);
    }
}

greetUser(userName, repetitions);
*/

type Question = {
    question: string,
    options: string[],
    answer: string
};
const questions: Question[] = [
    {
        question: "What is TypeScript?",
        options: ["A programming language", "A movie", "A type of pseudocode"],
        answer: "A programming language"
    },
    {   question: "Who created TypeScript?",
        options: ["Microsoft", "Apple", "Google"],
        answer: "Microsoft"
    }
];

function askQuestion(question: Question): string {
    console.log(question.question);
    let index = readlineSync.keyInSelect(question.options, "Please choose your answer:");
    if (index === -1) {
        console.log("You chose to skip the question.");
        return "";
    }
    return question.options[index];
}

function runQuiz(questions: Question[]) {
    let score = 0;
    for (let question of questions) {
        let answer = askQuestion(question);
        if (answer === question.answer) {
            score++;
        }
    }
    console.log(`Your score is: ${score}/${questions.length}`);
}

runQuiz(questions);