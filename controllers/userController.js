import User from "../models/userModel.js";
import Photo from "../models/photoModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user: user._id });
  } catch (error) {
    let errors2 = {};

    if (error.code === 11000) {
      errors2.email = "The email is already registered";
    }

    if (error.name === "ValidationError") {
      Object.keys(error.errors).forEach((key) => {
        errors2[key] = error.errors[key].message;
      });
    }

    console.log("ERRORS 2 ::::", errors2);

    res.status(400).json(errors2);
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    let same = false;

    if (user) {
      same = await bcrypt.compare(password, user.password);
    } else {
      return res.status(401).json({
        success: false,
        error: "There is no such user",
      });
    }

    if (same) {
      const token = createToken(user._id);
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
      });
      res.redirect("/users/dashboard");
    } else {
      res.status(401).json({
        success: false,
        error: "Paswords are not matched",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const getDashboardPage = async (req, res) => {
  const photos = await Photo.find({ user: res.locals.user._id });
  const user = await User.findById ({id:res.locals.user._id }).populate(["followings","followers"])
  res.render("dashboard.ejs", {
    link: "dashboard",
    photos,
  });
};


const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({_id:{$ne:res.locals.user._id}});
    res.status(200).render("users", {
      users,
      link: "users",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};


const getAUser = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id })
    const photos = await Photo.find({user:user._id })
    res.status(200).render("user", {
      user,
      photos,
      link: "users",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
const follow = async (req, res) => {
  try {
    let user = await User.findByIdAndUpdate(
        {_id:req.params.id},
        {$push:{followers:res.locals.res._id}},
        {new:true}
    )

    user = await User.findByIdAndUpdate(
        {_id:res.locals.user._id},
        {$push:{following:res.params.id}},
         {new:true}
    )

    res.status(200).json({
      success:true,
      user
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const unfollow = async (req,res) => {
  try {
    let user = await User.findByIdAndUpdate(
        {_id:req.params.id},
        {$pull:{followers:res.locals.user._id}},
        {new:true}
    )

    user = await User.findByIdAndUpdate(
        {_id:req.locals.user._id},
        {$pull:{following:req.params.id}},
        {new:true}
    )
    res.status(200).json({
      success:true,
      user,
    })
  }
  catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
export { createUser, loginUser, getDashboardPage,getAllUsers,getAUser,follow,unfollow };
