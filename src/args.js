
const parseArg = (argString) => {
    const argParts = argString.split('=');

    if (argParts.length > 0) {
        const propNameRaw = argParts[0];

        if (propNameRaw.startsWith('--')) {
            const propName = propNameRaw.substring(2);

            if (propName.length > 0) {
                return {
                    prop: propName,
                    value: argParts.length > 1 ? argParts[1] : null
                };
            }
        }
    }

    return undefined;
}

const getArgs = (argsRaw) => {
    let argsResult = [];

    for (let i = 0; i < argsRaw.length; i++) {
        const parsedProp = parseArg(argsRaw[i]);

        if (parsedProp !== undefined) {
            argsResult.push(parsedProp);
        }
    }

    return argsResult;
}

const parseArgs = () => {
    return getArgs(process.argv.slice(2));
};

export {
    parseArgs
}
