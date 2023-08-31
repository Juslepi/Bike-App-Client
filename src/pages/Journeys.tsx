import axios from "axios"
import { useEffect, useState } from "react"

const Journeys = () => {
  const [journeys, setJourneys] = useState<any>([])

  useEffect(() => {
    const getJourneys = async () => {
      const res = await axios.get("http://localhost:3001/api/journeys")
      setJourneys(res.data)
    }
    getJourneys()
  }, [])

  return (
    <div>

    </div>
  )
}

export default Journeys