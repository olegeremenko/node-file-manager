import validateNotEmpty from "../validators/NotEmptyParam.js";

const changeDirectory = async (dirName) => {
    validateNotEmpty(dirName);
    process.chdir(dirName);
}

export default changeDirectory;
