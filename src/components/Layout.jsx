import { makeStyles } from '@mui/styles'
import React from 'react'
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { format } from 'date-fns';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {

        page:{
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3),
        },
        drawer:{
            width: drawerWidth,
        },
        drawerPaper:{
            width: drawerWidth,
        },
        root:{
            display:'flex',
        },
        active:{
            backgroundColor:'#f18585',
        },
        title:{
            padding: theme.spacing(2),
        },
        appBar:{
            width: `calc(100% - ${drawerWidth}px)`,
        },
        date: {
            flexGrow: 1
        },
        toolbar: theme.mixins.toolbar,
        avatar: {
            marginLeft: theme.spacing(2),
        }

    }
   
})

const Layout = ({children}) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='secondary'/>,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlined color='secondary'/>,
            path: '/create'
        },

    ]


    return (

        <div className={classes.root}>
            {/* App bar */}
            <AppBar 
                className={classes.appBar}
                elevation={0}

            >
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is the { format(new Date(), 'do MMMM Y') }
                    </Typography>
                    <Typography>Mario</Typography>
                    <Avatar src='/mario-av.png' className={classes.avatar}/>
                </Toolbar>
            </AppBar>

            {/* side drawer */}
            <Drawer 
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant='h5' className={classes.title}>
                        Ninja Notes
                    </Typography>
                </div>

            {/* list / links */}
            <List>
                {menuItems.map(menuItem => (
                    <ListItem 
                        key={menuItem.text}
                        button
                        onClick={() => navigate(menuItem.path)}
                        className={location.pathname === menuItem.path ? classes.active : null}
                    >
                        <ListItemIcon>{menuItem.icon}</ListItemIcon>
                        <ListItemText primary={menuItem.text} />
                    </ListItem>
                ))}
            </List>

            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}

export default Layout
