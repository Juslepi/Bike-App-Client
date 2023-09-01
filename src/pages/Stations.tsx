import { useState, useEffect } from "react"
import { DataGrid } from '@mui/x-data-grid';
import { Station } from "../types/types"
import axios from "axios"

const cols = [
  { field: 'Name', headerName: 'Name', width: 150 },
  { field: 'Address', headerName: 'Address', width: 150 },
  { field: 'Capacity', headerName: 'Capacity', width: 100 },
]

const Stations = () => {
  const [stations, setStations] = useState<Station[]>([])

  useEffect(() => {
    const getStations = async () => {
      const res = await axios.get("http://localhost:3001/api/stations")
      setStations(res.data)
    }

    getStations()
  }, [])

  return (
    <div>
      <DataGrid getRowId={(row) => row._id} rows={stations} columns={cols} />
    </div>
  )
}

export default Stations