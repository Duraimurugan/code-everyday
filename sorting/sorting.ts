const movieList = [
  'Citizen Kane',
  '2001: A Space Odyssey',
  'the Silence of the Lambs',
  'Star Wars'
]


/**
* Javascript sorting method by default uses unicode sorting
* Mutates the original array
*/
const sortedMovieList = movieList.slice()
.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(sortedMovieList);

// Output: ["2001: A Space Odyssey", "Citizen Kane", "Star Wars", "the Silence of the Lambs"]