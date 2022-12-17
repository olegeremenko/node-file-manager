import {ERR_INVALID_INPUT} from "./const.js";

const printGreeting = (username) => {
    console.log(`Welcome to the File Manager, ${username}!`);
}
const printGoodbye = (username) => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
}
const printCurrentWorkingDirectory = (currentDirectory) => {
    console.log(`You are currently in ${currentDirectory}`);
}
const printPrompt = () => {
    process.stdout.write('> ');
}
const printInvalidInput = () => {
    console.log(ERR_INVALID_INPUT);
}

export {
    printGreeting,
    printGoodbye,
    printCurrentWorkingDirectory,
    printPrompt,
    printInvalidInput,
}
