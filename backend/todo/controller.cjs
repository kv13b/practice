const userDB = require("./model.cjs");
const route = require("./route.cjs");

exports.add_task = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }
  const users = new userDB({
    task: req.body.task,
    status: req.body.status,
  });

  userDB
    .create(users)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating a create operation",
      });
    });
};

exports.get_task = async (req, res) => {
  try {
    const todo = await userDB.find();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.del = async (req, res) => {
  try {
    const todo = await userDB.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const todo = await userDB.findByIdandUpdate(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json({ message: "Todo updated" });
  } catch (error) {
    console.log(error);
  }
};
