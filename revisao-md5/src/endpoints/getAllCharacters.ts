import { Request, Response } from "express";
import { character } from "../types";
import connection from "../connection";


export default async function getAllCharacters(req: Request, res: Response): Promise<void> {
    try {
        const{name, orderBy, orderType, page} = req.query
        
        // const result: character[]= await connection.raw("SELECT * FROM character")
        //res.send(result[0])
        //calculo paginação ===> a cada 5 resultados na mesma pagina
        const resultsPerPage = 5
        const offset = resultsPerPage * ( Number (page) -1)

        debugger

        const characters: character[] = await connection("character")
           .where("name","like",`%${name}%`)
           .orderBy(orderBy as string || "name", orderType as string)
           .offset(offset)


        res.send(characters)

    } catch (e: any) {
        res.status(500).send("Unexpected error")
    }

}