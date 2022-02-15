const express = require('express');
const router = express.Router();
const{gettodo,Settodo,Updatetodo,Deletetodo} = require('../Controllers/todocontroller')


router.route('/').get(gettodo).post(Settodo)
router.route('/:id').delete(Deletetodo).put(Updatetodo)





module.exports = router 