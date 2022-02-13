const express = require('express');
const router = express.Router();
const{gettodo,Settodo,Updatetodo,Deletetodo} = require('../Controllers/todocontroller')

router.get('/',gettodo);
router.post('/',Settodo);

router.put('/:id',Updatetodo);
router.delete('/:id',Deletetodo);



module.exports = router 