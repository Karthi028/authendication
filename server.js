const { default: mongoose } = require("mongoose");
const app = require("./app");
const { MONGODB_URI, PORT } = require("./utils/configs");

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('connected to database');
        console.log("connecting to server");

        app.listen(PORT, () => {
            console.log("connected to server")
            console.log(`server runs on http://localhost:${PORT}`)
        });
    })
    .catch((err) => {
        console.log("erorr connecting to database", err)

    });




