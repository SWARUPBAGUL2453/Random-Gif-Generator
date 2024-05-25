import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const Random = () => {

  const [gif, setGif] = useState("")
  const [loading, setLoading] = useState(false)

  async function fetchData() {
    setLoading(true)
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    const output = await axios.get(url)
    // console.log(output)
    const imageSource = output.data.data.images.downsized_large.url
    // console.log(imageSource)
    setGif(imageSource)
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])


  function clickHandler() {
    fetchData()
  }

  return (
    <div className='w-1/2 bg-green-500  flex flex-col items-center border border-black rounded-md gap-y-4'>
      <h1 className='uppercase text-xl font-bold mt-4'>a random gif</h1>

      
      {
        loading ? (<Spinner></Spinner>) : (<img src={gif} width="450" className='mt-5 mb-5'></img>)
      }

      <button
        onClick={clickHandler}
        className='uppercase font-bold w-3/4 bg-green-200 rounded-md py-2 mb-5'>
        generate
      </button>
    </div>
  )
}

export default Random