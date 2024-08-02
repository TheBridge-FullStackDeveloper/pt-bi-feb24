import {useEffect, useContext, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {GlobalContext} from '../../../context/GlobalState'

const EditTask = () => {
  const {_id} = useParams()
  const {task, getTask, editTask} = useContext(GlobalContext)
  const [title, setTitle] = useState('')
  let navigate = useNavigate()

  useEffect(() => {
    getTask(_id)
  }, [])

  useEffect(() => {
    setTitle(task.title)
  }, [task.title])

  const handleSubmit = (event) => {
    event.preventDefault()
    editTask(task._id, {title})

    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title || ''}
        name='title'
      />
      <button type='submit'>Edit task</button>
    </form>
  )
}

export default EditTask
