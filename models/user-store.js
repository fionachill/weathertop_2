import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";

const db = initStore ("users");

export const userStore = {
    async getAllUsers() {
        await db.read();
        return db.data.users;
    },

    async addUser(user) {
        await db.read();
        user._id = v4();
        db.data.users.push(user);
        await db.write();
        return user;
    },

    async getUserById(id) {
        await db.read();
        return db.data.users.find((user) => user._id === id);
    },

    async getUserByEmail(email){
        await db.read();
        return db.data.users.find((user) => user.email === email);
    },

    async deleteUserById(id) {
        await db.read();
        const index = db.data.users.findIndex((user) => user._id === id);
        db.data.users.splice(index, 1);
        await db.write();
    },

    async deleteAll(){
        db.data.users = [];
        await db.write();
    },

    async updateUser(userId, updatedUser){
        console.log(updatedUser);
        console.log(userId);
        const user = await this.getUserById(userId);
        console.log(user)
        user.firstName = updatedUser.firstName;
        user.lastName = updatedUser.lastName;
        user.email = updatedUser.email;
        user.password = updatedUser.password;
        await db.write();
    },

}