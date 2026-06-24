require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Do not accept requests until the database is ready.
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Startup failed: ${error.message}`);
    // Allow starting the server without a DB for local development when
    // START_WITHOUT_DB=true is set in the environment (or in .env).
    if (process.env.START_WITHOUT_DB === "true") {
      console.warn("START_WITHOUT_DB=true — starting server without DB connection.");
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT} (no DB)`);
      });
    } else {
      process.exit(1);
    }
  }
};

startServer();
