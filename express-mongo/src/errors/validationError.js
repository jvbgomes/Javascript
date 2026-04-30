import BadRequest from "./badRequest.js";

class ValidationError extends BadRequest {
    constructor(err) {
        const errorsMessages = Object.values(err.errors)
        .map(err => err.message)
        .join("; ");

        super(`The following validation errors occurred: ${errorsMessages}`);
    }
}

export default ValidationError;