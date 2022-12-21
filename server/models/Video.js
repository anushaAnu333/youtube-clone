const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		videoImg: {
			type: String,
			required: true,
		},
		videoUrl: {
			type: String,
			required: true,
		},
        views:{
            type:Number,
            default:0
        },
        tags:{
            type:[String],
            default:[]//if no tags
        },
        likes:{
            type:[String],
            default:[]
        },
        dislikes:{
            type:[String],
            default:[]
                }
	},
	{ timestamps: true }
);

const VideoModel = mongoose.model("Video", VideoSchema);
module.exports = { VideoModel };
