const { VideoModel } = require("../models/Video.js");

const { createError } = require("../error");
const { UserModel} = require("../models/User");

const update = async (req, res, next) => {
    if (req.params.id === req.user.id) {
      try {
        const updatedUser = await UserModel.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        next(err)
      }
    } else {
      return next(createError(403, "You can update only your account!"));
    }
  };
const deleteUser = async(req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
          await UserModel.findByIdAndDelete(
            req.params.id,
        
          );
          res.status(200).json("User deleted");
        } catch (err) {
          next(err)
        }
      } else {
        return next(createError(403, "You can only delete your account!"));
      }
};

const getUser = async(req, res, next) => {
    try{
        const user=await UserModel.findById(req.params.id)
        res.status(200).json(user)

    }catch(err){
next(err)
    }
};

const subscribe = async(req, res, next) => {
    try {
        await UserModel.findByIdAndUpdate(req.user.id, {
          $push: { subscribedUsers: req.params.id },
        });
        await UserModel.findByIdAndUpdate(req.params.id, {
          $inc: { subscribers: 1 },
        });
        res.status(200).json("Subscription successfull.")
      } catch (err) {
        next(err);
      }
};

const unsubscribe = async(req, res, next) => {
    try {
        await UserModel.findByIdAndUpdate(req.user.id, {
          $pull: { subscribedUsers: req.params.id },
        });
        await UserModel.findByIdAndUpdate(req.params.id, {
          $inc: { subscribers: -1 },
        });
        res.status(200).json("Unsubscription successfull.")
      } catch (err) {
        next(err);
      } 
};
 const like = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  try {
    await VideoModel.findByIdAndUpdate(videoId,{
      $addToSet:{likes:id},
      $pull:{dislikes:id}
    })
    res.status(200).json("The video has been liked.")
  } catch (err) {
    next(err);
  }
};
 const dislike = async (req, res, next) => {
    const id = req.user.id;
    const videoId = req.params.videoId;
    try {
      await VideoModel.findByIdAndUpdate(videoId,{
        $addToSet:{dislikes:id},
        $pull:{likes:id}
      })
      res.status(200).json("The video has been disliked.")
  } catch (err) {
    next(err);
  }
};
module.exports = {
	update,
	deleteUser,
	getUser,
	subscribe,
	unsubscribe,
	like,
	dislike,
};
