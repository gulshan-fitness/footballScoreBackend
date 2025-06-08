

const express = require("express")
const MatchesController = require("../Controlers/MatchesController")


const MatchesRouter=express.Router()





MatchesRouter.get(

    "/read/:id?",

    (req,res)=>{


const result= new MatchesController().read(req.params.id??null, req.query)

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