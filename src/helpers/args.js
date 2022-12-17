const parseArg = (argString) => {
    const argParts = argString.split('=');
    const propNameRaw = argParts.shift();

    if (propNameRaw.startsWith('--')) {
        const propName = propNameRaw.substring(2);

        if (propName.length > 0) {
            return {
                name: propName,
                value: argParts.length > 0 ? argParts.shift() : null
            };
        }
    }

    return {
        name: propNameRaw,
        value: null,
    };
}

const getArgs = (argsRaw) => {
    let argsResult = {};

    argsRaw.forEach((arg) => {
        const { name, value } = parseArg(arg);
        argsResult[name] = value;
    });

    return argsResult;
}

const parseArgs = () => {
    return getArgs(process.argv.slice(2));
};

export default parseArgs;
