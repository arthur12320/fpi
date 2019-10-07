function validateMovie(movie) {
  return movie.name && movie.name.lenght !== 0
        && movie.year && movie.year.lenght !== 0
        && movie.description && movie.description.lenght !== 0
        && movie.director && movie.director.lenght !== 0
        && movie.torrent && movie.torrent.lenght !== 0;
}

module.exports = validateMovie;
