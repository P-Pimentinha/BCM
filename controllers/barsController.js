const createBar = async (req, res) => {
  res.send('createJob');
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
