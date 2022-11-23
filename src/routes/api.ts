import {Router} from 'express'
import { json } from 'stream/consumers'
const router = Router ()

router.get('/ping',(req,res)=>{
    res.json({pong:true})
})

router.get('/random',(req,res)=>{
    let nRad: number = Math.floor(Math.random()* 999)
    res.json({number: nRad})
})

router.get('/nome :nome',(req,res)=>{
    let nome: string = req.params.nome
    res.json({nome: `Você enviou o nome: ${nome}`})
})

export default router