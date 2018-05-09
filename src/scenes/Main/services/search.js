import { searchByGenres, searchByGenre, searchByTitle } from './search-stub';

export default class FilmsSearchService {
    searchByTitle(text) {
        return searchByTitle(text);
    };

    searchByGenre(text) {
        return searchByGenre(text);
    };

    searchByGenres(text) {
        return searchByGenres(text);
    }
}

