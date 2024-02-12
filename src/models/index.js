const User = require("./User");
const EmailCode = require("./emailCode");

EmailCode.belongsTo(User)
User.hasMany(EmailCode)