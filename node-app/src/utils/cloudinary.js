const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../../.env") });
const cloudinary = require("cloudinary").v2;

console.log("====================================");
console.log(
  process.env.cloud_name,
  process.env.api_key,
  process.env.api_secret
);
console.log("====================================");
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

module.exports = cloudinary;
