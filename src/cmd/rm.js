import { rm } from 'fs/promises';
import validateNotEmpty from "../validators/NotEmptyParam.js";

const removeFile = async (fileName) => {
    validateNotEmpty(fileName);
    await rm(fileName);
}

export default removeFile;
