

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


MatchesRouter.get(

    "/newsread",

    (req,res)=>{


const result= new MatchesController().newsread( req.query??null)

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

    "/TeamH2Hread",

    (req,res)=>{


const result= new MatchesController().TeamH2Hread( req.query??null)

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

    "/playerDetailsread",

    (req,res)=>{


const result= new MatchesController().playerDetailsread( req.query??null)

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

    "/PerticulerTeamMatchesRead",

    (req,res)=>{


const result= new MatchesController().PerticulerTeamMatchesRead( req.query??null)

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

    "/TeamPlayerStatsread",

    (req,res)=>{


const result= new MatchesController().TeamPlayerStatsread( req.query??null)

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

    "/Leaguesread",

    (req,res)=>{


const result= new MatchesController().Leaguesread(req.query??null)

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