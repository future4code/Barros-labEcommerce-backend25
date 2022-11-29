import { Request, Response } from "express";
import { character } from "../data";

export default function createCharacter(req: Request, res: Response):void{
    const {name, gender, description}= req.body

    character.push({
        id: Date.now(),
        name,
        gender,
        description
    })
    res.status(201).end()
}