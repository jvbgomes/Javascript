import BaseError from "./baseError.js";

class BadRequest extends BaseError {
    constructor(message = "One or more fields are invalid") {
        super(message, 400);
    }
}

export default BadRequest;