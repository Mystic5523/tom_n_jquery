// Vars
var passport = require("../config/passport");
var db = require("../models");

// Routes
module.exports = function(app) {
    // Gets home page
    app.get('/', function(req, res) {
        console.log(reg.user);

        // If user exsists, proceed
        if (req.user) {
            db.User.findOne({
                where: {
                    id: req.user
                },
                raw: true
            }).then((dbUser) => {
                // send data to handlebars and render
                res.render("index", {
                    loginStatus: true,
                    dbUser
                });
            })

        } else {
            res.render("index");
        }
    });

    // Handle login route
    app.post("/login", passport.authenticate('local'), function(req, res) {
        res.json('/');
    });

    // Register route
    app.get('/sign', function(reg, res) {
        res.render('register');
    });

// Launches profile
    app.get('/profile', function(req, res) {
        res.render('profile');
    });

    // Logout route
     app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });


  // Adds user to database
    app.post("/sign", function(req, res) {

        db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password

        }).then((result)=> {
            console.log(result);
            // send user back to login page
            res.json('/login')

        }).catch(function(err) {
            //if err throw err to user
            res.json(err);
        });
    });
};
