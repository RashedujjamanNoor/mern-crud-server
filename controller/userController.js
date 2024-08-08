import User from "../model/userModel.js";

export const create = async (req, res) => {
  try {
    const userData = new User(req.body);

    if (!userData) {
      return res.status(404).json({ msg: "User not found" });
    }

    const saveData = await userData.save();
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

export const showUsers = async (req, res) => {
  try {
    const showData = await User.find();
    if (!showData) {
      return res.status(404).json({ msg: "no user found" });
    }

    res.status(200).json(showData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const singleUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const showUser = await User.findById(userId);
    if (!showUser) {
      return res.status(404).json({
        msg: "user not found",
      });
    }
    res.status(200).json(showUser);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const existUser = await User.findById(userId);
    if (!existUser) {
      res.status(404).json({ msg: "user not exist" });
    }
    await User.findByIdAndDelete(existUser);
    res.status(200).json({ msg: "user deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const existUser = await User.findById(userId);
    if (!existUser) {
      return res.status(404).json({ msg: "user not exist" });
    }

    const updatedData = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
