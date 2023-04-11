import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [amiibos, setAmiibos] = useState([])

  useEffect(() => {
    async function getAmiibos() {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/')
      const data = await res.json()

      setAmiibos(data.amiibo)

      console.log(data.amiibo)

    }
    getAmiibos()
  }, [])

  const list = amiibos.map((figure) => (
    <li key={figure.tail}><img src={figure.image} class="icon"/>{figure.name}</li>
  ))

  return (
    <>
    <h1>Amiibo!</h1>
    <ul>{list}</ul>
    </>
  )
}

export default App;
