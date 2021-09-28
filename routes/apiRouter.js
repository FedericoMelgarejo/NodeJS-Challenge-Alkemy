var express = require('express');
var router = express.Router();
const apiController = require('../controllers/apiController')
const auth = require('../middlewares/auth')

//------------------------------------------------------------------

// GET HOME
router.get('/',(req,res)=>{
    res.send('Welcome to my Disney API! go to /auth/register (POST) to generate your token!')
});

//Login/Register
router.post('/auth/register',apiController.register); //Register


// Character GET Routes
 router.get('/character',auth,apiController.characterList); //List
 router.get('/character/:id',auth, apiController.characterDetail) //Detail
 
// Character POST Routes
 router.post('/character/create', auth,apiController.createCharacter) //Create
 router.put('/character/edit/:id', auth,apiController.editCharacter) //Edit
 router.delete('/character/delete/:id', auth,apiController.deleteCharacter) //Delete

//------------------------------------------------------------------

// Movie GET routes
 router.get('/movie',auth,apiController.movieList); //List
 router.get('/movie/:id', auth,apiController.movieDetail) //Detail

// Movie POST routes
 router.post('/movie/create', auth,apiController.createMovie) //Create
 router.put('/movie/edit/:id', auth,apiController.editMovie) //Edit
 router.delete('/movie/delete/:id', auth,apiController.deleteMovie) //Delete
 



module.exports = router;
