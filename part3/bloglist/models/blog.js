const mongoose = require("mongoose");

const url = process.env.MONGODB_URI || "mongodb://localhost/bloglist";

mongoose
	.connect(url, { useNewUrlParser: true })
	.then(() => {
		console.log("Connected to MongoDB", url);
	})
	.catch((err) => {
		console.log("Error connecting to MongoDB", err.message);
		process.exit(1);
	});

const blogSchema = new mongoose.Schema({
	title: String,
	author: String,
	url: String,
	likes: Number,
});

blogSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model("Blog", blogSchema);
