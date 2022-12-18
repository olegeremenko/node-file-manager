import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import validateNotEmpty from "../validators/NotEmptyParam.js";

const zip = async (srcFile, dstFile) => {
    validateNotEmpty(srcFile);
    validateNotEmpty(dstFile);
    const inputStream = createReadStream(srcFile);
    const gzip = createGzip();
    const outStream = createWriteStream(dstFile);
    inputStream.pipe(gzip).pipe(outStream);
};

export default zip;
