import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [amiibos, setAmiibos] = useState([])
  const [selected, setSelected] = useState([])
  const [games3ds, setGames3ds] = useState([])
  const [gamesWiiu, setGamesWiiu] = useState([])
  const [gamesSwitch, setGamesSwitch] = useState([])
  const [date, setDate] = useState("")
  const [favorites, setFavorites] = useState([])
  const [wanted, setWanted] = useState([])
  // const [owned, setOwned] = useState([])

  //Amiibo List Retrieval
  useEffect(() => {
    async function getAmiibos() {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/')
      const data = await res.json()

      //set id
      const amiiboWithIds = data.amiibo.map((item, index) => {
        return {id: index, ...item}
      })

      setAmiibos(amiiboWithIds)

      console.log(amiiboWithIds)
    }
    getAmiibos()
  }, [])

  //Amiibo Details Retrieval
  async function details(name, series, type, selectid) {
    if (name === "Banjo & Kazooie") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?character=Banjo&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[0])

      setSelected(data.amiibo[0])

      setDate(data.amiibo[0].release.na)

      setGames3ds(data.amiibo[0].games3DS)

      setGamesWiiu(data.amiibo[0].gamesWiiU)

      setGamesSwitch(data.amiibo[0].gamesSwitch)
    } else if (name === "Midna & Wolf Link") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?character=Midna&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[0])

      setSelected(data.amiibo[0])

      setDate(data.amiibo[0].release.na)

      setGames3ds(data.amiibo[0].games3DS)

      setGamesWiiu(data.amiibo[0].gamesWiiU)

      setGamesSwitch(data.amiibo[0].gamesSwitch)
    } else if(name==="Zelda & Loftwing") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?character=Zelda&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[4])

      setSelected(data.amiibo[4])

      setDate(data.amiibo[4].release.na)

      setGames3ds(data.amiibo[4].games3DS)

      setGamesWiiu(data.amiibo[4].gamesWiiU)

      setGamesSwitch(data.amiibo[4].gamesSwitch)
    } else if(name==="Rosalina & Luma") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?character=Rosalina&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[1])

      setSelected(data.amiibo[1])

      setDate(data.amiibo[1].release.na)

      setGames3ds(data.amiibo[1].games3DS)

      setGamesWiiu(data.amiibo[1].gamesWiiU)

      setGamesSwitch(data.amiibo[1].gamesSwitch)
    } else if(name==="Timmy & Tommy" && type==="Card") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?gameseries=Animal Crossing&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[22])
      
      setSelected(data.amiibo[22])

      setDate(data.amiibo[21].release.na)

      setGames3ds(data.amiibo[21].games3DS)

      setGamesWiiu(data.amiibo[21].gamesWiiU)

      setGamesSwitch(data.amiibo[21].gamesSwitch)
    } else if(name==="Timmy & Tommy" && type==="Figure") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?gameseries=Animal Crossing&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[21])
      
      setSelected(data.amiibo[21])

      setDate(data.amiibo[21].release.na)

      setGames3ds(data.amiibo[21].games3DS)

      setGamesWiiu(data.amiibo[21].gamesWiiU)

      setGamesSwitch(data.amiibo[21].gamesSwitch)
    } else if(name==="Mr. Game & Watch") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?amiiboseries=Super Smash Bros.&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[590])
      
      setSelected(data.amiibo[590])

      setDate(data.amiibo[590].release.na)

      setGames3ds(data.amiibo[590].games3DS)

      setGamesWiiu(data.amiibo[590].gamesWiiU)

      setGamesSwitch(data.amiibo[590].gamesSwitch)
    } else {  
      const res = await fetch(`https://www.amiiboapi.com/api/amiibo/?amiiboSeries=${series}&name=${name}&type=${type}&showgames&showusage`)
      const data = await res.json()
      
      console.log(data.amiibo[0])

      console.log({id: selectid, ...data.amiibo[0]})

      setSelected({id: selectid, ...data.amiibo[0]})

      setDate(data.amiibo[0].release.na)

      setGames3ds(data.amiibo[0].games3DS)

      setGamesWiiu(data.amiibo[0].gamesWiiU)

      setGamesSwitch(data.amiibo[0].gamesSwitch)

      console.log(selectid);
    }
  }

  function addFavorite(selectamiibo) {
    if (favorites.find(favoriteAmiibo => favoriteAmiibo.id === selectamiibo.id)){
      setFavorites(favorites.filter(favoriteAmiibo => favoriteAmiibo.id !== selectamiibo.id))
      console.log(`${selectamiibo.name} removed from favorites`)
    }else{
      setFavorites([...favorites, selectamiibo])
      console.log(`${selectamiibo.name} added to Favorites`)
    }
  }

  function addWanted(selectamiibo) {
    if (wanted.find(wantedAmiibo => wantedAmiibo.id === selectamiibo.id)){
      setWanted(wanted.filter(wantedAmiibo => wantedAmiibo.id !== selectamiibo.id))
      console.log(`${selectamiibo.name} removed from Wanted`)
    }else{
      setWanted([...wanted, selectamiibo])
      console.log(`${selectamiibo.name} added to Wanted`)
    }
  }

  function sort() {
    const amiiboWithIds = favorites.map((item, index) => {
      return {id: index, ...item}
    })

    setAmiibos(amiiboWithIds)

    console.log(amiiboWithIds)
  }

  function sortWanted() {
    const amiiboWithIds = wanted.map((item, index) => {
      return {id: index, ...item}
    })

    setAmiibos(amiiboWithIds)

    console.log(amiiboWithIds)
  }

  const ds = games3ds.map((game, index) => (
    <li key={index}>{game.gameName}<ul>{game.amiiboUsage.map((game, index) => (<li key={index}>{game.Usage}</li>))}</ul></li>
  ))

  const wiiu = gamesWiiu.map((game, index) => (
    <li key={index}>{game.gameName}<ul>{game.amiiboUsage.map((game, index) => (<li key={index}>{game.Usage}</li>))}</ul></li>
  ))
  
  const ns = gamesSwitch.map((game, index) => (
    <li key={index}>{game.gameName}<ul>{game.amiiboUsage.map((game, index) => (<li key={index}>{game.Usage}</li>))}</ul></li>
  ))

  const list = amiibos.map((figure, index) => (
    <li key={index} onClick={() => details(figure.name, figure.amiiboSeries, figure.type, figure.id)} ><img src={figure.image} className="icon" alt={figure.name}/>{figure.name}</li>
  ))

  return (
    <>
    <h1>Amiibo!</h1>
    <div className="info">
    <img src={selected.image} alt="selected amiibo" className="selectedImage"/>
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
    <div className="controls">
    <button onClick={() => addFavorite(selected)}>Toggle Favorite</button>
    <button onClick={() => sort()}>Sort Favorites</button>
    <button onClick={() => addWanted(selected)}>Toggle Wanted</button>
    <button onClick={() => sortWanted()}>Sort Wanted</button>
    </div>
    <div className="list">
    <ul>{list}</ul>
    </div>
    </>
  )
}

export default App;
