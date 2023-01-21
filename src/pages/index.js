import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from 'src/styles/Home.module.css'
import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import _ from "lodash";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import BusinessIcon from "@material-ui/icons/Business";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import Tooltip from "@material-ui/core/Tooltip";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag, useDrop } from "react-dnd";
import organization from "./org.json";

import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AddToPhotosRoundedIcon from '@material-ui/icons/AddToPhotosRounded';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';

const inter = Inter({ subsets: ['latin'] })

import dynamic from 'next/dynamic'
import { Grid, TextField } from '@material-ui/core';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../pages/OrgChart.js'),
  { ssr: false }
)

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    background: "black",
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  toolClass: {
    background: "red"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    background: "#FFF",
    color: "black"
  },
  headerIcon: {
    marginLeft: "15px"
  },
  searchCont: {
    marginLeft: "64% !important"
  }
}));

const drawerWidth = 60;

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" noWrap>
            People
          </Typography>
          <span className={classes.headerIcon}>
            <AddToPhotosRoundedIcon />
          </span>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={styles.main}>
        <DynamicComponentWithNoSSR />
      </main>
    </>
  )
}
