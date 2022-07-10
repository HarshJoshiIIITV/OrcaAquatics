import React  from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import footerImg from '../images/footer.jpg'

const useStyles = makeStyles((theme) => ({
    footer:{
        background: `linear-gradient( rgba(17,17,17,0.8), rgba(17,17,17,0.8) ), url(${footerImg})`,
        backgroundrPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',
        padding:'6rem 0rem',
        '& p':{
            fontFamily: 'Libre Baskerville',
            color:'#555555',
            color:'white',
            wordSpacing: '4px'
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
                            <TelegramIcon style={{ color: "#F47912",position:'relative',top:'5px',marginRight:'10px' }}/>
                        A-235, Kardhni Scheme, Govindpura, Jaipur, Rajasthan, 302012
                         </Typography>
                         <Typography variant='body2'>
                            <PhoneIcon style={{ color: "#F47912",position:'relative',top:'5px',marginRight:'10px' }}/>
                            Office:  (+91) 9560956633
                         </Typography>
                         <Typography variant='body2'>
                            <MailOutlineIcon style={{ color: "#F47912",position:'relative',top:'5px',marginRight:'10px' }}/>
                            enquiry@orcaaquatics.in
                         </Typography>
                         <br/>
                         <div style={{display:'flex',justifyContent:'left'}}>
                            <InstagramIcon style={{color: "#F47912"}} />
                            <FacebookIcon style={{color: "#F47912",marginRight:'15px',marginLeft:'15px'}}/>
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
