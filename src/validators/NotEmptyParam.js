import InvalidInputError from "../exceptions/InvalidInputError.js";
import { ERR_FILE_NAME } from "../helpers/const.js";

const validateNotEmpty = (param) => {
    if (!param || param.length === 0) {
        throw new InvalidInputError(ERR_FILE_NAME);
    }
}

export default validateNotEmpty;
