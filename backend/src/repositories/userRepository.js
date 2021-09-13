const bcrypt = require("bcrypt");
const User = require("../models/Users");
const logger = require("../logger/index");

class UserRepository {
  constructor() {}

  async findById(id) {
    return await User.findById(id);
  }

  async findByEmail(email) {
    return await User.findOne({ email: email });
  }

  async save(user) {
    user.password = await bcrypt.hash(user.password, 10);
    return await User.create(user);
  }
}

module.exports = UserRepository;
