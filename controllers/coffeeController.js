import { StatusCodes } from 'http-status-codes';

import Coffee from '../models/Coffee.js';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import checkPermissions from '../utils/checkPermission.js';

const createCoffee = async (req, res) => {
  const { kilos, barID } = req.body;

  if (!kilos && barID) {
    throw new BadRequestError('Please Provide All Values!');
  }

  const coffee = await Coffee.create(req.body);
  res.status(StatusCodes.CREATED).json({ coffee });
};

const getAllCoffeValues = async (req, res) => {
  const coffee = await Coffee.find({ barID: req.body.barID });

  res.status(StatusCodes.OK).json({ coffee });
};

export { createCoffee, getAllCoffeValues };
