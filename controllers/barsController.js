import { StatusCodes } from 'http-status-codes';
import Bar from '../models/Bars.js';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const createBar = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    throw new BadRequestError('Please Provide All Values!');
  }

  req.body.createdBy = req.user.userId;

  const bar = await Bar.create(req.body);
  res.status(StatusCodes.CREATED).json({ bar });
};

const deleteBar = async (req, res) => {
  res.send('delete');
};

const getAllBars = async (req, res) => {
  const bars = await Bar.find({ createdBy: req.user.userId });
  res
    .status(StatusCodes.OK)
    .json({ bars, totalBars: bars.length, numOfPages: 1 });
};

const showStats = async (req, res) => {
  res.send('show stats');
};

const updateBar = async (req, res) => {
  res.send('update');
};

export { createBar, deleteBar, getAllBars, updateBar, showStats };
