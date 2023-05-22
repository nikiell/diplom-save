import React, { useState } from 'react';
import DogCalorieCalculator from './components/DogCalorieCalculator.jsx';
import Modal from './components/Modal';
import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  BottomNavigation,
  BottomNavigationAction,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions
} from '@mui/material';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from 'tss-react/mui';

import CalculateIcon from '@mui/icons-material/Calculate';

import MeatIngredientsTable from './components/MeatIngredientsTable.jsx';
import LayersIcon from '@mui/icons-material/Layers';
import CatCalorieCalculator from './components/CatCalorieCalculator.jsx';
import BARFSystem from './components/BARFSystem.jsx'
import VegetableNutritionTable from "./components/VegetableNutritionTable.jsx"
import BarfInformation from './components/BarfInformation'

const useStyles = makeStyles()((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 0,
    paddingTop: 0
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  Modal:{
    marginTop: theme.spacing(16),
  },
  title: {
    flexGrow: 1
  },
  mainFeaturePost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${require('./11.jpg')})`
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  mainFeaturePostContent: {
    position: 'relative',
    padding: theme.spacing(14),
    marginTop: theme.spacing(6),
  },
  CardMedia: {
    paddingTop: "56.25%",
    
  },
  CardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4),
  },
  stretchedGrid: {
    flexGrow: 1,
  },
  stretchedGridItem: {
    display: 'flex',
    alignItems: 'center',
  },
  stretchedTypography: {
    flexGrow: 1,
  }
}));

const cards = [
  {
    id: 1,
    title: "Таблиця м'ясних інгрідіентів",
    content: "Допомагає самостійно враховувати харчову цінність інгредієнтів при розрахунку раціону.",
    modalContent: <MeatIngredientsTable />,
    imageUrl : require("./meat.jpg")
  },
  {
    id: 2,
    title: "Таблиця харчової цінності овочів",
    content: "Клнтент картки надає інформацію про харчові показники різних овочів для допомоги у складанні раціону",
    modalContent: <VegetableNutritionTable/>,
    imageUrl:require ('./vegetable.jpg')
    
  },
  {
    id: 3,
    title: "BARF стосовно молочних продктів ",
    content: "BARF пов'язана стосовно молочних продуктів: чи доречні вони в цій системі для котів та собак? ",
    modalContent: <BarfInformation/>,
    imageUrl : require ("./milk.png")
  },
];

const App = () => {
  const [modalActive, setModalActive] = useState({});
  const { classes } = useStyles();
  const [value, setValue] = useState("recents");

  const [modal1Active, setModal1Active] = useState(false);
  const [modal2Active, setModal2Active] = useState(false);
  const [modal3Active, setModal3Active] = useState(false);

  const handleModal1Open = () => {
    setModal1Active(true);
  };

  const handleModal2Open = () => {
    setModal2Active(true);
  };

  const handleModal3Open = () => {
    setModal3Active(true);
  };

  const handleModalClose = () => {
    setModal1Active(false);
    setModal2Active(false);
    setModal3Active(false);
  };

  const handlChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ModalCard = ({ card }) => {
    const [modalActive, setModalActive] = useState(false);

    const handleCardClick = () => {
      setModalActive(true);
    };

    const closeModal = () => {
      setModalActive(false);
    };

    return (
      <Grid item key={card.id} xs={12} sm={6} md={4}>
        <Card className={classes.card} onClick={handleCardClick}>
          <CardMedia className={classes.CardMedia} title="Image title" image={card.imageUrl} />
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {card.title}
            </Typography>
            <Typography>{card.content}</Typography>
          </CardContent>
        </Card>
        <Modal active={modalActive} setActive={closeModal}>
          <h1>{card.modalContent}</h1>
        </Modal>
      </Grid>
    );
  };

  const handleCardClick = (id, isOpen) => {
    setModalActive((prevState) => ({
      ...prevState,
      [id]: isOpen,
    }));
  };

  const closeModal = (id) => {
    setModalActive((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Меню
            </Typography>
            <Box>
              <Button variant="outline" onClick={handleClickOpen} color="inherit">Увійти</Button>
              <Dialog open={open} onClose={handleClose} aria-label="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in to remember</DialogContentText>
                  <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth />
                  <TextField autoFocus margin="dense" id="pass" label="Password" type="password" fullWidth />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">Закрити</Button>
                  <Button onClick={handleClose} color="primary">Увійти</Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Toolbar>
        </AppBar>
        <main>
          <Paper position="fixed" className={classes.mainFeaturePost}>
            <Container fixed width="100%" right="0">
              <div className={classes.overlay} />
              <Grid container className={classes.stretchedGrid}>
                <Grid item md={6} className={classes.stretchedGridItem}>
                  <div className={classes.mainFeaturePostContent}>
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                      BARF
                    </Typography>
                    <Typography color="inherit" paragraph className={classes.stretchedTypography}>
                      (Biologically Appropriate Raw Food) - система годування сирою їжею, яка наближена до природного харчування домашніх тварин.
                    </Typography>
                    <Button variant="contained" color="secondary" onClick={handleModal3Open}>
                      Дізнатись більше
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Paper>
          <Box className={classes.mainContent}>
            <Container maxWidth="md">
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                Калькулятор 
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Обидва калькулятори допомагають власникам собак та котів розрахувати оптимальну кількість калорій та склад раціону для їх домашніх улюбленців з урахуванням основних факторів, таких як вага, вік, рівень активності та стать тварини. Це є корисним при плануванні їжі для собак і котів, які харчуються за принципами BARF.
              </Typography>
              <div className={classes.mainButtons}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<CalculateIcon />}
                      onClick={handleModal1Open}
                    >
                      Калькулятор для песиків
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<CalculateIcon />}
                      onClick={handleModal2Open}
                    >
                      Калькулятор для котів
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Box>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <ModalCard key={card.id} card={card} />
              ))}
            </Grid>
          </Container>
        </main>
           <footer style={{ marginTop: 'auto'  }} >
          <Typography variant="h6" align="center" gutterBottom>
            Дякую за довіру!
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">
            
          </Typography>
        </footer>
        <Modal active={modal1Active} setActive={handleModalClose}>
          <DogCalorieCalculator />
        </Modal>
        <Modal active={modal2Active} setActive={handleModalClose}>
          <CatCalorieCalculator />
        </Modal>
        <Modal active={modal3Active} setActive={handleModalClose}>
        <BARFSystem/>
        </Modal>
      </div>
    </>
  );
};

export default App;
