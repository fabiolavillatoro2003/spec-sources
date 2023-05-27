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