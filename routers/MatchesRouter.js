

const express = require("express")
const MatchesController = require("../Controlers/MatchesController")


const MatchesRouter=express.Router()





MatchesRouter.get(

    "/read",

    (req,res)=>{


const result= new MatchesController().read( req.query??null)

result.then(
    (succes)=>{
res.send(succes)
    }
)
.catch(
    (error)=>{
        res.send(error)
    }
)

    }
)

MatchesRouter.get(

    "/readstandings",

    (req,res)=>{


const result= new MatchesController().readstandings( req.query??null)

result.then(
    (succes)=>{
res.send(succes)
    }
)
.catch(
    (error)=>{
        res.send(error)
    }
)

    }
)


MatchesRouter.get(

    "/ParticularMatchread",

    (req,res)=>{


const result= new MatchesController().ParticularMatchread( req.query??null)

result.then(
    (succes)=>{
res.send(succes)
    }
)
.catch(
    (error)=>{
        res.send(error)
    }
)

    }
)









module.exports=MatchesRouter