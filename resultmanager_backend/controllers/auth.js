import { User } from "../model/user.js";
import bcrypt from "bcryptjs";

export async function signUp(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res
      .status(400)
      .json({ success: false, message: "No Email or Password provided" });

  const userExist = await User.find({ email: { $eq: email } });
  if (userExist.length)
    return res
      .status(409)
      .json({ success: false, message: "User with email already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const userData = new User({ name, email, password: hashedPassword });
  try {
    const newUser = await userData.save();
    return res
      .status(201)
      .json({ success: true, message: "User created", data: newUser });
  } catch (err) {
    console.log(err);
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(409)
        .json({ success: false, message: "No Email or Password provided" });

    const user = await User.findOne({ email: { $eq: email } });
    if (!user)
      return res.status(409).json({
        success: false,
        message: `Couldn't find user with provided email.`,
      });
    const passwordMatched = await bcrypt.compare(password, user.password);

    if (!passwordMatched)
      return res
        .status(409)
        .json({ success: false, message: `Password didn't match` });
    return res
      .status(200)
      .json({ success: true, message: "logined successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
}
