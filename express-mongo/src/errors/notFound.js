import BaseError from "./baseError.js";

class NotFound extends BaseError {
    constructor(message = "Resource not found.") {
        super(message, 404);
    }
}

export default NotFound;
