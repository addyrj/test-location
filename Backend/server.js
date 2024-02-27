import { app } from "./app.js";

import { connectDB } from "./database/user.js";

connectDB();
console.log(process.env.PORT);

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
