export const genres =[

    {_id: "Gn1", name: "Action"},
    {_id: "Gn2", name: "Sport"},
    {_id: "Gn3", name: "Thriller"},
    {_id: "Gn7", name: "Horror"},
    {_id: "Gn10", name: "Comedy"},


];

export function getGenres() {
    return genres.filter(g => g);

}