import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <TaskForm className="container mx-auto p-10"/>
      <TaskList />
    </main>
  )
}
export default App
