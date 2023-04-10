import './App.css';
import { useEffect, useState } from 'react';

function BaseList() {

const [amiibos, setAmiibos] = useState([])

  useEffect(() => {
    async function getAmiibos() {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/')
      const data = await res.json()

      setAmiibos(data.amiibo)

      console.log(data.amiibo)

      const list = amiibos.map((figure) => {
        <li>{figure.name}</li>
      })

      return (
        <>
          <ul>{list}</ul>
        </>
      )
    }
    getAmiibos()
  }, [])
}

function App() {

  return (
    <>
    <h1>Amiibo!</h1>
    <BaseList />
    </>
  )
}

export default App;
