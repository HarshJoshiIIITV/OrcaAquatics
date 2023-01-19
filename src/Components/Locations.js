import React, {useState,useEffect}  from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import blog from '../images/locations.jpg'
import Header from './Header';
import location1 from '../images/location1.png'
import LocationOnIcon from '@material-ui/icons/LocationOn';


const useStyles = makeStyles((theme) => ({
    locations:{
        backgroundrPosition: 'center center',
        background: `linear-gradient( rgba(240, 240, 240, 0.6), rgba(240, 240, 240, 0.6) ), url(${blog})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',
        padding:'6rem 0rem',
    },
    parentlocations:{
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
    rightGrayBox:{
      padding:'0px 16px 0px 0px',
      background: '#F9FAFB',
      marginTop:'26px',
      border:'1px solid #fafafa',
      '& a':{
        
        color:'#646464',
      },
      '& .MuiTypography-body2':{
        fontSize:'16px',
        textTransform:'uppercase',
        marginTop:'16px'
    },
    '& span':{
      fontSize:'14px',
      textTransform:'uppercase',
      color:'#374D9A',
      marginLeft:'6px'
  }
    }
    
    
    
}));


export const Locations= (props) => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    const classes = useStyles();
   
    const scrollToAccord=(accNo)=>{
      const yOffset = -122; 
      const ycor = document.getElementById(accNo);
      const y = ycor.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' })
    }

    return(
        <><Header  history={props.history} />
    <div className={classes.parentlocations}>
            <div className={classes.locations}>
            
                <Container>
                    <Grid container>
                        <Grid item md={3} style={{padding:'14px'}}>
                            <Typography variant='h4' style={{color: '#374D9A'}}>LOCATIONS</Typography>
                            <Link to='/'>HOME</Link> / <Link to='/locations'>LOCATIONS</Link>
                        </Grid>
                    </Grid>

                </Container>
                
            </div>
            <br/>
            <br/>
            
            <Container container>
              <Grid container>
            
              <Grid item md={12} className={classes.rightGrayBox} >
                <Grid container >
                    <Grid item md={6}>
                        <img src={location1} width={'500px'} height={'260px'} />
                    </Grid>
                    <Grid item md={6}>
                        <Typography style={{paddingTop:'32px'}} variant='h6'>SMS MEDICAL COLLEGE SWIMMING POOL, JAIPUR</Typography>
                        <Typography variant='body2' style={{marginTop:'12px'}}>WR5C+43G, Bardia Colony, Adarsh Nagar, Jaipur, Rajasthan 302004</Typography>
                        <div style={{display:'flex',justifyContent:'left',marginTop:'12px'}}>
                            <LocationOnIcon style={{fontSize:'36px'}}/>
                            <p style={{marginTop:'8px',color:'black'}}><a target="_blank" href='http://maps.google.com/?q=Swimming Pool, SMS Medical College'>CLICK TO VIEW LOCATION</a></p>
                        </div>
                    </Grid>
                </Grid>
        <br/>
                <Grid container >
                    <Grid item md={6}>
                        <img src={location1} width={'500px'} height={'260px'} />
                    </Grid>
                    <Grid item md={6}>
                        <Typography style={{paddingTop:'32px'}} variant='h6'>RYAN INTERNATIONAL SCHOOL, MANSAROVER, JAIPUR</Typography>
                        <Typography variant='body2' style={{marginTop:'12px'}}>Ryan International School, Padmani, Ward 27, Mansarovar Sector 5, Mansarovar, Jaipur, Rajasthan 302018</Typography>
                        <div style={{display:'flex',justifyContent:'left',marginTop:'12px'}}>
                            <LocationOnIcon style={{fontSize:'36px'}}/>
                            <p style={{marginTop:'8px',color:'black'}}><a target="_blank" href='http://maps.google.com/?q=Ryan International School, Padmani, Ward 27, Mansarovar Sector 5, Mansarovar, Jaipur, Rajasthan 302018'>CLICK TO VIEW LOCATION</a></p>
                        </div>
                    </Grid>
                </Grid>
<br/>

                <Grid container >
                    <Grid item md={6}>
                        <img src={location1} width={'500px'} height={'260px'} />
                    </Grid>
                    <Grid item md={6}>
                        <Typography style={{paddingTop:'32px'}} variant='h6'>UNIQUE SANGHI APARTMENTS, DURGAPURA, JAIPUR</Typography>
                        <Typography variant='body2' style={{marginTop:'12px'}}>Unique Sanqhi Apparent, VQ4Q+R9G, UNIQUE SANGHI APARTMENTS, Ekta Block, Mahaveer Nagar, Durgapura, Jaipur, Rajasthan 302018</Typography>
                        <div style={{display:'flex',justifyContent:'left',marginTop:'12px'}}>
                            <LocationOnIcon style={{fontSize:'36px'}}/>
                            <p style={{marginTop:'8px',color:'black'}}><a target="_blank" href='http://maps.google.com/?q=Unique Sanqhi Apparent, VQ4Q+R9G, UNIQUE SANGHI APARTMENTS, Ekta Block, Mahaveer Nagar, Durgapura, Jaipur, Rajasthan 302018'>CLICK TO VIEW LOCATION</a></p>
                        </div>
                    </Grid>
                </Grid>

            </Grid>

              </Grid>
        </Container>
        



            
    </div>
    </>
    )
}


export default Locations;
