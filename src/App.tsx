import * as React from 'react';
import { styled, alpha, makeStyles, createTheme } from '@mui/material/styles';
import { AppBar, Button, Box, Toolbar, Typography, InputBase, MenuItem, Menu, Tooltip, CardMedia, ThemeProvider, Paper } from '@mui/material';

const pages = ['Home', 'Pricing'];
const settings = ['sci-fi books', 'learning books', 'accessories'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const bartheme = createTheme({
  typography: {
    "fontFamily": `"Poppins", sans-serif`,
    fontSize: 18,
    button: {
      background: "#333",
      textTransform: "none"
    },
  },
  palette: {
    primary: {
      main: "#333"
    }
  }
});
const contenttheme = createTheme({
  typography: {
    "fontFamily": `"Poppins", sans-serif`,
    fontSize: 14,
    button: {
      background: "#06f",
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#333"
    },
    secondary: {
      main: "#fff"
    }
  }
});

const styles = {
  paperContainer: {
    backgroundImage: `url(https://pbs.twimg.com/media/E0jkwihUcAYW3I5.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover'
  }
};

export default function SearchAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Paper style={styles.paperContainer} sx={{ pb: 10 }}>
      <Box sx={{ flexGrow: 1 }} >
        <ThemeProvider theme={bartheme}>
          
          <AppBar position="static">
            <Toolbar>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                <Button color="inherit" sx={{ p: 0, mr: 4 }}>Programmer's life</Button>
                {pages.map((page) => (
                  <Button
                    key={page}
                    sx={{ my: 2, color: 'white', display: 'block', mr: 4 }}
                  >
                    {page}
                  </Button>
                ))}
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <Button color="inherit" onClick={handleOpenUserMenu} sx={{ p: 0 }}>About</Button>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Search>
                <StyledInputBase sx={{ bgcolor: "white", color: "gray", p: 0 }}
                  placeholder="Search"
                  inputProps={{ 'aria-label': 'search', color: "gray" }}
                />
              </Search>
              <Button sx={{ width: "200px", ml: "10px", border: "solid 1px green" }} color="inherit">Search</Button>
              <Button sx={{ ml: "10px", border: "solid 1px white" }} color="inherit">Log In</Button>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
        <ThemeProvider theme={contenttheme}>
          <Box sx={{ minWidth: 1000, mt: 10, ml: 5, mr: 5, pt: 5, pr: 6, pl: 6, pb: 5, bgcolor: "rgba(160, 160, 160, 0.7)", color: 'white' }}>
            <Typography variant="h3" component="div" gutterBottom>
              Welcome!
            </Typography>
            <Typography sx={{ fontSize: 20 }}>
              There are so many books and accessories out there for programmers and not enough time to read them all and get some new thing for comfortable development and work.What you’ll find below is my personal list of top books for programmers.
            </Typography>
            <Typography sx={{ fontSize: 20 }}>
              Wouldn’t it be nice if you had a curated list so you could make the most effective use your self-study time?
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', mt: 5, alignItems: 'center', justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                sx={{ width: 151, height: 151 }}
                image="https://us.123rf.com/450wm/finevector/finevector1505/finevector150500010/39592672-books-for-coding-and-programming-flat-icon-with-long-shadow-vector-illustration-.jpg?ver=6"
                alt="learn books"
              />
              <Box sx={{ ml: 3, mr: 3 }}>
                <Typography component="div" variant="h5">
                  Books for learning
                </Typography>
                <Typography sx={{ fontSize: 20, textAlign: "justify" }}>
                  Programming is the art of creating innovative solutions in the form of computer programs for solving problems that vary across a wide spectrum of fields, ranging from classic mathematical puzzles and everyday life issues to weather forecasting and seeking and understanding novel marvels across the cosmos.Although programming and coding are typically used interchangeably, programming is not just coding.Coding represents that part of programming, which involves writing computer code.
                </Typography>
              </Box>
              <Button sx={{ flexShrink: 0, fontSize: 20 }} color='secondary'>Learn more</Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', mt: 5, alignItems: 'center', justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                sx={{ width: 151, height: 151 }}
                image="https://avatars.mds.yandex.net/i?id=5e262b89269e4855f84807881a5b2e9f-5261734-images-thumbs&n=13"
                alt="sci-fi books"
              />
              <Box sx={{ ml: 3, mr: 3 }}>
                <Typography component="div" variant="h5">
                  Sci-fi Books
                </Typography>
                <Typography sx={{ fontSize: 20, textAlign: "justify" }}>
                  Science fiction is a genre of fiction dealing with imaginary but more or less plausible (or at least non-supernatural) content such as future settings, futuristic science and technology, space travel, aliens, and paranormal abilities.[...]It is similar to, but differs from fantasy in that, within the context of the story, its imaginary elements are largely possible within scientifically established or scientifically postulated laws of nature (though some elements in a story might still be pure imaginative speculation).</Typography>
              </Box>
              <Button sx={{ flexShrink: 0, fontSize: 20 }} color='secondary'>Learn more</Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', mt: 5, alignItems: 'center', justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                sx={{ width: 151, height: 151 }}
                image="https://telegra.ph/file/567f1911f26b00ac80f56.jpg"
                alt="sci-fi books"
              />
              <Box sx={{ ml: 3, mr: 3 }}>
                <Typography component="div" variant="h5">
                  Accessories
                </Typography>
                <Typography sx={{ fontSize: 20, textAlign: "justify" }}>
                  At BestProducts.com, our editors are basically on our laptops all day.Whether you use your laptop for work — like us — or for play, investing in laptop accessories will help you get the most out of your computer.We want to help you find all the best, most useful accessories out there — especially since Amazon is flooded with thousands of products that can oftentimes look the same.</Typography>
              </Box>
              <Button sx={{ flexShrink: 0, fontSize: 20 }} color="secondary" >Learn more</Button>
            </Box>
          </Box>
        </ThemeProvider>
      </Box>
    </Paper>
  );
}
