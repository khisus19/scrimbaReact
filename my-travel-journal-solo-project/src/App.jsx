import './App.css'
import Navbar from './components/Navbar'
import TravelCard from './components/TravelCard'
import data from './data'

function App() {
  const travels = data.map(item => {
    return <TravelCard 
      key={item.id}
      title={item.title} 
      location={item.location} 
      startDate={item.startDate} 
      endDate={item.endDate} 
      description={item.description} 
      mapUrl={item.googleMapsUrl}
      imgUrl={item.imageUrl}
      />
  })
  
  return (
    <div className="App">
      <Navbar />
      <div className="cards-grid-container">
        {travels}
      </div>
    </div>
  )
}

export default App
