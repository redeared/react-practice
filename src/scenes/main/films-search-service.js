import { searchByGenres as stubSearchByGenres, searchByGenre as stubSearchByGenre, searchByTitle as stubSearchByTitle } from './search-stub';

export const searchByTitle = text => stubSearchByTitle(text);

export const searchByGenre = text => stubSearchByGenre(text);

export const searchByGenres = text => stubSearchByGenres(text);
