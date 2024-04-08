import { useEffect, useState } from 'react'
import Axios from 'axios'

const baseURL = 'http://localhost:5273/api/'

export default function Gif() {
  const [gif, setGif] = useState([])

  useEffect(() => {
    Axios.get(baseURL).then((response) => {
      setGif(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <div>
      <h1>Gif</h1>
      <div>
        {gif.map((gifUrl, index) => (
          <div key={index}>
            {/* <img src={gifUrl} alt={`Gif ${index}`} /> */}
            <a href={gifUrl}>{gifUrl}</a>
          </div>
        ))}
      </div>
    </div>
  )
}
