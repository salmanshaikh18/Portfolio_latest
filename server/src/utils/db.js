import mongoose from "mongoose"

export const connectToDB = async () => {
    try {
        await mongoose.connect(`mongodb://localhost:27017`, {
            dbName: "portfolio"
        })
        .then((db) => {
            console.log(`Database named ${db.connection.name} is connected to ${db.connection.host} at port ${db.connection.port}`)
        })
    } catch (error) {
        handleError(error, "connectToDB")
    }
}