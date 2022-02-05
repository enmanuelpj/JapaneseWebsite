const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index.html', { title: '私のサイト' });
})

router.get('/contact', (req,res) => {
    res.render('contact.html', { title: 'Contact Page' });
})

module.exports = router;