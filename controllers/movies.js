const Movie = require("../models/movies");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

// -> Create Movie  <-
const createMovie = async (req, res) => {
  req.body.createdBy = req.user.userID;
  const movie = await Movie.create(req.body);
  res.status(StatusCodes.CREATED).json({ movie });
};

// -> Get All Movies "created by the user" <-
const getAllMovies = async (req, res) => {
  const Movies = await Movie.find({ createdBy: req.user.userID }).sort(
    "createdAt"
  );
  res.status(StatusCodes.OK).json({ Movies, count: Movies.length });
};

// -> Get a single Movie <-
const getMovie = async (req, res) => {
  const {
    user: { userID },
    params: { id: movieId },
  } = req;

  const movie = await Movie.findOne({ _id: movieId, createdBy: userID });

  // check of a movie exist
  if (!movie) {
    throw new NotFoundError(`No movie with id ${movieId}`);
  }

  res.status(StatusCodes.OK).json({ movie });
};

// Update Movie
const updateMovie = async (req, res) => {
  const {
    body: { name },
    user: { userID },
    params: { id: movieId },
  } = req;

  // check if the name is empty
  if (name === "") {
    throw new BadRequestError("Movie name field cannot be empty");
  }

  const movie = await Movie.findByIdAndUpdate(
    { _id: movieId, createdBy: userID },
    req.body,
    { new: true, runValidators: true }
  );

  if (!movie) {
    throw new NotFoundError(`No job with id ${movieId}`);
  }

  res.status(StatusCodes.OK).json({ movie });
};

// -> Delete Movie <-
const deleteMovie = async (req, res) => {
  const {
    user: { userID },
    params: { id: movieId },
  } = req;

  const movie = await Movie.findByIdAndRemove({
    _id: movieId,
    createdBy: userID,
  });

  if (!movie) {
    throw new NotFoundError(`No Movie with id ${movieId}`);
  }

  res.status(StatusCodes.OK).send();
};

module.exports = {
  getAllMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
