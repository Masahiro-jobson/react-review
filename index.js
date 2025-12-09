let express = require("express");
let app = express();

let core = require("cors");
app.use(core());
let router = express.Router();

router.get("/", function(req,resp,next){
     const data = [{
          name: "Masa",
          age: 28,
        },
        {
          name: "Jack",
          age: 27,
        },
        {
          name: "Charie ",
          age: 28,  
        }
    ]
    resp.send(data);

});

app.use("/api/", router);

applisten(5000, function()){
    console.log("app is running");
}