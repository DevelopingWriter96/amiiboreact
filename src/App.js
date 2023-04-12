import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [amiibos, setAmiibos] = useState([])
  const [selected, setSelected] = useState([])
  const [games3ds, setGames3ds] = useState([])
  const [gamesWiiu, setGamesWiiu] = useState([])
  const [gamesSwitch, setGamesSwitch] = useState([])
  const [date, setDate] = useState("0000-00-00")

  //Amiibo List Retrieval
  useEffect(() => {
    async function getAmiibos() {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/')
      const data = await res.json()

      setAmiibos(data.amiibo)

      console.log(data.amiibo)

    }
    getAmiibos()
  }, [])

  //Amiibo Details Retrieval
  async function details(name, series, type) {
    if (name === "Banjo & Kazooie") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?character=Banjo&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[0])

      setSelected(data.amiibo[0])
    } else if (name === "Midna & Wolf Link") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?character=Midna&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[0])

      setSelected(data.amiibo[0])
    } else if(name==="Zelda & Loftwing") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?character=Zelda&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[4])

      setSelected(data.amiibo[4])
    } else if(name==="Rosalina & Luma") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?character=Rosalina&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[1])

      setSelected(data.amiibo[1])

    } else if(name==="Timmy & Tommy" && type==="Card") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?gameseries=Animal Crossing&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[22])
      
      setSelected(data.amiibo[22])
    } else if(name==="Timmy & Tommy" && type==="Figure") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?gameseries=Animal Crossing&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[21])
      
      setSelected(data.amiibo[21])
    } else if(name==="Mr. Game & Watch") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?amiiboseries=Super Smash Bros.&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[590])
      
      setSelected(data.amiibo[590])
    } else {  
      const res = await fetch(`https://www.amiiboapi.com/api/amiibo/?amiiboSeries=${series}&name=${name}&type=${type}&showgames&showusage`)
      const data = await res.json()
      
      console.log(data.amiibo[0])

      setSelected(data.amiibo[0])
    }

    console.log(selected.release.na)

    setDate(selected.release.na)

    setGames3ds(selected.games3DS)

    setGamesWiiu(selected.gamesWiiU)

    setGamesSwitch(selected.gamesSwitch)
  }

  const ds = games3ds.map((game) => (
    <li key={game.gameID[0]}>{game.gameName}</li>
  ))

  const wiiu = gamesWiiu.map((game) => (
    <li key={game.gameID[0]}>{game.gameName}</li>
  ))
  
  const ns = gamesSwitch.map((game) => (
    <li key={game.gameID[0]}>{game.gameName}</li>
  ))

  const list = amiibos.map((figure) => (
    <li key={figure.tail} onClick={() => details(figure.name, figure.amiiboSeries, figure.type)} ><img src={figure.image} class="icon" alt={figure.name}/>{figure.name}</li>
  ))

  return (
    <>
    <h1>Amiibo!</h1>
    <div class="info">
    <img src={selected.image} alt="selected amiibo" class="selectedImage"/>
    <h2>{selected.name}</h2>
    <h3>Released in the US on {date} as part of the {selected.amiiboSeries} Amiibo Series</h3>
    <h3>Character is from {selected.gameSeries}</h3>
    <h3>Compatible Games:</h3>
    <h4>3DS</h4>
    <ul>{ds}</ul>
    <h4>WiiU</h4>
    <ul>{wiiu}</ul>
    <h4>Switch</h4>
    <ul>{ns}</ul>
    </div>
    <div class="list">
    <ul>{list}</ul>
    </div>
    </>
  )
}

export default App;
