import { useState, useEffect } from "react";
import axios from "axios";
import { Station } from "../types/types";
import { useParams, Link } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";

const StationView = () => {
  const [station, setStation] = useState<Station>();

  const { id } = useParams();
  useEffect(() => {
    const getStation = async () => {
      const res = await axios.get(`http://localhost:3001/api/stations/${id}`);
      console.log(res.data);

      setStation(res.data);
    };
    getStation();
  }, []);

  // TODO - Show error page
  if (!station) return null;

  return (
    <Container sx={{ display: "flex", justifyContent: "center", margin: 6 }}>
      <Box>
        <Typography variant="h4">{station.Name}</Typography>
        <Typography fontWeight="bold">{station.Address}</Typography>
        <Typography>Departures: {station.Departures}</Typography>
        <Typography>
          Average departuring journey length:{" "}
          {station["Average departure length"].toFixed(0)}m
        </Typography>
        <Typography>Returns: {station?.Returns}</Typography>
        <Typography>
          Average returning journey length:{" "}
          {station["Average return length"].toFixed(0)}m
        </Typography>
        <Link to={"/stations"}>Back</Link>
      </Box>
    </Container>
  );
};

export default StationView;
