import { Link, Outlet } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>Journeys</Link>
      <Link to={"stations"}>Stations</Link>
      <Outlet />
    </div>
  )
}

export default Navbar