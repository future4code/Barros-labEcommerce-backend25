import {Movie, Character, GENDER} from "./types";


export const movies: Movie[] = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994
    },
    {
        id: 2,
        title: "The Godfather",
        year: 1972
    },
]

export const character: Character[] = [
    {
        id: 1,
        name: "Han Solo",
        gender: GENDER.FEMALE
    },
    {
        id: 2,
        name: "Leia Organa",
        gender: GENDER.FEMALE,
        description:"Princesa Leia Organa ou General Leia Organa"
    },
    {
        id: 3,
        name: "Yoda",
        gender: GENDER.OTHER
    }
    

]

