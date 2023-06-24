const sources = require('../models/SourceModel')

module.exports = {
    add_source: (req, res) => {
        sources.create(req.body.source)
        .then(sourcesData =>{
            console.log(sourcesData);
            res.json({"message": "Added source:", data: sourcesData});
        })
        .catch(err=>{
            console.log(err);
            res.json(err);
        })
    },
    sources: (req,res)=>{
        sources.find({})
        .then(sourcesData => {
            console.log(sourcesData);
            res.json({"message": "Sources:", data: sourcesData});
        })
        .catch(err=>{
            console.log(err);
            res.json(err);
        })
        
    },
    testing: (req,res) =>{
        res.json({"message": "WORKING"})
    },
    delete_source: (req, res) => {
        sources.findOneAndDelete({sourceId: req.params.id}) 
        .then(sourcesData =>{
            console.log(sourcesData);
            res.json({"message":"Deleted source", data: sourcesData})
        })
        .catch(err=>{
            console.log(err);
            res.json(err);
        })
    },
};

/*
module.exports = {
    //http://localhost:8080/api/hello
    hello: (req, res) => {
        res.json({"message": "Hello World!"});
    },
    //http://localhost:8080/api/sources
    sources: (req, res) => {
        res.json({"message": "Retrieving"});
    },
    //http://localhost:8080/api/add_source
    add_source: (req, res) => {
        res.json({"message": "Added"});
    },
    //http://localhost:8080/api/delete_source/1
    delete_source: (req, res) => {
        res.json({"message": "Deleted"});
    },
};
*/