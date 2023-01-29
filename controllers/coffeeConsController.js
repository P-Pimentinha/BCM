import { StatusCodes } from 'http-status-codes';

import CoffeeCons from '../models/CoffeeCons.js';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import checkPermissions from '../utils/checkPermission.js';

const createCoffee = async (req, res) => {
  const { kilos, barID, createdBy } = req.body;

  if (!kilos && !barID) {
    throw new BadRequestError('Please Provide All Values!');
  }

  req.body.createdBy = req.user.userId;

  const coffee = await CoffeeCons.create(req.body);
  res.status(StatusCodes.CREATED).json({ coffee });
};

const getAllCoffeValues = async (req, res) => {
  const coffee = await CoffeeCons.find({ barID: req.body.barID });

  res.status(StatusCodes.OK).json({ coffee });
};

export { createCoffee, getAllCoffeValues };
