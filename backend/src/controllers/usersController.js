const express = require("express");
const userService = require("../services/userService");
const User = require("../models/Users")
const Success = require("../handlers/successHandler");
const logger = require("../logger/index");

const createUser = async (req, res, next) => {
  const {name, password, email, role} = req.body;
  try {
    user = await userService.save({name, password, email, role});

    res.status(201).json(new Success(user));
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res) => {
  try {
    const user = await userService.findById(req.params.id);
    res.json(new Success(user));
  } catch (err) {
    next(err);
  }
};


module.exports = {
  createUser,
  getById,
};
