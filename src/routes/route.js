const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

//problem 1
router.get('/movie', function(req, res) {
let move = ["A", "B", "c"]
res.send(move)
})

//Problem 2
router.get('/movie/:movieId', function(req, res){ 
    let movies = ["A", "B", "c",] 
    let index = req.params.movieId
    let movieAtIndex = movies[index]
    if (index>=movies.length) {
    res.send("Invalid Input")
    } else{
    res.send(movies[index])}
})

//Problem 3
router.get('/films', function (req, res) {
    const cinema = [{
        'id': 1, 'name': 'The Shining'
    }, {
        'id': 2, 'name': 'Incendies'
    }, {
        'id': 3, 'name': 'Rang de Basanti'
    }, {
        'id': 4, 'name': 'Finding Demo'
    }]
    res.send(cinema)
})

//Problem 4
router.get('/films/:filmsId', function (req, res) {
    const cinema = [{
        'id': 1, 'name': 'The Shining'
    }, {
        'id': 2, 'name': 'Incendies'
    }, {
        'id': 3, 'name': 'Rang de Basanti'
    }, {
        'id': 4, 'name': 'Finding Demo'
    }]
    let data = req.params.filmsId
    let getData = cinema[data]
    if (data >= cinema.length) {
        res.send("No such film exists with this id.")
    }
    else {
        res.send(getData)
    }
})

module.exports = router;