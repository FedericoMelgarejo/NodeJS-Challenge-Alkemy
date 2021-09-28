const db = require('../database/models')
const jwt = require('jsonwebtoken')
//const sgMail = require('@sendgrid/mail') <-- SENDGRID IMPLEMENTATION IS NOT WORKING BECAUSE THEY BANNED ME (FOR SECURITY ISSUES I GUESS) XD

//sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const apiController = {
    //REGISTER
    register: function (req, res) {
        const user = {
            id: req.body.id,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }
        //let msg = {}

        jwt.sign({ user }, 'secretkey', (err, token) => {
            /*if (user.email !== undefined) {
            msg = {
                to: user.email,
                from: 'f.n.melgarejo@gmail.com',
                subject: 'From Disney API',
                text: 'Welcome to my Disney API!',
                html: '<h1>Welcome to my Disney API!</h1>',
            }
            sgMail.send(msg)
                .then(() => {
                    console.log('Email sent!')
                })
                .catch((error) => {
                    console.error(error)
                })
        } */
            if (user.username !== undefined) {
                res.json({
                    msg: "Welcome " + user.username + ",this is your authorization token!",
                    token
                })
            } else {
                res.json({
                    msg: "Welcome! this is your authorization token.",
                    token
                })
            }
        })
    },

    //CHARACTERS
    characterList: function (req, res) {
        db.Character.findAll()
            .then(function (chars) {
                if (chars) {
                    res.send(chars)
                } else {
                    res.send({ msg: 'Sorry, there are no characters to show.' })
                }
            })
            .catch(errors => {
                console.log(errors)
            })

    },
    characterDetail: function (req, res) {
        db.Character.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (char) {
                if (char) {
                    res.send(char)
                } else {
                    res.send({ msg: 'The character does not exist' })
                }
            })
            .catch(errors => {
                console.log(errors)
            })

    },
    createCharacter: function (req, res) {
        db.Character.create({
            image: req.body.image,
            name: req.body.name,
            age: req.body.age,
            weight: req.body.weight,
            history: req.body.history,
            movieORserie: req.body.movieORserie
        })
            .then(result => {
                res.send({ msg: 'Character created!' })
            })

            .catch(errors => {
                console.log(errors)
            })
    },
    editCharacter: function (req, res) {
        db.Character.update({
            image: req.body.image,
            name: req.body.name,
            age: req.body.age,
            weight: req.body.weight,
            history: req.body.history,
            movieORserie: req.body.movieORserie
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                res.send({ msg: 'Character updated!' })
            })
            .catch(errors => {
                console.log(errors)
            })
    },
    deleteCharacter: function (req, res) {
        db.Character.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send({ msg: 'Character deleted!' })
    },

    //MOVIES
    movieList: function (req, res) {
        db.Movie.findAll()
            .then(function (movs) {
                if (movs) {
                    res.send(movs)
                } else {
                    res.send({ msg: 'Sorry, there are no movies to show.' })
                }
            })
            .catch(errors => {
                console.log(errors)
            })

    },
    movieDetail: function (req, res) {
        db.Movie.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (mov) {
                if (mov) {
                    res.send(mov)
                } else {
                    res.send({ msg: 'The movie does not exist' })
                }
            })
            .catch(errors => {
                console.log(errors)
            })

    },
    createMovie: function (req, res) {
        db.Movie.create({
            image: req.body.image,
            title: req.body.title,
            date: req.body.date,
            rate: req.body.rate,
            associedChar: req.body.associedChars,
        })
            .then(result => {
                res.send({ msg: 'Movie created!' })
            })

            .catch(errors => {
                console.log(errors)
            })
    },
    editMovie: function (req, res) {
        db.Movie.update({
            image: req.body.image,
            title: req.body.title,
            date: req.body.date,
            rate: req.body.rate,
            associedChar: req.body.associedChar,
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                res.send({ msg: 'Movie updated!' })
            })
            .catch(errors => {
                console.log(errors)
            })
    },
    deleteMovie: function (req, res) {
        db.Movie.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send({ msg: 'Movie deleted!' })
    },
}
module.exports = apiController
