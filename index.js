const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const passportSetup = require("./passport");
const app = express();
const authRoute = require("./routes/auth");

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "https://incandescent-kringle-368dd7.netlify.app",
    //origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);
// app.use("https://capestonebackend.onrender.com/auth", authRoute);
app.listen("5000", () => {
  console.log("server running");
});
