/**
|--------------------------------------------------
| Title: not found Module
| Description: handle this not found page.
| Author: Md. Suruj Miah
| License: MIT
| Date: 2023-10-01
|--------------------------------------------------
*/

const createError = require('http-errors');

// Middleware to handle 404 Not Found errors
const notFound = (req, res, next) => {
    next(createError(404, 'Not Found'));
}

// Middleware to handle errors
const errorHandler = (err, req, res, next) => {
   res.render("error/404",{
    title: "Page Not Found",
    error: err,
    status: err.status || 500,
    message: err.message || 'Internal Server Error'
   });
}

// Export the middleware functions
module.exports = {
    notFound,
    errorHandler
};