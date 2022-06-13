import React, { useState, useEffect } from 'react';
import { Paper, List, ListItem, ListItemText, Chip, Card, CardContent, Typography } from '@material-ui/core';
import { Title, useDataProvider, Loading } from 'react-admin';
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
    loadSize: {
        maxHeight: "12rem",
        marginTop: ".5rem",
    }
}));

function Home() {
    return(
        <Card>
            <Title title="Georgslauf" />
            <CardContent>
                <Typography variant="h3">GEORGSLAUF 2022 Pfadis rennt mal</Typography>
                <Typography variant="h5">Organisiert von PRM im schönen München am 16. Juli 2022</Typography>
                <br/>
                <Paper elevation={2}>
                    <News/>
                </Paper>
                <br/>
                <Typography paragraph>Hallo und herzlich Willkommen, München-Isar!</Typography>
                <Typography paragraph>Wir freuen uns mit Euch auf den 42. Georgslauf 2022!</Typography>
                <Typography paragraph>Am <strong>Sonntag, 16.07.2022</strong> begrüßt Euch PRM im schönen Schwabing.</Typography>
                <Typography paragraph>Los geht es <strong>pünktlich um 07 Uhr</strong> bei uns vor der Ursl.</Typography>
                <Typography paragraph>Unser Zeitplan für den 16.07.2022 sieht dann folgendermaßen aus:</Typography>
                <Paper elevation={2}>
                    <Timetable/>
                </Paper>
                <br/>
                <Typography paragraph>Wir freuen uns auf einen tollen Tag und hoffen auf gutes Wetter! </Typography>
                <Typography paragraph>Euer Stamm PRM</Typography>
                <img alt="Georgslauf Logo" text-align="center" src="http://localhost:8080/public/media/home.png"/>
            </CardContent>
        </Card>
    );
}

const News = () => {
    const classes = useStyles();
    const dataProvider = useDataProvider();
    const [news, setNews] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dataProvider.getList('public/content/news', {
            pagination: { page: 1, perPage: 10 },
            sort: { field: 'id', order: 'DESC' },
        })
        .then(({data}) => {
            setNews(data);
            setLoading(false);
        })
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (loading) return <Loading/>;
    if (!news) return null;

    return (
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

const Timetable = () => {
    const classes = useStyles();
    const dataProvider = useDataProvider();
    const [timetable, setTimetable] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dataProvider.getList('public/content/timetable', {
            pagination: { page: 1, perPage: 10 },
            sort: { field: 'id', order: 'DESC' },
        })
        .then(({data}) => {
            setTimetable(data);
            setLoading(false);
        })
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (loading) return <Loading/>;
    if (!timetable) return null;

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
