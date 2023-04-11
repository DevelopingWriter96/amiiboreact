import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [amiibos, setAmiibos] = useState([])
  const [selected, setSelected] = useState([])

  useEffect(() => {
    async function getAmiibos() {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/')
      const data = await res.json()

      setAmiibos(data.amiibo)

      console.log(data.amiibo)

    }
    getAmiibos()
  }, [])

  async function details(name, series) {
    const res = await fetch(`https://www.amiiboapi.com/api/amiibo/?amiiboSeries=${series}&name=${name}&showgames&showusage`)
    const data = await res.json()
    
    console.log(data.amiibo[0])

    setSelected(data.amiibo[0])

    
  }

  const list = amiibos.map((figure) => (
    <li key={figure.tail} onClick={() => details(figure.name, figure.amiiboSeries)} ><img src={figure.image} class="icon" alt={figure.name}/>{figure.name}</li>
  ))

  return (
    <>
    <div class="info">
    <img src={selected.image} alt="selected amiibo"/>
    <h2>{selected.name}</h2>
    <h3>{selected.amiiboSeries}</h3>
    <h3>{selected.gameSeries}</h3>
    </div>
    <div class="list">
    <h1>Amiibo!</h1>
    <ul>{list}</ul>
    </div>
    </>
  )
}

export default App;
