import { StatusCodes } from 'http-status-codes';
import Bar from '../models/Bars.js';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import checkPermissions from '../utils/checkPermission.js';

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
  const { id: barId } = req.params;

  const bar = await Bar.findByIdAndDelete({ _id: barId });

  if (!bar) {
    throw new NotFoundError(`No Bar with ID ${barId}`);
  }

  checkPermissions(req.user, bar.createdBy);

  await bar.remove();
  res.status(StatusCodes.OK).json({ msg: 'Success! Bar removed' });
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
  const { id: barId } = req.params;
  const { name } = req.body;

  if (!name) {
    throw new BadRequestError('Please Provide All Values');
  }

  const bar = await Bar.findOne({ _id: barId });

  if (!bar) {
    throw new NotFoundError(`No bar with id ${barId}`);
  }

  checkPermissions(req.user, bar.createdBy);

  const updatedBar = await Bar.findByIdAndUpdate({ _id: barId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatedBar });
};

export { createBar, deleteBar, getAllBars, updateBar, showStats };
