import { homedir } from 'os';
import parseArgs from "./helpers/args.js";
import cmd from './cmd/index.js'
import { ERR_INVALID_INPUT, ERR_OPERATION_FAILED } from "./helpers/const.js";
import InvalidInputError from "./exceptions/InvalidInputError.js";
import {
    printCurrentWorkingDirectory,
    printGoodbye,
    printGreeting,
    printInvalidInput,
    printPrompt,
} from "./helpers/printMessage.js";

let username = 'Guest';
let availableCommands = ['.exit'];

const getCurrentDirectory = () => {
    return process.cwd();
}

const setExitListener = () => {
    process.on('exit', () => printGoodbye(username));
    process.on('SIGINT', () => process.exit());
}

const setHomeDirectory = () => {
    process.chdir(homedir());
}

const getAvailableCommands = () => {
    availableCommands.push(...Object.keys(cmd));
}

const main = () => {
    const args = parseArgs();
    username = args.username ?? username;

    getAvailableCommands();
    setHomeDirectory();
    setExitListener();
    setUserInputListener();

    printGreeting(username);
    printCurrentWorkingDirectory(getCurrentDirectory());
    printPrompt();
}

const parseCommandAndArgs = (commandRaw) => {
    if (commandRaw.indexOf(' ') === -1) {
        return {
            command: commandRaw,
            args: []
        };
    }

    const command = commandRaw.substring(0, commandRaw.indexOf(' '));
    const argsRaw = commandRaw.substring(commandRaw.indexOf(' ') + 1);
    const args = argsRaw
        .match(/('[^']+'|"[^"]+"|[^\s]+)(\s+|$)/g)
        .map((arg) => {
            arg = arg.trim();
            if (arg.startsWith('\'') || arg.startsWith('"')) {
                arg = arg.substring(1, arg.length - 1)
            }
            return arg;
        });

    return {
        command: command,
        args: args
    };
}

const handleCommand = async (command, args) => {
    if (!availableCommands.includes(command)) {
        printInvalidInput();
        return;
    }

    if (command === '.exit') {
        process.exit(0);
    }

    try {
        await cmd[command](...args);
    } catch (error) {
        if (error instanceof InvalidInputError) {
            console.error(ERR_INVALID_INPUT);
        } else {
            console.error(ERR_OPERATION_FAILED);
        }
    }
}

const setUserInputListener = () => {
    process.stdin.on('data', async (chunk) => {
        const commandRaw = chunk.toString().trim();
        const { command, args } = parseCommandAndArgs(commandRaw);

        await handleCommand(command, args);

        printCurrentWorkingDirectory(getCurrentDirectory());
        printPrompt();
    });
}

main();
