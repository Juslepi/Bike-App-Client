import axios from "axios";
import { useEffect, useState } from "react";
import { Journey } from "../types/types";

const Journeys = () => {
  const [journeys, setJourneys] = useState<Journey[]>([]);

  useEffect(() => {
    const getJourneys = async () => {
      const res = await axios.get("http://localhost:3001/api/journeys");
      setJourneys(res.data);
      console.log(res.data);
    };
    getJourneys();
  }, []);

  return <div></div>;
};

export default Journeys;
