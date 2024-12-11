import Table from '../Table/Table'
import Filters from '../Filters/Filters'
import Sorting from '../Sorting/Sorting'
import './App.css'

function App() {
  return (
    <>
      <div className="filters">
        <Filters />
        <Sorting />
      </div>
      <div className="data">
        <Table />
      </div>
    </>
  )
}

export default App
