import React, { useState, useEffect } from 'react';
import { Paper, List, ListItem, ListItemText, Chip, Card, CardContent, Typography } from '@material-ui/core';
import { Title, useDataProvider } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    tt: {
        backgroundColor: theme.palette.background.paper,
      },
    chip: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
          margin: theme.spacing(0.5),
      },
    },
}));

function Home() {
    return(
        <Card>
            <Title title="Georgslauf" />
            <CardContent>
                <Typography variant="h3">GEORGSLAUF 2020+1 Isar Kunterbunt</Typography>
                <Typography variant="h5">Organisiert von PRM im schönen München am 11. Juli 2021</Typography>
                <br/>
                <Paper elevation={2}>
                    <News/>
                </Paper>
                <br/>
                <Typography paragraph>Hallo und herzlich Willkommen, München-Isar!</Typography>
                <Typography paragraph>Wir freuen uns mit Euch auf den 41. Georgslauf 2020+1!</Typography>
                <Typography paragraph>Am <strong>Sonntag, 11.07.2021</strong> begrüßt Euch PRM bei euch zuhause!</Typography>
                <Typography paragraph>Los geht es <strong>pünktlich um 09 Uhr</strong> bei guter Inzidenz bei euch im Pfaarsaal.</Typography>
                <Typography paragraph>Unser Zeitplan für den 11.07.2021 sieht dann folgendermaßen aus:</Typography>
                <Paper elevation={2}>
                    <Timetable/>
                </Paper>
                <br/>
                <Typography paragraph>Wir freuen uns auf einen tollen Tag und hoffen auf gutes Wetter und gutes Infektionsgeschehen! </Typography>
                <Typography paragraph>Euer Stamm PRM</Typography>
                <img alt="Georgslauf Logo" text-align="center" src="http://localhost:8080/public/media/home.png"/>
            </CardContent>
        </Card>
    );
}

function News() {
    const classes = useStyles();
    const [news, setNews] = useState([]);
    const dataProvider = useDataProvider();
    useEffect(() => {
        dataProvider.getList('public/content/news', {
            pagination: {},
            sort: {},
        }).then(n => setNews(n.data));
    }, []);
    return(
        <React.Fragment>
            <br/>
            <div className={classes.chip}>
                {news.map( ( {value} ) => {
                    return <Chip color="primary" label={value}/>
                })}
            </div>
            <br/>
        </React.Fragment>
    );
}

function Timetable() {
    const classes = useStyles();
    const [timetable, setTimetable] = useState([]);
    const dataProvider = useDataProvider();
    useEffect(() => {
        dataProvider.getList('public/content/timetable', {
            pagination: {},
            sort: {},
        }).then(t => setTimetable(t.data));
    }, []);
    return(
        <div className={classes.tt}>
        <List dense="True">
            {timetable.map( ( {value, id} ) => {
                return <ListItem key={id}><ListItemText key={id}>{value}</ListItemText></ListItem>
            })}
        </List>
    </div>
    );
}

export default Home;
