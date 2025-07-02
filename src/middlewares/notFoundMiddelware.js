/**
|--------------------------------------------------
| Title: not found Module
| Description: handle this not found page.
| Author: Md. Suruj Miah
| License: MIT
| Date: Date: 02/07/2025
|--------------------------------------------------
*/

const createError = require('http-errors');

// Middleware to handle 404 Not Found errors
const notFound = (req, res, next) => {
    next(createError(404, 'Not Found'));
}

// Middleware to handle errors
const errorHandler = (err, req, res, next) => {
   res.locals.error = process.env.NODE_ENV === 'development' ? err : {message: err.message, status: err.status};
   res.status(err.status || 500);
   if(res.locals.html){
        res.render("error/404", {
            title: "Error",
            error: err,
            status: err.status || 500,
            message: err.message || 'Internal Server Error'
        });
   }else{
        res.json({
            status: err.status || 500,
            message: err.message || 'Internal Server Error',
            error: res.locals.error
        });
   }
}

// Export the middleware functions
module.exports = {
    notFound,
    errorHandler
};