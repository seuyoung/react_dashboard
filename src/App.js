import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {CssBaseline,
        AppBar,
        Box,
        Toolbar,
        List,
        Divider,
        IconButton,
        Badge,
        Container,
        Grid,
        Drawer as MuiDrawer
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  AccountCircle,
} from '@mui/icons-material'
import {menuListItems} from './components/menulist';
import { ReactComponent as ElavonLogo } from './assets/Elavon primary logo RGB.svg'
import { ReactComponent as DevLogo } from './assets/For Developers.svg'
import SearchField from './components/SearchField';
import Table from './components/Table'
import Copyright from './components/Copyright';

const drawerWidth = 240;

const MuiAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({ 
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && { 
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }), //when drawer is open
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <MuiAppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
              justifyContent: "flex-end"
            }}      
          >

            <SearchField/>
            
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
              <AccountCircle />
            </IconButton>

          </Toolbar>

        </MuiAppBar>

        <Drawer variant="permanent" open={open} >

          <Grid container justifyContent="center" alignItems="flex-end">
            <Grid item >
              <ElavonLogo></ElavonLogo>
            </Grid>
            <Grid item sx={{ py:0.3}} >
              <DevLogo></DevLogo>
            </Grid> 
          </Grid>
          
          <Divider />

          <List>{menuListItems}</List>

          
        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Table/>
              </Grid>
            </Grid>

            <Copyright sx={{ pt: 4 }} />
          </Container>

        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}