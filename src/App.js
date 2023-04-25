//First, we import the things that are needed for the app to run
import './App.css';
import { useEffect, useState } from 'react';

//Then we create the actual app
function App() {
  //This is what I nicknamed my "variable bank", it contains all the variables needed that function using useState
  const [amiibos, setAmiibos] = useState([])
  const [selected, setSelected] = useState([])
  const [games3ds, setGames3ds] = useState([])
  const [gamesWiiu, setGamesWiiu] = useState([])
  const [gamesSwitch, setGamesSwitch] = useState([])
  const [date, setDate] = useState("")
  const [favorites, setFavorites] = useState([])
  const [wanted, setWanted] = useState([])
  const [owned, setOwned] = useState([])
  const [message, setMessage] = useState("So Many Amiibos!")

  //useEffect is used here so that the function will be first ran on page load
  useEffect(() => {
  //The function get amiibos will get the entirety of the amiibos from the api and store them in the amiibos variable
    async function getAmiibos() {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/')
      const data = await res.json()

      //set id from the index and adding the wanted, owned, and favorite properties
      const amiiboWithIds = data.amiibo.map((item, index) => {
        return {id: index, owned: false, wanted: false, favorite: false, ...item}
      })

      setAmiibos(amiiboWithIds)

      console.log(amiiboWithIds)
    }
    getAmiibos()
  }, [])

  //Amiibo Details Retrieval
  async function details(name, series, type, selectid) {
    //This if statement is because 7 amiibos broke the process
    if (name === "Banjo & Kazooie") {
      //The amiibo is fetched from the api and the data is retrieved and stored in variables
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?character=Banjo&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[0])

      console.log({id: selectid, owned: false, wanted: false, favorite: false, ...data.amiibo[0]})

      setSelected({id: selectid, owned: false, wanted: false, favorite: false, ...data.amiibo[0]})

      setDate(data.amiibo[0].release.na)

      setGames3ds(data.amiibo[0].games3DS)

      setGamesWiiu(data.amiibo[0].gamesWiiU)

      setGamesSwitch(data.amiibo[0].gamesSwitch)
    } else if (name === "Midna & Wolf Link") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?character=Midna&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[0])

      console.log({id: selectid, owned: false, wanted: false, favorite: false, ...data.amiibo[0]})

      setSelected({id: selectid, owned: false, wanted: false, favorite: false, ...data.amiibo[0]})

      setDate(data.amiibo[0].release.na)

      setGames3ds(data.amiibo[0].games3DS)

      setGamesWiiu(data.amiibo[0].gamesWiiU)

      setGamesSwitch(data.amiibo[0].gamesSwitch)
    } else if(name==="Zelda & Loftwing") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?character=Zelda&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[4])

      console.log({id: selectid, owned: false, wanted: false, favorite: false, ...data.amiibo[4]})

      setSelected({id: selectid, owned: false, wanted: false, favorite: false, ...data.amiibo[4]})

      setDate(data.amiibo[4].release.na)

      setGames3ds(data.amiibo[4].games3DS)

      setGamesWiiu(data.amiibo[4].gamesWiiU)

      setGamesSwitch(data.amiibo[4].gamesSwitch)
    } else if(name==="Rosalina & Luma") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?character=Rosalina&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[1])

      console.log({id: selectid, owned: false, wanted: false, favorite: false, ...data.amiibo[1]})

      setSelected({id: selectid, owned: false, wanted: false, favorite: false, ...data.amiibo[1]})

      setDate(data.amiibo[1].release.na)

      setGames3ds(data.amiibo[1].games3DS)

      setGamesWiiu(data.amiibo[1].gamesWiiU)

      setGamesSwitch(data.amiibo[1].gamesSwitch)
    } else if(name==="Timmy & Tommy" && type==="Card") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?gameseries=Animal Crossing&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[22])

      console.log({id: selectid, owned: false, wanted: false, favorite: false, ...data.amiibo[22]})
      
      setSelected({id: selectid, owned: false, wanted: false, favorite: false, ...data.amiibo[22]})

      setDate(data.amiibo[21].release.na)

      setGames3ds(data.amiibo[21].games3DS)

      setGamesWiiu(data.amiibo[21].gamesWiiU)

      setGamesSwitch(data.amiibo[21].gamesSwitch)
    } else if(name==="Timmy & Tommy" && type==="Figure") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?gameseries=Animal Crossing&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[21])

      console.log({id: selectid, owned: false, wanted: false, favorite: false, ...data.amiibo[21]})
      
      setSelected({id: selectid, owned: false, wanted: false, favorite: false, ...data.amiibo[21]})

      setDate(data.amiibo[21].release.na)

      setGames3ds(data.amiibo[21].games3DS)

      setGamesWiiu(data.amiibo[21].gamesWiiU)

      setGamesSwitch(data.amiibo[21].gamesSwitch)
    } else if(name==="Mr. Game & Watch") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/?amiiboseries=Super Smash Bros.&showgames&showusage')
      const data = await res.json()

      console.log(data.amiibo[590])
      
      console.log({id: selectid, owned: false, wanted: false, favorite: false, ...data.amiibo[590]})

      setSelected({id: selectid, owned: false, wanted: false, favorite: false, ...data.amiibo[590]})

      setDate(data.amiibo[590].release.na)

      setGames3ds(data.amiibo[590].games3DS)

      setGamesWiiu(data.amiibo[590].gamesWiiU)

      setGamesSwitch(data.amiibo[590].gamesSwitch)
    } else {  
      const res = await fetch(`https://www.amiiboapi.com/api/amiibo/?amiiboSeries=${series}&name=${name}&type=${type}&showgames&showusage`)
      const data = await res.json()
      
      console.log(data.amiibo[0])

      console.log({id: selectid, owned: false, wanted: false, favorite: false, ...data.amiibo[0]})

      setSelected({id: selectid, owned: false, wanted: false, favorite: false, ...data.amiibo[0]})

      setDate(data.amiibo[0].release.na)

      setGames3ds(data.amiibo[0].games3DS)

      setGamesWiiu(data.amiibo[0].gamesWiiU)

      setGamesSwitch(data.amiibo[0].gamesSwitch)

      console.log(selectid);
    }
  }

  function addFavorite(selectamiibo) {
    // Function tests to see if the same id is in the Favorites list, if its not, it adds, if it is, it removes.
    if (favorites.find(favoriteAmiibo => favoriteAmiibo.id === selectamiibo.id)){
      setFavorites(favorites.filter(favoriteAmiibo => favoriteAmiibo.id !== selectamiibo.id))
      console.log(`${selectamiibo.name} removed from favorites`)
    }else{
      setFavorites([...favorites, selectamiibo])
      console.log(`${selectamiibo.name} added to Favorites`)
    }
  }

  function addWanted(selectamiibo) {
    // Function tests to see if the same id is in the Wanted list, if its not, it adds, if it is, it removes.
    if (wanted.find(wantedAmiibo => wantedAmiibo.id === selectamiibo.id)){
      setWanted(wanted.filter(wantedAmiibo => wantedAmiibo.id !== selectamiibo.id))
      console.log(`${selectamiibo.name} removed from Wanted`)
    }else{
      setWanted([...wanted, selectamiibo])
      console.log(`${selectamiibo.name} added to Wanted`)
    }
  }

  function addOwned(selectamiibo) {
    // Function tests to see if the same id is in the Owned list, if its not, it adds, if it is, it removes.
    if (owned.find(wantedAmiibo => wantedAmiibo.id === selectamiibo.id)){
      setOwned(owned.filter(wantedAmiibo => wantedAmiibo.id !== selectamiibo.id))
      console.log(`${selectamiibo.name} removed from Owned`)
    }else{
      setOwned([...owned, selectamiibo])
      console.log(`${selectamiibo.name} added to Owned`)
    }
  }

  async function gameSort(value) {
    //This function tests what view is selected by getting the value of the game dropdown and then redefines the list
    if (value==="all") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/')
      const data = await res.json()

      //set id
      const amiiboWithIds = data.amiibo.map((item, index) => {
        return {id: index, owned: false, wanted: false, favorite: false, ...item}
      })

      setAmiibos(amiiboWithIds)

      console.log(amiiboWithIds)
    }else {
    const res = await fetch(`https://www.amiiboapi.com/api/amiibo/?gameseries=${value}&showgames&showusage`)
      const data = await res.json()

      //set id
      const amiiboWithIds = data.amiibo.map((item, index) => {
        return {id: index, owned: false, wanted: false, favorite: false, ...item}
      })

      setAmiibos(amiiboWithIds)

      console.log(amiiboWithIds)

      setMessage(`The Amiibos from the ${value} game series`)
    }
  }

  async function seriesSort(value) {
    //This function tests what view is selected by getting the value of the series dropdown and then redefines the list
    if (value==="all") {
      const res = await fetch('https://www.amiiboapi.com/api/amiibo/')
      const data = await res.json()

      //set id
      const amiiboWithIds = data.amiibo.map((item, index) => {
        return {id: index, owned: false, wanted: false, favorite: false, ...item}
      })

      setAmiibos(amiiboWithIds)

      console.log(amiiboWithIds)

      setMessage("So Many Amiibos!")
    }else {
    const res = await fetch(`https://www.amiiboapi.com/api/amiibo/?amiiboSeries=${value}&showgames&showusage`)
      const data = await res.json()

      //set id
      const amiiboWithIds = data.amiibo.map((item, index) => {
        return {id: index, owned: false, wanted: false, favorite: false, ...item}
      })

      setAmiibos(amiiboWithIds)

      console.log(amiiboWithIds)

      setMessage(`The ${value} Amiibo series`)
    }
  }

  async function view(value) {
    //This function tests what view is selected by getting the value of the view dropdown and then redefines the list
    if(value==="favorites"){
    const amiiboWithIds = favorites.map((item, index) => {
      return {id: index, owned: false, wanted: false, favorite: false, ...item}
    })
    
    setAmiibos(amiiboWithIds)

    console.log(amiiboWithIds)

    setMessage("Because you can't pick just one!")
  } else if(value==="wanted"){
    const amiiboWithIds = wanted.map((item, index) => {
      return {id: index, owned: false, wanted: false, favorite: false, ...item}
    })

    setAmiibos(amiiboWithIds)

    console.log(amiiboWithIds)
    setMessage("Wishlist")
  } else if(value==="owned") {
    const amiiboWithIds = owned.map((item, index) => {
      return {id: index, owned: false, wanted: false, favorite: false, ...item}
    })

    setAmiibos(amiiboWithIds)
    
    //This calculates the completion percent based on the completed and wanted lists
    console.log(amiiboWithIds)
    if (wanted.length === 0) {
      setMessage("Your Collection is 100% Complete, congradulations!")
    } else {
      let completion = ((owned.length/(wanted.length+owned.length))*100)
      setMessage(`Your collection is ${completion}% complete`)
    }
  } else if(value==="normal") {
    const res = await fetch('https://www.amiiboapi.com/api/amiibo/')
      const data = await res.json()

      //set id
      const amiiboWithIds = data.amiibo.map((item, index) => {
        return {id: index, owned: false, wanted: false, favorite: false, ...item}
      })

      setAmiibos(amiiboWithIds)

      console.log(amiiboWithIds)
     setMessage("So Many Amiibos!")
  } else {
    console.log("Error!")
  }
  }

  //Renders the 3DS game list and functionality
  const ds = games3ds.map((game, index) => (
    <li key={index}>{game.gameName}<ul>{game.amiiboUsage.map((game, index) => (<li key={index}>{game.Usage}</li>))}</ul></li>
  ))

  //renders the wiiu game list and functionality
  const wiiu = gamesWiiu.map((game, index) => (
    <li key={index}>{game.gameName}<ul>{game.amiiboUsage.map((game, index) => (<li key={index}>{game.Usage}</li>))}</ul></li>
  ))
  
  //renders the switch game list and functionality
  const ns = gamesSwitch.map((game, index) => (
    <li key={index}>{game.gameName}<ul>{game.amiiboUsage.map((game, index) => (<li key={index}>{game.Usage}</li>))}</ul></li>
  ))

  //renders Amiibo list
  const list = amiibos.map((figure, index) => (
    <li key={index} onClick={() => details(figure.name, figure.amiiboSeries, figure.type, figure.id)} ><img src={figure.image} className="icon" alt={figure.name}/>{figure.name}</li>
  ))

  //DOM Rendering
  return (
    <>
    <h1>Amiibo!</h1>
    <div className="info">
    <img src={selected.image} alt="selected amiibo" className="selectedImage"/>
    <h2>{selected.name}</h2>
    <h3>Released in the US on {date} as part of the {selected.amiiboSeries} Amiibo Series</h3>
    <h3>This character is from {selected.gameSeries}</h3>
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
    <button onClick={() => addWanted(selected)}>Toggle Wanted</button>
    <button onClick={() => addOwned(selected)}>Toggle Owned</button>
    <label htmlFor="view">View: </label>
    <select name="view" id="view" onChange={e => view(e.target.value)}>
      <option value="normal">Normal</option>
      <option value="wanted">Wanted</option>
      <option value="favorites">Favorites</option>
      <option value="owned">Owned</option>
    </select>
    <label htmlFor="game" id="game">Game Series: </label>
    <select name="game" id="game" onChange={e => gameSort(e.target.value)}>
    <option value="all">All</option>
    <option value="Super Mario">Super Mario</option>
    <option value="Yoshi's Woolly World">Yoshi's Woolly World</option>
    <option value="Donkey Kong">Donkey Kong</option>
    <option value="The Legend of Zelda">The Legend of Zelda</option>
    <option value="Breath of the Wild">Breath of the Wild</option>
    <option value="Animal Crossing">Animal Crossing</option>
    <option value="Star Fox">Star Fox</option>
    <option value="Metroid">Metroid</option>
    <option value="F-Zero">F-Zero</option>
    <option value="Pikmin">Pikmin</option>
    <option value="Punch Out">Punch Out</option>
    <option value="Wii Fit">Wii Fit</option>
    <option value="Kid Icarus">Kid Icarus</option>
    <option value="Classic Nintendo">Classic Nintendo</option>
    <option value="Mii">Mii</option>
    <option value="Splatoon">Splatoon</option>
    <option value="Mario Sports Superstars">Mario Sports Superstars</option>
    <option value="ARMS">ARMS</option>
    <option value="Pokemon">Pokemon</option>
    <option value="Kirby">Kirby</option>
    <option value="BoxBoy!">BoxBoy!</option>
    <option value="Fire Emblem">Fire Emblem</option>
    <option value="Zenoblade">Zenoblade</option>
    <option value="Chibi Robo">Chibi Robo</option>
    <option value="Sonic">Sonic</option>
    <option value="Pac-man">Pac-man</option>
    <option value="Dark Souls">Dark Souls</option>
    <option value="Tekken">Tekken</option>
    <option value="Megaman">Megaman</option>
    <option value="Street Fighter">Street Fighter</option>
    <option value="Monster Hunter">Monster Hunter</option>
    <option value="Kellogs">Kellogs</option>
    <option value="Metal Gear Solid">Metal Gear Solid</option>
    <option value="Castlevania">Castlevania</option>
    <option value="Power Pros">Power Pros</option>
    <option value="Yu-Gi-Oh!">Yu-Gi-Oh!</option>
    <option value="Diablo">Diablo</option>
    <option value="Persona">Persona</option>
    <option value="Banjo Kazooie">Banjo Kazooie</option>
    <option value="Fatal Fury">Fatal Fury</option>
    <option value="Minecraft">Minecraft</option>
    </select>
    <label htmlFor="series" id="series">Amiibo Series: </label>
    <select name="series" id="series" onChange={e => seriesSort(e.target.value)}>
    <option value="all">All</option> 
    <option value="Super Smash Bros.">Super Smash Bros.</option>
    <option value="Super Mario Bros.">Super Mario Bros.</option>
    <option value="Chibi-Robo!">Chibi-Robo!</option>
    <option value="Yoshi's Woolly World">Yoshi's Woolly World</option>
    <option value="Splatoon">Splatoon</option>
    <option value="Animal Crossing">Animal Crossing</option>
    <option value="8-bit Mario">8-bit Mario</option>
    <option value="Skylanders">Skylanders</option>
    <option value="Legend of Zelda">Legend of Zelda</option>
    <option value="Shovel Knight">Shovel Knight</option>
    <option value="Kirby">Kirby</option>
    <option value="Pokemon">Pokemon</option>
    <option value="Mario Sports Superstars">Mario Sports Superstars</option>
    <option value="Monster Hunter">Monster Hunter</option>
    <option value="BoxBoy!">BoxBoy!</option>
    <option value="Pikmin">Pikmin</option>
    <option value="Fire Emblem">Fire Emblem</option>
    <option value="Metroid">Metroid</option>
    <option value="Mega Man">Mega Man</option>
    <option value="Diablo">Diablo</option>
    <option value="Power Pros">Power Pros</option>
    <option value="Monster Hunter Rise">Monster Hunter Rise</option>
    <option value="Yu-Gi-Oh!">Yu-Gi-Oh!</option>
    <option value="Super Nintendo World">Super Nintendo World</option>
    </select>
    </div>
    <div className="list">
    <h3>{message}</h3>
    <ul>{list}</ul>
    </div>
    </>
  )
}

export default App;
