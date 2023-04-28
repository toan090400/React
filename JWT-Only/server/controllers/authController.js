const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    // Check username
    const username = req.body.username;
    const oldUser = await User.findOne({ username: username });
    if (oldUser) {
      return res.status(404).json({
        status: false,
        message: "Tài khoản đã tồn tại.",
      });
    }
    // Hash password
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);
    // Create new user
    const newUser = await new User({
      username: username,
      password: passwordHashed,
    });
    const user = await newUser.save();
    // Ẩn password
    user.password = undefined;
    res.status(200).json({
      status: true,
      user,
      message: "Đăng ký thành công.",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const createAccessToken = (userID, userAdmin) => {
  return jwt.sign(
    {
      id: userID,
      isAdmin: userAdmin,
    },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: process.env.JWT_ACCESS_EXPIRWS_IN }
  );
};
const createRefreshToken = (userID, userAdmin) => {
  return jwt.sign(
    {
      id: userID,
      isAdmin: userAdmin,
    },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: process.env.JWT_REFRESH_EXPIRWS_IN }
  );
};
exports.login = async (req, res) => {
  try {
    // Check username
    const username = req.body.username;
    const user = await User.findOne({ username: username }).select("+password");
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "Incorrect username.",
      });
    }
    // Check password
    const password = req.body.password;
    const correct = await bcrypt.compare(password, user.password);
    if (!correct) {
      return res.status(404).json({
        status: false,
        message: "Incorrect password.",
      });
    }
    // accessToken ngắn hạn
    const accessToken = await createAccessToken(user._id, user.isAdmin);
    // refreshToken dài hạn
    const refreshToken = await createRefreshToken(user._id, user.isAdmin);
    // lưu refreshToken vào cookie
    // res.cookie("refreshToken", refreshToken, {
    //   httpOnly: true,
    //   secure: true, //true
    //   path: "/",
    //   sameSite: "strict",
    // });
    // Ẩn password
    user.password = undefined;
    res.status(200).json({
      status: true,
      user,
      accessToken,
      refreshToken,
      message: "Đăng nhập thành công.",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.refresh = async (req, res) => {
  try {
    // lấy refreshToken từ cookie
    // const refreshToken = req.cookies.refreshToken;
    const token = req.body.headers.refreshToken;
    const refreshToken = token.split(" ")[1];

    // kiểm tra nếu không có thì chưa có đăng nhập
    if (!refreshToken) {
      return res.status(404).json({
        message: "Vui lòng đăng nhập.",
      });
    }
    jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET,
      async (err, user) => {
        if (err) {
          return res.status(403).json({
            message: "refreshToken is error!",
          });
        }
        // Tạo accessToken,refreshToken mới
        const newAccessToken = await createAccessToken(user.id, user.isAdmin);
        const newRefreshToken = await createRefreshToken(user.id, user.isAdmin);
        // lưu newRefreshToken vào cookie
        // res.cookie("refreshToken", newRefreshToken, {
        //   httpOnly: true,
        //   secure: true, //true
        //   path: "/",
        //   sameSite: "strict",
        // });
        res.status(200).json({
          message: "refreshToken successfuly!",
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.logout = async (req, res) => {
  try {
    // res.clearCookie("refreshToken");
    res.status(200).json({
      status: true,
      message: "Đăng xuất thành công.",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
