#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright.italic('\n\t!XXX!WELL COME TO PAK STUDY  QUIZ!XXX!\n\t'));
let score = 0;
const questions = await inquirer.prompt([
    {
        name: 'question_one',
        type: "list",
        message: "Which one is the old name of capital of Pakistan?",
        choices: ['a=Royal pur ', 'b=Raj shahi', 'c=Ferozabad', 'd=Aurang abad']
    },
    {
        name: 'question_two',
        type: "list",
        message: "Which city of pakistan is called manchester of Pakistan?",
        choices: ['a=Karachi ', 'b=Lahor', 'c=Faisalabad', 'c=Swat']
    },
    {
        name: 'question_three',
        type: "list",
        message: "Which constitiution is implimented currently in Pakistan?",
        choices: ['a=1973', 'b=1956', 'c=1962', 'd=Non of these']
    },
    {
        name: 'question_four',
        type: "list",
        message: "Which is the second longest river of Pakistan?",
        choices: ['a=Indus ', 'b=Sutlaj', 'c=Chenab', 'd=Jehlum']
    },
    {
        name: 'question_five',
        type: "list",
        message: "Pakistan is  major exporter of which product?",
        choices: ['a=Sports ', 'b=cotton', 'c=cosmetics', 'd=electronics']
    },
]);
console.log(chalk.bgMagentaBright('\n\t***ANSWERS***\n\t'));
switch (questions.question_one) {
    case "b=Raj shahi":
        console.log("1.correct!");
        ++score;
        break;
    default:
        console.log("1.incorrect");
}
switch (questions.question_two) {
    case "c=Faisalabad":
        console.log("2.correct!");
        ++score;
        break;
    default:
        console.log("2.incorrect");
}
switch (questions.question_three) {
    case "a=1973":
        console.log("3.correct!");
        ++score;
        break;
    default:
        console.log("3.incorrect");
}
switch (questions.question_four) {
    case "b=Sutlaj":
        console.log("4.correct!");
        ++score;
        break;
    default:
        console.log("4.incorrect");
}
switch (questions.question_five) {
    case "b=cotton":
        console.log("5.correct!");
        ++score;
        break;
    default:
        console.log("5.incorrect");
}
console.log(chalk.bgMagentaBright('\n\t***SCORE***\n\t'));
console.log(`\n\t your score is ` + chalk.green.bold(score) + `\n\t`);
