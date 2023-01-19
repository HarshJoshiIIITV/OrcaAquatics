import React, {useState,useEffect}  from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import live_results from '../images/gallerybg.jpg'
import Header from './Header';



const useStyles = makeStyles((theme) => ({
    live_results:{
        backgroundrPosition: 'center center',
        background: `linear-gradient( rgba(240, 240, 240, 0.6), rgba(240, 240, 240, 0.6) ), url(${live_results})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',
        padding:'6rem 0rem',
    },
    parentLiveResults:{
      '& a':{
        fontFamily: 'Lato, sans-serif ',
        color:'black',
        textDecoration:'none'
      },
    
        '& .MuiIconButton-root':{
            color:'white'
        },
        paddingBottom:'6rem',
        '& p':{
            fontFamily: 'Lato, sans-serif ',
            color:'#555555',
            color:'white',
            wordSpacing: '4.5px'
        },
        '& .MuiTypography-h4':{
            fontWeight:600,
            fontFamily: 'Lato, sans-serif ',
            color:'black'
        },

        '& .MuiTypography-h6':{
            fontWeight:600,
            fontFamily: 'Lato, sans-serif ',
            color:'black'
        },
        '& .MuiTypography-body2':{
            color:'black',
            fontSize:'16px'
        }
    },
 
    
    
    
}));


export const LiveResults= (props) => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    const classes = useStyles();
   

    return(
        <><Header  history={props.history} />
    <div className={classes.parentLiveResults}>
            <div className={classes.live_results}>
            
                <Container>
                    <Grid container>
                        <Grid item md={3} style={{padding:'14px'}}>
                            <Typography variant='h4' style={{color: '#374D9A'}}>LIVE RESULTS</Typography>
                            <Link to='/'>HOME</Link> / <Link to='/live_results'>LIVE RESULTS</Link>
                        </Grid>
                    </Grid>

                </Container>
                
            </div>
            <br/>
            <br/>
            
            <Container container>
        
        </Container>
        



            
    </div>
    </>
    )
}


export default LiveResults;
