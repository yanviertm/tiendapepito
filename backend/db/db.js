import mongoose from "mongoose";
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with DB success");
  } catch (error) {
    console.log("Error in connection:\n" + error);
  }
};

export default {dbConnection};
