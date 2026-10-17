const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

let tasks = [
  { id: 1, title: "Initialize Git Repository", status: "Completed" },
  { id: 2, title: "Containerize with Docker", status: "Completed" },
  { id: 3, title: "Set up GitHub Actions CI/CD", status: "In Progress" }
];

app.get("/api/tasks", (req, res) => res.json(tasks));

app.post("/api/tasks", (req, res) => {
  const newTask = { id: tasks.length + 1, title: req.body.title || "New Task", status: "Pending" };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
