const User = require("./User");
const EmailCode = require("./EmailCode");

EmailCode.belongsTo(User)
User.hasMany(EmailCode)

// git add .
// git commit -m ' advances'
// git push