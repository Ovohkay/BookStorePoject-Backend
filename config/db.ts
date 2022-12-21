import mongoose from "mongoose";

const URI: string = "mongodb://localhost/booksDB";
const lifeURI: string =
  "mongodb+srv://BookData:BookData@cluster0.21wlwcp.mongodb.net/bookStore?retryWrites=true&w=majority";

mongoose.connect(lifeURI);
mongoose.connection
  .on("open", () => {
    console.log("DataBase Connected");
  })
  .once("error", (error) => {
    console.log(`Failed to Connect to the Database\n ${error}`);
  });
