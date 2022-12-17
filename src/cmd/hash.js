import { createHash } from 'crypto';
import { pipeline } from 'stream/promises';
import { createReadStream } from 'fs';
import validateNotEmpty from "../validators/NotEmptyParam.js";

const calcHashSha256 = async (srcFile) => {
    validateNotEmpty(srcFile);
    const hash = createHash('sha256');
    const readStream = createReadStream(srcFile);
    await pipeline(readStream, hash);
    console.log(hash.digest('hex'));
};

export default calcHashSha256;
