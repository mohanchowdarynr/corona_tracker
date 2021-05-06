import React from 'react'
import { Card, Typography, Grid, CardContent} from "@material-ui/core";
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data : { confirmed,deaths,recovered,lastUpdate} }) => {
     if(!confirmed ){
         return "Loading";
     }
    return (
        <div className={styles.container}>
            <Grid container justify="center" spacing={3} >
              <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
               <CardContent>
                   <Typography gutterBottom>confirmed</Typography>
                   <Typography variant="h5" color="textSecondary"><CountUp
                                             start={0}
                                             end={confirmed.value}
                                             duration={1}
                                             separator=",">
                                             </CountUp>
                   </Typography>
                   <Typography>{new Date(lastUpdate).toLocaleTimeString()}</Typography>
               </CardContent>
              </Grid>
              <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
               <CardContent>
                   <Typography gutterBottom>Deaths</Typography>
                   <Typography variant="h5" color="textSecondary">{deaths.value}</Typography>
                   <Typography>{new Date(lastUpdate).toLocaleTimeString()}</Typography>
               </CardContent>
              </Grid>
              <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
               <CardContent>
                   <Typography gutterBottom>Recovered</Typography>
                   <Typography variant="h5" color="textSecondary">{recovered.value}</Typography>
                   <Typography >{ new Date(lastUpdate).toLocaleTimeString()}</Typography>
               </CardContent>
              </Grid>
            </Grid>
        </div>
    )
}

export default Cards
