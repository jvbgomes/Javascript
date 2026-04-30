import mongoose from "mongoose";
import BaseError from "../errors/baseError.js";
import BadRequest from "../errors/badRequest.js";
import ValidationError from "../errors/validationError.js";

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
    if (err instanceof BaseError) {
        err.sendResponse(res);
    } else if (err instanceof mongoose.Error.CastError) {
        new BadRequest(err).sendResponse(res);
    } else if (err instanceof mongoose.Error.ValidationError) {
        new ValidationError(err).sendResponse(res);
    } else {
        new BaseError().sendResponse(res);
    }
}

export default errorHandler;
