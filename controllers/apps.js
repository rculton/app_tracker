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

    update: (req, res) => {

    },

    destroy: (req, res) => {
        
    },

}