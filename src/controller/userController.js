/**
|--------------------------------------------------
| Title: User Controller Module
| Description: handle user Controller.
| Author: Md. Suruj Miah
| License: MIT
| Date: Date: 02/07/2025
|--------------------------------------------------
*/


//object init
const userController = {};

//login
userController.login = async (req, res) =>{ 
    res.render("user/login", {
        title: "Login Chat Application",
    });
}

//get users
userController.getUsers = async (req, res) => {

}

//export controller
module.exports = userController;

