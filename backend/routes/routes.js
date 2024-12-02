const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');


router.get('/',controller.getAllPosts);
router.post('/',controller.createPost);
router.put('/:id',controller.updatePost);
router.delete('/:id',controller.deletePost);

module.exports = router