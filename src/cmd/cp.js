import { join, parse } from "path";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import validateNotEmpty from "../validators/NotEmptyParam.js";

const copyFile = async (srcFile, dstPath) => {
    validateNotEmpty(srcFile);
    validateNotEmpty(dstPath);
    const { base } = parse(srcFile);
    const dstFile = join(dstPath, base);
    await pipeline(createReadStream(srcFile), createWriteStream(dstFile));
}

export default copyFile;
