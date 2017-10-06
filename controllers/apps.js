const App = require('../models/App.js')

module.exports = {
    index: (req, res) => {
        App.find({}, (err, apps) => {
            if(err) return console.log(err)
            res.json(apps)
        })
    },

    create: (req, res) => {
        var newApp = new App(req.body)
        newApp.save((err, app) => {
            if(err) return console.log(err)
            res.json({success:true, message:"App tracked.", app:app})
        })
    },

    show: (req, res) => {
        App.findById(req.params.id, (err, app) => {
            if(err) return console.log(err)
            res.json(app)
        })
    },

    //functionality untested, no router
    update: (req, res) => {
        App.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, app) =>{
            if (err) return console.log(err)
            res.json(app)
        })

    },
    //functionality untested, no router
    destroy: (req, res) => {
        App.findByIdAndRemove(req.params.id, (err, app) =>{
            if (err) return console.log(err)
            res.json({success: true, message: "Your app has been TERMINATED 🤖"})
        })
    },

}