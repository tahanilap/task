const express = require('express')
const router = express.Router();


const task_controler = require('../controller/task')
router.get('/',task_controler.getAll)
router.get('/:id',task_controler.getById )
router.post('/',task_controler.create )
router.put('/:id',task_controler.update )
router.get('/status/:status',task_controler.getByStatus )
router.delete('/:id',task_controler.remove)

module.exports = router