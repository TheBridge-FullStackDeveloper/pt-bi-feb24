const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TasksController')

router.post('/create', TaskController.create)
router.get('/getAll', TaskController.getAll)
router.get('/:_id', TaskController.getById)
router.put('/completed/:_id', TaskController.update)
router.put('/id/:_id', TaskController.updateTitle)
router.delete('/id/:_id', TaskController.deleteTask)

module.exports = router
