export type Movie = {
    id: number;
    title: string;
    year: number;
}

export enum GENDER {
    MALE = 'male',
    FEMALE = 'famale',
    OTHER = 'other'
}

export type Character = {
    id: number;
    name: string;
    gender: GENDER;
    description?: string
}