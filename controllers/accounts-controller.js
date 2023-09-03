import { userStore } from "../models/user-store.js";

export const accountsController = {
    index(request, response) {
        const viewData = {
            title: "Login or Signup",
        };
        response.render("index", viewData);
    },

    login(request, response){
        const viewData = {
            title: "Log in to WeatherTop",
        };
        response.render("login-view", viewData);
    },

    logout(request, response) {
        response.cookie("station", "");
        response.redirect("/");
    },

    signup(request, response) {
        const viewData = {
            title: "Log in to WeatherTop",
        };
        response.render("signup-view", viewData);
    },

    async register(request, response) {
        const user = request.body;
        await userStore.addUser(user);
        console.log(`registering ${user.email}`);
        response.redirect("/");
    },

    async authenticate(request, response) {
        const user = await userStore.getUserByEmail(request.body.email);
        if (user) {
            response.cookie("station", user.email);
            console.log(`logging in ${user.email}`);
            response.redirect("/dashboard");
        }else{
            response.redirect("/login");
            console.log(`user not found`);
        }
    },

    async getLoggedInUser(request) {
        const userEmail = request.cookies.station;
        return await userStore.getUserByEmail(userEmail);
    },

    async profile(request,response) {
        const loggedInUser = await accountsController.getLoggedInUser(request);
        const viewData= {
            title: "Edit Profile",
            user: loggedInUser,
        };
        response.render("profile-view",viewData);
    },

    async update(request, response) {
        const loggedInUser = await accountsController.getLoggedInUser(request);
        console.log(loggedInUser);
        console.log(loggedInUser._id);
        const userId = (loggedInUser._id);
        console.log(userId);
        const updatedUser = {
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            email: request.body.email,
            password: request.body.password,
        };
        console.log(`Updating User ${userId}`);
        await userStore.updateUser(userId, updatedUser);
        response.redirect("/profile");
    },
    
};