import { StatusCodes } from 'http-status-codes';
import Bar from '../models/Bars.js';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const createBar = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    throw new BadRequestError('Please Provide All Values!');
  }

  const bar = await Bar.create(req.body);
  res.status(StatusCodes.CREATED).json({ bar });
};

const deleteBar = async (req, res) => {
  res.send('delete');
};

const getAllBars = async (req, res) => {
  res.send('get all');
};

const showStats = async (req, res) => {
  res.send('show stats');
};

const updateBar = async (req, res) => {
  res.send('update');
};

export { createBar, deleteBar, getAllBars, updateBar, showStats };
