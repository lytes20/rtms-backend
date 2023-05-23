const express = require("express"); // import

const app = express(); // intialise express

app.use(express.json());

const port = 4000; //

// Endpoint(route)

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Make request to the database

  if (username === "Gideon" && password === "1234") {
    res.status(200).json({ message: "Successful login" });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/**
 * - HTTP Method:
 *
 */
