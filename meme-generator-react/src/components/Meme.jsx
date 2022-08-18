import React from "react"
import "../styles/Meme.css"

export default function Meme() {
  const [meme, SetMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const [allMemes, setAllMemes] = React.useState({})

  /* function fetchMemes() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => )
  } */

  return(
    <main>
      <form>
        <button>Get a new image</button>
        <input
          type="text"
          placeholder="Top text"
          name="topText"
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
        />
      </form>
      <div className="meme__container">
        <img src={meme.randomImage} />
        <h2 className="meme__top-text">One does not simply</h2>
        <h2 className="meme__bottom-text">Walks into mordor</h2>
      </div>
    </main>
  )
}