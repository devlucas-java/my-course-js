import mongoose from "mongoose"

const MONGODB_URL = 'mongodb+srv://curso:9rzKDAAHRzyTzrEI@curso.pws9oig.mongodb.net/curso?appName=curso'

export async function mongo() {
    try {
        await mongoose.connect(MONGODB_URL)
        console.log("Connected to mongo db success full")
    } catch (e) {
        console.log("Error connecting to mong db", e)
    }
}


const userSchrema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String }
})

export const User = mongoose.model("User", userSchrema)
