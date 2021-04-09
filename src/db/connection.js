const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://sagar:sagar123@cluster0.oiaht.mongodb.net/mensrace?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("coonection success");
  })
  .catch((err) => {
    console.log("coonection error", err);
  });
