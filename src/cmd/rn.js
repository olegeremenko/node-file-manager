import { join, parse } from "path";
import { rename } from 'fs/promises';
import validateNotEmpty from "../validators/NotEmptyParam.js";

const renameFile = async (oldFilePath, newName) => {
    validateNotEmpty(oldFilePath);
    validateNotEmpty(newName);
    const { dir } = parse(oldFilePath);
    const newFilePath = join(dir, newName);
    await rename(oldFilePath, newFilePath);
}

export default renameFile;
