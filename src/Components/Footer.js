import React  from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography, Button} from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import footerImg from '../images/footer.jpg'
import partner from '../images/partner.png'
import partner1 from '../images/partner1.png'
import partner2 from '../images/partner2.png'
import partner3 from '../images/partner3.jpg'
import partner4 from '../images/partner4.png'
import partner5 from '../images/partner5.jpg'
import partner6 from '../images/partner6.png'
import Carousel from 'react-material-ui-carousel'
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    footer:{
        background: `linear-gradient( rgba(17,17,17,0.8), rgba(17,17,17,0.8) ), url(${footerImg})`,
        backgroundrPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',
        marginTop:'2rem',
        padding:'3rem 0rem',
        '& p':{
            fontFamily: 'Lato, sans-serif ',
            color:'#555555',
            color:'white',
            wordSpacing: '4.5px'
        },
        '& .MuiTypography-h4':{
            fontWeight:600,
            fontFamily: 'Lato, sans-serif ',
            color:'white'
        },
        '& .MuiTypography-h6':{
            fontWeight:600,
            fontFamily: 'Lato, sans-serif ',
            color:'white'
        },
        '& .MuiTypography-body2':{
            color:'white',
            fontSize:'16px'
        }
    },
    op:{
        padding:'5rem 0rem 3rem 0rem',
        '& .MuiTypography-h4':{
            fontWeight:600,
            fontFamily: 'Lato, sans-serif ',
            
        },
    },
    sfa:{
        marginTop:'2rem',
        '& .MuiTypography-h4':{
            fontWeight:600,
            fontFamily: 'Lato, sans-serif ',
            color:'white'
        },
        '& .MuiTypography-h6':{
            fontWeight:600,
            fontFamily: 'Lato, sans-serif ',
            color:'white'
        },
        '& .MuiTypography-body2':{
            color:'white',
            fontSize:'16px'
        }
    }
    
    
    
}));


export const Footer= (props) => {
    const classes = useStyles();
    return(
        <div className='footer_app'>
         <div className={classes.sfa} style={{backgroundColor:'#374D9A',padding:'50px 0px'}}>
                <Container className='sfa_home'>
                    <Grid container>
                        <Grid item md={9}>
                            <Typography variant='h4'>REGISTER NOW!</Typography>
                            <br/>
                            <Typography variant='h6'>Become water safe and kick start your journey with OrcaAquatics today!</Typography>
                        </Grid>
                        <Grid item md={3}>
                           <Link to="contact_us"> <Button  style={{backgroundColor:'black',color:'white', padding:'25px 10px',borderRadius:'10px'}} fullWidth>START FREE ASSESSMENT</Button></Link>
                        </Grid>
                    </Grid>
                </Container>
            </div>
          <div className={classes.op}>
            <Typography variant='h4' align="center" style={{color:'black',marginBottom:'2rem'}}> OUR PARTNERS</Typography>
    
            <Container>
                <Carousel>
                    <Grid container>
                        <Grid item md={3}>
                            <img src={partner} width='70%' height='80px'/>
                        </Grid>
                        <Grid item md={3}>
                        <img src={partner1} width='70%' height='80px'/>
                        </Grid>
                        <Grid item md={3}>
                        <img src={partner2} width='70%' height='80px'/>
                         </Grid>
                        <Grid item md={3}>
                        <img src={partner3} width='70%' height='80px'/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={3}>
                            <img src={partner4} width='70%' height='80px'/>
                        </Grid>
                        <Grid item md={3}>
                        <img src={partner5} width='70%' height='80px'/>
                        </Grid>
                        <Grid item md={3}>
                        <img src={partner6} width='70%' height='80px'/>
                        </Grid>
                        <Grid item md={3}>
                        <img src={partner3} width='70%' height='80px'/>
                        </Grid>
                    </Grid>
                </Carousel>
                
            </Container>
            </div>
        <div className={classes.footer}>
            <Container>
                <Grid container>
                    <Grid item md={3} style={{padding:'14px'}}>
                        <Typography variant='h6'>
                        ABOUT ORCA AQUATICS
                        </Typography>
                        <br/>
                        <Typography variant='body2'>
                        Orca Aquatics is home of a comprehensive aquatics programme in swimming, competitive swimming, learn to swim and water polo. With over 4+ locations in the Jaipur, and USA qualified teachers and coaches to choose from, access to quality aquatics provision has never been easier.
                        </Typography>
                    </Grid>
                    <Grid item md={3} style={{padding:'14px'}}>
                    <Typography variant='h6'>
                        CARRERS
                        </Typography>
                        <br/>
                        <Typography variant='body2'>
                        At Orca Aquatics, we recruit and retain a high performing and diverse workforce and foster a healthy, safe and productive work environment. The mission of the HR Department is to develop and sustain a dynamic work environment while providing support and growth opportunities.
Click Here to view opportunities at Orca Aquatics.
                         </Typography>
                    </Grid>
                    <Grid item md={3} style={{padding:'14px'}}>
                    <Typography variant='h6'>
                    OFFICE HOURS
                        </Typography>
                        <br/>
                        <Typography variant='body2'>
                        At Orca Aquatics, we recruit and retain a high performing and diverse workforce and foster a healthy, safe and productive work environment. The mission of the HR Department is to develop and sustain a dynamic work environment while providing support and growth opportunities.
Click Here to view opportunities at Orca Aquatics.
                         </Typography>
                        
                    </Grid>
                    <Grid item md={3} style={{padding:'14px'}}>
                    <Typography variant='h6'>
                    CONTACT US
                        </Typography>
                        <br/>
                        <Typography variant='body2'>
                            <TelegramIcon style={{ color: "white",position:'relative',top:'5px',marginRight:'10px' }}/>
                        A-235, Kardhni Scheme, Govindpura, Jaipur, Rajasthan, 302012
                         </Typography>
                         <Typography variant='body2'>
                            <a href='tel:+919560956633'>
                            <PhoneIcon style={{ color: "white",position:'relative',top:'5px',marginRight:'10px' }}/>
                            Office:  (+91) 9560956633
                            </a>
                         </Typography>
                         <Typography variant='body2'>
                            <a href="mailto:orcaswim22@gmail.com">
                            <MailOutlineIcon style={{ color: "white",position:'relative',top:'5px',marginRight:'10px' }}/>
                            enquiry@orcaaquatics.in
                            </a>
                         </Typography>
                         <br/>
                         <div style={{display:'flex',justifyContent:'left'}}>
                            <a href='https://www.instagram.com/orca__aquatics/' ><InstagramIcon style={{color: "white"}} /></a>
                            <FacebookIcon style={{color: "white",marginRight:'15px',marginLeft:'15px'}}/>
                            <YouTubeIcon style={{color: "white",marginRight:'15px'}}/>
                            <TwitterIcon style={{color: "white"}}/>
                         </div>
                        
                        
                    </Grid>
                </Grid>
            </Container>
            
            

    </div>
    <div style={{background:'black',padding:'2.5rem'}}>
    <Container  >
                <Typography align='center' style={{color:'white'}} variant="body2">Copyright © 2022. All Right Reserved - by Orca Aquatics | Privacy Policy</Typography>
                <Typography align='center' style={{marginTop:'10px',color:'white'}} variant="body2">Powered by HJ SOLUTIONS</Typography>
            </Container>
    </div>
    </div>
    
    )
}


export default Footer;
