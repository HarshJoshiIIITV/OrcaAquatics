import React, { useState } from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import {Grid, Typography } from '@material-ui/core'
import logo from '../images/logo.png'
import home1 from '../images/home1.jpg'
import home2 from '../images/home2.jpg'
import home3 from '../images/home3.jpg'
import home4 from '../images/home4.jpg'
import Carousel from 'react-material-ui-carousel'
import { Paper} from '@mui/material'
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import coropic from '../images/coropic.jpg'
import testimonials from '../images/testimonials.jpg';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import partner1 from '../images/partner1.png'
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


const useStyles = makeStyles((theme) => ({
    footer:{
        background: 'linear-gradient( rgba(17,17,17,0.8), rgba(17,17,17,0.8) ), url(https://www.hamiltonaquatics.ae/assets/images/footer.jpg)',
        backgroundrPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',
        padding:'6rem 0rem',
        '& p':{
            fontFamily: 'Libre Baskerville',
            color:'#555555',
            color:'white'
        },
        '& .MuiTypography-h4':{
            fontWeight:600,
            fontFamily: 'Libre Baskerville',
            color:'white'
        },
        '& .MuiTypography-h6':{
            fontWeight:400,
            fontFamily: 'Libre Baskerville',
            color:'white'
        },
        '& .MuiTypography-body2':{
            color:'white'
        }
    },
    
    
    
}));


export const Footer= (props) => {
    const classes = useStyles();
    return(
        <>
        <div className={classes.footer}>
            <Container>
                <Grid container>
                    <Grid item md={3} style={{padding:'14px'}}>
                        <Typography variant='h6'>
                        ABOUT ORCA AQUATICS
                        </Typography>
                        <br/>
                        <Typography variant='body2'>
                        Hamilton Aquatics is home of a comprehensive aquatics programme in swimming, competitive swimming, artistic swimming and water polo. With over 30 locations in the UAE and Qatar, & UK qualified teachers and coaches to choose from, access to quality aquatics provision has never been easier.
                        </Typography>
                    </Grid>
                    <Grid item md={3} style={{padding:'14px'}}>
                    <Typography variant='h6'>
                        CARRERS
                        </Typography>
                        <br/>
                        <Typography variant='body2'>
                        At Hamilton Aquatics, we recruit and retain a high performing and diverse workforce and foster a healthy, safe and productive work environment. The mission of the HR Department is to develop and sustain a dynamic work environment while providing support and growth opportunities.
Click Here to view opportunities at Hamilton Aquatics.
                         </Typography>
                    </Grid>
                    <Grid item md={3} style={{padding:'14px'}}>
                    <Typography variant='h6'>
                    OFFICE HOURS
                        </Typography>
                        <br/>
                        <Typography variant='body2'>
                        At Hamilton Aquatics, we recruit and retain a high performing and diverse workforce and foster a healthy, safe and productive work environment. The mission of the HR Department is to develop and sustain a dynamic work environment while providing support and growth opportunities.
Click Here to view opportunities at Hamilton Aquatics.
                         </Typography>
                        
                    </Grid>
                    <Grid item md={3} style={{padding:'14px'}}>
                    <Typography variant='h6'>
                    CONTACT US
                        </Typography>
                        <br/>
                        <Typography variant='body2'>
                            <TelegramIcon style={{ color: "#F47912",position:'relative',top:'5px',marginRight:'10px' }}/>
                        Office 1012, 10th floor, Detroit House Building Motor City, Dubai, U.A.E.
                         </Typography>
                         <Typography variant='body2'>
                            <PhoneIcon style={{ color: "#F47912",position:'relative',top:'5px',marginRight:'10px' }}/>
                            Office:  (+971) 4 450 8832
                         </Typography>
                         <Typography variant='body2'>
                            <MailOutlineIcon style={{ color: "#F47912",position:'relative',top:'5px',marginRight:'10px' }}/>
                            enquiry@hamiltonaquatics.ae
                         </Typography>
                         <br/>
                         <div style={{display:'flex',justifyContent:'left'}}>
                            <InstagramIcon style={{color: "#F47912",marginRight:'15x'}} />
                            <FacebookIcon style={{color: "#F47912",marginRight:'15px'}}/>
                            <YouTubeIcon style={{color: "#F47912",marginRight:'15px'}}/>
                            <TwitterIcon style={{color: "#F47912"}}/>
                         </div>
                        
                        
                    </Grid>
                </Grid>
            </Container>
            
            

    </div>
    <div style={{background:'black',padding:'5rem'}}>
    <Container  >
                <Typography align='center' style={{color:'white'}} variant="body2">Copyright © 2022. All Right Reserved - by Orca Aquatics | Privacy Policy</Typography>
                <Typography align='center' style={{marginTop:'10px',color:'white'}} variant="body2">Powered by HJ SOLUTIONS</Typography>
            </Container>
    </div>
    </>
    
    )
}


export default Footer;
