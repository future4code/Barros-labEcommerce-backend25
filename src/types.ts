export type movie = {
    id: number;
    title: string;
    year: number;
}

export enum GENDER {
    MALE = 'male',
    FEMALE = 'famale',
    OTHER = 'other'
}

export type character = {
    id: number;
    name: string;
    gender: GENDER;
    description?: string
}