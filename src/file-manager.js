import { parseArgs } from "./args.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Transform } from "stream";
import { listFiles } from "./fs/list.js";

let username = 'Guest';
let workingDirectory = '';

const allowedCommands = [
    'ls', '.exit'
]

const getUserName = (args) => {
    let username = '';

    args.forEach((elem) => {
        if (elem.prop == 'username') {
            username = elem.value;
        }
    })

    return username;
}

const printGreeting = () => {
    console.log(`Welcome to the File Manager, ${username}!`);
}
const printGoodbye = () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
}
const printCurrentWorkingDirectory = () => {
    console.log(`You are currently in ${workingDirectory}!`);
}
const printPrompt = () => {
    process.stdout.write('> ');
}
const printInvalidInput = () => {
    console.log('Invalid input');
}

const getHomeDirectory = () => {
    return dirname(fileURLToPath(import.meta.url));
}

const init = () => {
    const args = parseArgs();
    username = getUserName(args);
    workingDirectory = getHomeDirectory();

    printGreeting();
    printCurrentWorkingDirectory();
}

const waitUserInput = async () => {
    printPrompt();

    const myTransformStream = new Transform({
        transform(chunk, encoding, callback) {
            const command = chunk.toString().replace(/\n$/, '');

            if (allowedCommands.indexOf(command) === -1) {
                printInvalidInput();
            }

            if (command === 'ls') {
                listFiles(workingDirectory);
            }

            if (command === '.exit') {
                process.exit(0);
            }

            printPrompt();
            callback();
        }
    });

    process.stdin.pipe(myTransformStream).pipe(process.stdout);
}

init();

waitUserInput();
