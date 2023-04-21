import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Navbar = () => {
    const navItems = ['Inicio', 'Cuidados', 'Comida', 'General'];

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{borderRadius: "20px 20px 0px 0px", width: "375px", height: "60px", position: "absolute", left: "0px", top: "752px", backgroundColor: "#5843BE" }}>
          <Box sx={{ display: "flex", justifyContent: "space-around", padding: "8px" }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff", fontWeight: "light" }}>
                {item}
              </Button>
            ))}
          </Box>
      </AppBar>
    </Box>
  )
}

export default Navbar