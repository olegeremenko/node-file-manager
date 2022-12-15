import { readdir } from 'fs/promises';
import {dirname} from "path";
import {fileURLToPath} from "url";

const baseDir = dirname(fileURLToPath(import.meta.url));

const listFiles = async (startDir) => {
    let path = baseDir;

    if (startDir.length !== 0) {
        path = startDir;
    }

    try {
        const filesList = await readdir(path);
        console.table(filesList);
    } catch {
        throw new Error('FS operation failed');
    }
};

export {
    listFiles
}
