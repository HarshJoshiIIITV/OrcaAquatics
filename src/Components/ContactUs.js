import React, {useState,useEffect,useRef}  from 'react'
import emailjs from '@emailjs/browser';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Typography, TextField} from '@material-ui/core'
import {Link} from 'react-router-dom'
import contact_us from '../images/gallerybg.jpg'
import Header from './Header';
import Swal from 'sweetalert2';



const useStyles = makeStyles((theme) => ({
    contact_us:{
        backgroundrPosition: 'center center',
        background: `linear-gradient( rgba(240, 240, 240, 0.6), rgba(240, 240, 240, 0.6) ), url(${contact_us})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',
        padding:'6rem 0rem',
    },
    parentContactUs:{
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
    formHome:{
        '& .MuiFilledInput-root':{
            marginBottom:'10px',
            marginTop:'10px'
        },
        '& .MuiFilledInput-input':{
            padding:'15px'
        },
        '& Button':{
            marginTop:'15px',
            backgroundColor:'#374D9A',
            padding:'20px 10px',
            fontWeight:600
        }
    },
    contactUsForm:{
        "@media (min-width: 100px)": {
            maxWidth: "80%"
          },
          "@media (min-width: 1300px)": {
            maxWidth: '60%'
        },
    }
 
    
    
    
}));


export const ContactUs= (props) => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    const classes = useStyles();
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_oouiqsp', 'template_g3f60yn', form.current, '19PTqwLHGd8I0BkY6')
      .then((result) => {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
      }, (error) => {
        Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          })
      });
      e.target.reset();
  };

    return(
        <><Header  history={props.history} />
    <div className={classes.parentContactUs}>
            <div className={classes.contact_us}>
            
                <Container>
                    <Grid container>
                        <Grid item md={3} style={{padding:'14px'}}>
                            <Typography variant='h4' style={{color: '#374D9A'}}>CONTACT US</Typography>
                            <Link to='/'>HOME</Link> / <Link to='/contact_us'>CONTACT US</Link>
                        </Grid>
                    </Grid>

                </Container>
                
            </div>
            <br/>
            <br/>
            
            <Container container className={classes.contactUsForm}>
            <div className={classes.formHome} style={{background: '#FFFFFF',padding: '30px 20px',border: '1px solid #f2f2f2',boxShadow: '0px 0px 25px 10px rgb(0 0 0 / 5%)'}}>
                            <Typography 
                            variant='h6' style={{fontWeight:600,textAlign:'center'}}>HAVE A QUESTION? <br/>REQUEST A CALLBACK FROM OUR SUPPORT STAFF</Typography>
                            <br/>
                            <form ref={form} onSubmit={sendEmail}>
                                <TextField 
                                fullWidth required type="text" id="user_name" name="user_name" label="Name" variant="outlined" style={{marginBottom:'16px'}}/>
                                
                                
                                <TextField required type='email'  fullWidth name="user_email" id="user_email" label="Email" variant="outlined" style={{marginBottom:'16px'}}/>
                                
                                <TextField required type="number"  fullWidth id="user_phone" name="user_phone" label="Phone" variant="outlined" style={{marginBottom:'16px'}}/>
                                
                                <TextField required type="text" fullWidth id="message" name="message" label="Message" variant="outlined" 
                                multiline
                                rows={3}
                                />
                                
                                <Button fullWidth type='submit' style={{color:'white'}}>SEND MESSAGE</Button>
                            </form>
                            </div>

        
        </Container>
        



            
    </div>
    </>
    )
}


export default ContactUs;
