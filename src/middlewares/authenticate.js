const jwt = require('jsonwebtoken');
const { CustomException } = require("../utils");

const authenticate = (request, response, next) => {
    const { accessToken } = request.cookies;

    try {
        if (!accessToken) {
            throw CustomException('Access denied!', 401);
        }

        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
        request.userID = decoded._id;

        return next();
    } catch ({ message, status = 500 }) {
        return response.status(status).send({
            error: true,
            message
        });
    }
};

module.exports = authenticate;
