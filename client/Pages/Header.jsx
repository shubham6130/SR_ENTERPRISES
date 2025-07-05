import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  styled
} from "@mui/material";

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  display: 'block',
  padding: theme.spacing(1, 2),
  textDecoration: 'none',
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.secondary.main,
  },
  '&.active': {
    color: theme.palette.primary.main,
    fontWeight: 'bold'
  }
}));

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <AppBar 
      position="sticky" 
      elevation={4}
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography 
            variant="h6" 
            component="div"
            sx={{ 
              fontWeight: 'bold',
              mr: 4
            }}
          >
            SR Enterprises
          </Typography>
          
          <List sx={{ display: 'flex', py: 0 }}>
            <ListItem sx={{ p: 0 }}>
              <StyledNavLink to="/Home">Home</StyledNavLink>
            </ListItem>
            <ListItem sx={{ p: 0, ml: 2 }}>
              <StyledNavLink to="/MyCart">My Cart</StyledNavLink>
            </ListItem>
            <ListItem sx={{ p: 0, ml: 2 }}>
              <StyledNavLink to="/MyOrders">My Orders</StyledNavLink>
            </ListItem>
            <ListItem sx={{ p: 0, ml: 2 }}>
              <StyledNavLink to="/MyProfile">My Profile</StyledNavLink>
            </ListItem>
          </List>
        </Box>
        
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}