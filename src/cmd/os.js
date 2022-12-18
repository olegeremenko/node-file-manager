import { homedir, userInfo, cpus, EOL } from "os";
import { ERR_INVALID_KEY } from "./../helpers/const.js";
import InvalidInputError from "../exceptions/InvalidInputError.js";
import validateNotEmpty from "../validators/NotEmptyParam.js";

const formatCpuInfo = (cpu) => {
    return {
        model: cpu.model,
        speed: `${(cpu.speed / 1000.0).toFixed(2)} GHz`,
    };
}

const getCpus = () => {
    return cpus().map(cpu => formatCpuInfo(cpu));
}

const availableParams = ['EOL', 'cpus', 'homedir', 'username', 'architecture'];

const getOsInfo = (key) => {
    let result = null;
    switch (key) {
        case 'EOL':
            result = JSON.stringify(EOL);
            break;
        case 'cpus':
            result = getCpus();
            break;
        case 'homedir':
            result = homedir();
            break;
        case 'username':
            result = userInfo().username;
            break;
        case 'architecture':
            result = process.arch;
            break;
    }
    return result;
}

const getOsKey = (param) => {
    const key = param.substring(2);
    if (!param.startsWith('--') || !availableParams.includes(key)) {
        throw new InvalidInputError(ERR_INVALID_KEY);
    }
    return key;
}

const osInfo = async (param) => {
    validateNotEmpty(param);
    const key = getOsKey(param)
    const result = getOsInfo(key);
    console.table(result);
}

export default osInfo;
