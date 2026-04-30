import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
    if (err.status === 404) {
        res.status(404).json({ message: err.message });
    } else if (err instanceof mongoose.Error.CastError) {
        res.status(400).json({ message: `Invalid value "${err.value}" for field "${err.path}".` });
    } else if (err instanceof mongoose.Error.ValidationError) {
        const errorsMessages = Object.values(err.errors)
        .map(err => err.message)
        .join("; ");

        res.status(400).json({ message: `The following validation errors occurred: ${errorsMessages}` });
    } else {
        res.status(500).json({ message: "Internal server error." });
    }
}

export default errorHandler;