import React from 'react'
import TaskDetail from './task-detail/TaskDetail'
import AddTask from './add-task/AddTask'

const TaskList = () => {
	return (
		<>
			<h1>TaskList</h1>
			<AddTask />
			<TaskDetail />
		</>
	)
}

export default TaskList
