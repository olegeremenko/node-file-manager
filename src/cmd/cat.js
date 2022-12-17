import { createReadStream } from "fs";
import { Writable } from 'stream';
import { pipeline } from 'stream/promises';
import validateNotEmpty from "../validators/NotEmptyParam.js";

const stdoutStream = () => {
    const options = {
        write(chunk, encoding, callback) {
            const result = chunk.toString();
            console.log(result);
            callback();
        },
    }
    return new Writable(options);
}

const printOutFile = async (fileName) => {
    validateNotEmpty(fileName);
    await pipeline(createReadStream(fileName), stdoutStream());
};

export default printOutFile;
