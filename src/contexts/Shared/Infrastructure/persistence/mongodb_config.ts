import mongoose from "mongoose";

let database: mongoose.Connection;

export const connect = () => {
  // Should move to Env variable
  const URI = "mongodb://localhost:27017";
  const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 45000,
    socketTimeoutMS: 45000,
    dbName: "genially"
    };

  if(database){
    return;
  }

  mongoose
  .connect(URI, config, (err) => {
    if(err) console.log(err);
  });

  database = mongoose.connection;
  database.once("open", async () => {
    console.log("Database connection stablished");
  });
  database.on("error", async () => {
    console.log("Error connecting to Database");
  });
};

export const disconnect = () => {
  if(!database){
    return;
  }
  mongoose.disconnect();
  console.log("Database disconected successfully");
};