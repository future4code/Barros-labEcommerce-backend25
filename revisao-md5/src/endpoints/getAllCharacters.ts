import { Request, Response } from "express";
import { character } from "../data";

export default function (req: Request, res: Response):void{
    res.send(character)
}