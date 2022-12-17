import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import validateNotEmpty from "../validators/NotEmptyParam.js";

const unzip = async (srcFile, dstFile) => {
    validateNotEmpty(srcFile);
    validateNotEmpty(dstFile);
    const inputStream = createReadStream(srcFile);
    const unzip = createUnzip();
    const outStream = createWriteStream(dstFile);
    inputStream.pipe(unzip).pipe(outStream);
};

export default unzip;

