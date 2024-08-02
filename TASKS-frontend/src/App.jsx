import EditTask from './components/task-list/edit-task/EditTask'
import TaskList from './components/task-list/TaskList'
import { GlobalProvider } from './context/GlobalState'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<GlobalProvider>
				<Routes>
					<Route path="/" element={<TaskList />} />
					<Route path="/task/:_id" element={<EditTask />} />
				</Routes>
			</GlobalProvider>
		</BrowserRouter>
	)
}

export default App
