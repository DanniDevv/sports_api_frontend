import Axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '@/components/Card'

// const baseURL = 'https://sports-api-backend-yci2.onrender.com/api/sports'
const baseURL = 'http://localhost:3000/api/sports'
export default function Home() {
  const [sports, setSports] = useState([])

  useEffect(() => {
    Axios.get(baseURL).then((response) => {
      setSports(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <div className='mt-8'>
      <h1 className='text-center text-4xl font-bold'>SPORTS</h1>
      <div className='px-24 py-20 flex flex-wrap'>
        {sports.map((sports, index) => {
          return (
            <div key={index} className='w-1/3 md:w-1/4 lg:w-1/6 p-2'>
              <Card name={sports.name} imgurl={sports.imgurl} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
