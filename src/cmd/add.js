import { createWriteStream } from "fs";
import { pipeline } from 'stream/promises';
import validateNotEmpty from "../validators/NotEmptyParam.js";

const createFile = async (fileName) => {
    validateNotEmpty(fileName);
    const writeStream = createWriteStream(fileName);
    await pipeline('', writeStream);
}

export default createFile;
