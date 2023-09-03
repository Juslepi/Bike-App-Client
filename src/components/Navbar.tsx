import { Outlet, Link as RouterLink } from "react-router-dom";
import { Button, Box, AppBar, Link, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Button>
            <Link component={RouterLink} to="/" variant="button" color="#fff">
              Journeys
            </Link>
          </Button>
          <Button>
            <Link
              component={RouterLink}
              to="/stations"
              variant="button"
              color="#fff"
            >
              Stations
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default Navbar;
