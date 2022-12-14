const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./.env" });
mongoose
  .connect(
    process.env.DATABASE_CONNECTION_STRING.replace(
      "<PASSWORD>",
      process.env.DATABASE_PASSWORD
    ),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB connection successful");
  });

app.listen(process.env.PORT, () => {
  console.log("App is running on port 3000");
});
