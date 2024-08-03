const Task = require('../models/Task')

const TaskController = {
	async create(req, res) {
		try {
			const task = await Task.create(req.body)
			res.status(201).send(task)
		} catch (error) {
			res.status(400).send({ message: error })
		}
	},
	async getAll(req, res) {
		try {
			const tasks = await Task.find()
			res.status(200).send(tasks)
		} catch (error) {
			res.status(500).send({ message: 'algo ha fallado en el servidor', error })
		}
	},
	async getById(req, res) {
		try {
			const task = await Task.findById(req.params._id)
			res.status(200).send(task)
		} catch (error) {
			res.status(500).send({ message: 'No encontrado', error })
		}
	},
	async update(req, res) {
		try {
			const paramsId = req.params._id
			const taskUpdated = await Task.findById(paramsId)
			const task = await Task.findByIdAndUpdate(
				paramsId,
				{
					completed: !taskUpdated.completed,
				},
				{ new: true }
			)

			if (!task) {
				return res
					.status(400)
					.send({ message: 'Task no encontrada con ese id' })
			}
			res.status(200).send({ message: 'Task completada', task })
		} catch (error) {
			res
				.status(400)
				.send({ message: 'no se ha podido actualizar el estado', error })
		}
	},
	async updateTitle(req, res) {
		try {
			const taskTitle = await Task.findByIdAndUpdate(
				req.params._id,
				{ title: req.body.title },
				{ new: true }
			)
			res.send({ message: 'titulo actualizado correctamente', taskTitle })
		} catch (error) {
			res.send({ message: 'todo mal', error })
		}
	},
	async deleteTask(req, res) {
		try {
			await Task.findByIdAndDelete(req.params._id)
			res.status(204).send({ message: 'task deleted' })
		} catch (error) {
			res.status(500).send({ message: 'error', error })
		}
	},
}

module.exports = TaskController
