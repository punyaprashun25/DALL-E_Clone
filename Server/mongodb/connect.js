import mongoose from "mongoose";

const connectDB = (url) => {
    // used when we search
    mongoose.set('strictQuery', true);

    mongoose.connect(url).then(() => console.log('MongoDB connected')).catch((err) => console.log(err));
}

export default connectDB;