const genres = ['Action', 'Comedy', 'Thriller', 'Fantasy', 'Adventure'];
const get2RandomGeners = () => `${genres[Math.floor((Math.random() * genres.length))]}, ${genres[Math.floor((Math.random() * genres.length))]}`;

const filmsStub = (new Array(42)).fill({}, 0).map((elem, index) => (
    {
        id: index,
        title: `stub${index} ${genres[index % genres.length]}`,
        date: 1998 + index,
        rating: Math.floor((Math.random() * 10)),
        genre: get2RandomGeners(),
        duration: '165',
        description: 'winter coming, winter coming, winter coming, winter coming, winter coming...',
    }));

const isString = str => str && typeof str === 'string';
export const searchByGenres = (text) => {
    if (isString(text)) {
        const geners = text.split(',').map(v => v.trim().toLowerCase());
        return filmsStub.filter((film) => {
            const filmGenre = film.genre.split(',').map(v => v.trim().toLowerCase());
            const allGenreFound = geners.every(g => filmGenre.find(filmG => filmG === g));
            return allGenreFound;
        });
    }
    return [];
};

export const searchByGenre = (genreStr) => {
    if (isString(genreStr)) {
        return filmsStub.filter((film) => {
            const str = genreStr.toLowerCase();
            return film.genre.toLowerCase().search(str) !== -1;
        });
    }
    return [];
};

export const searchByTitle = (titleStr) => {
    if (isString(titleStr)) {
        return filmsStub.filter((film) => {
            const str = titleStr.toLowerCase();
            return film.title.toLowerCase().search(str) !== -1;
        });
    }
    return [];
};
