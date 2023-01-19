import React, {useEffect, useState,useRef} from 'react'
import emailjs from '@emailjs/browser';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Grid, Typography,Paper } from '@material-ui/core'
import home1 from '../images/home1.jpg'
import home2 from '../images/home2.jpg'
import home3 from '../images/home3.jpg'
import home4 from '../images/home4.jpg'
import Carousel from 'react-material-ui-carousel'
import coropic from '../images/coropic.jpg'
import coropic1 from '../images/coropic1.png'
import coropic2 from '../images/coropic2.png'
import coropic3 from '../images/coropic3.png'
import coropic4 from '../images/coropic4.jpg'
import coropic5 from '../images/coropic5.png'
import coropic6 from '../images/coropic6.png'
import coropic7 from '../images/coropic7.png'
import coropic8 from '../images/coropic8.png'
import testimonials from '../images/testimonials.jpg';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import partner from '../images/partner.png'
import youtubebg from '../images/youtubebg.jpg'
import CountUp from 'react-countup';
import behindNumbers from '../images/behind_number.png';
import videoThumbnail from '../images/video-thumbnail.png'
import Header  from './Header';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    topheader:{
        background: '#FAFAFA',
        borderBottom: '1px solid #f2f2f2',
        color: '#111111',
        overflow: 'hidden',
    // background: '#5c5c5c',
    lineHeight: '48px',
    // color: '#FFFFFF',
    fontSize: '16px',
    '& Button':{
        fontFamily:'Lato, sans-serif',
        fontWeight:600
    }
    },
    navbar:{
        '& Button':{
            fontFamily:'Lato, sans-serif',
            fontWeight:600
        },
        padding:'10px'
    },
    orange_buttons:{
        padding:'15px 30px',
        background:'#374D9A',
        color:'white',
        borderRadius:'10px',
        fontFamily:'Lato, sans-serif',
        fontWeight:600
    },
    '.MuiTypography-h2':{
        color:'white'
    },
    courousal:{
        '& .MuiTypography-h2':{
            color:'white ',
            fontFamily: 'Lato, sans-serif',
            fontWeight:600
        },
        '& Button':{
            marginTop:'25px',
        }
    },
    parentHeader:{
        "@media (min-width: 50px)": {
            display: "none"
          },
          "@media (min-width: 1000px)": {
            display: "block"
          },
        '& .MuiTypography-h4':{
            fontWeight:600,
            fontFamily: 'Lato, sans-serif',
            color:'white'
        },
        '& .MuiTypography-h6':{
            fontWeight:600,
            fontFamily: 'Lato, sans-serif ',
            color:'white'
        },
        '& Button':{
            fontFamily: 'Lato, sans-serif',
        }
    },
    mobileHeader:{
        "@media (min-width: 50px)": {
            display: "block"
          },
          "@media (min-width: 1000px)": {
            display: "none"
          },
        '& .MuiTypography-h4':{
            fontWeight:600,
            fontFamily: 'Lato, sans-serif',
            color:'white'
        },
        '& .MuiTypography-h6':{
            fontWeight:600,
            fontFamily: 'Lato, sans-serif ',
            color:'white'
        },
        '& Button':{
            fontFamily: 'Lato, sans-serif',
        }
    },
    aboutOA:{
        padding:'50px 0px',
        '& p':{
            fontFamily: 'Lato, sans-serif ',
            color:'#646464'
        },
        '& .MuiTypography-h4':{
            fontWeight:600,
            fontFamily: 'Lato, sans-serif',
            color:'#555555'
        },
        '& .MuiTypography-h6':{
            fontWeight:400,
            fontFamily: 'Lato, sans-serif ',
            color:'#555555'
        },
        '& Button':{
            
        },
        '& .MuiTypography-body2':{
            padding:'10px 20px 10px 0px',
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
    ourProg:{
        backgroundColor:'#EDF0F2',
        width:'100%',
        padding:'50px 0px',
        '& p':{
            fontFamily: 'Lato, sans-serif ',
            color:'#555555'
        },
        '& .MuiTypography-h4':{
            fontWeight:600,
            fontFamily: 'Lato, sans-serif',
            color:'#111111'
        },
        '& .MuiTypography-h6':{
            fontWeight:400,
            fontFamily: 'Lato, sans-serif ',
            color:'#555555'
        },
        '& Button':{
            
        },
        '& .MuiTypography-body2':{
            padding:'10px 20px 10px 0px',
            fontSize:'18px'
        }
    },
    countings:{
        background: `linear-gradient( rgba(244,121,18,0.8), rgba(244,121,18,0.8) ), url(${behindNumbers})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',
        paddingTop:'8% ',
        paddingBottom:'8%'
    },
    testimonials:{
        backgroundColor: '#EDF0F2 !important',
        padding:'4rem 0rem'
    },
    videos:{
        padding:'6rem 0rem',
        background: `linear-gradient(rgba(17, 17, 17, 0), rgba(17, 17, 17, 0)) 0% -58.0875px / cover no-repeat fixed, url(${videoThumbnail}) 0%`
    },
    op:{
        padding:'6rem 0rem 0rem 0rem'
    }
    
}));


export const HomePage= (props) => {
    const classes = useStyles();
    const [counting,setCounting]=useState(false);
    const form2 = useRef();
    useEffect(() => {
        window.scrollTo(0, 0);
          
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
          if (window.pageYOffset > 2000) {
            setCounting(true);
          } else {
            setCounting(false);
          }
        };
    
        window.addEventListener("scroll", toggleVisibility);
    
        return () => window.removeEventListener("scroll", toggleVisibility);
      }, []);
      const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_oouiqsp', 'template_g3f60yn', form2.current, '19PTqwLHGd8I0BkY6')
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
        <>
        <Header history={props.history}  />
        <div className={classes.parentHeader}>
            <div >
            <Carousel  className={classes.courousal} animation="slide" indicators={false} interval={4000}  navButtonsAlwaysVisible={true} autoPlay={true}>
                
                        <Paper style={{ height: '760px' }} > 
                            <div style={{position:'relative'}}>
                                <img src={home1} />
                                <div style={{position:'absolute', top:'20%', left:'16%'}}>
                                <Typography variant='h2'>IT'S NEVER TOO EARLY TO <br/>LEARN TO SWIM!</Typography>
                                <Link to='learn_to_swim'><Button className={classes.orange_buttons}>LEARN MORE</Button></Link>
                                </div>
                            </div>
                        </Paper>
                        <Paper style={{ height: '760px' }}   >
                        <div style={{position:'relative'}}>
                                <img src={home2} />
                                <div style={{position:'absolute', top:'20%', left:'16%'}}>
                                <Typography variant='h2'>THE LEADING SWIM CLUB  <br/>IN RAJASTHAN</Typography>
                                <Link to='learn_to_swim'><Button className={classes.orange_buttons}>LEARN MORE</Button></Link>
                                </div>
                            </div>
                         </Paper>
                        <Paper  style={{ height: '760px' }} >
                        <div style={{position:'relative'}}>
                                <img src={home3} />
                                <div style={{position:'absolute', top:'20%', left:'16%'}}>
                                <Typography variant='h2'>HIGHLY PROFESSIONAL<br/>COACHES</Typography>
                                <Link to='learn_to_swim'><Button className={classes.orange_buttons}>LEARN MORE</Button></Link>
                                </div>
                            </div>
                        </Paper>
                        <Paper style={{ height: '760px' }} >
                        <div style={{position:'relative'}}>
                                <img src={home4} />
                                <div style={{position:'absolute', top:'20%', left:'16%'}}>
                                <Typography variant='h2'>BECOME A CHAMPION<br/>COMPETETIVE SWIMMER</Typography>
                                <Link to='learn_to_swim'><Button className={classes.orange_buttons}>LEARN MORE</Button></Link>
                                </div>
                            </div>
                        </Paper>
                        
                
            </Carousel>
            <div style={{backgroundColor:'#374D9A',padding:'50px 0px'}}>
                <Container className='sfa_home'>
                    <Grid container>
                        <Grid item md={9}>
                            <Typography variant='h4'>REGISTER NOW!</Typography>
                            <br/>
                            <Typography variant='h6'>Become water safe and kick start your journey with OrcaAquatics today!</Typography>
                        </Grid>
                        <Grid item md={3}>
                            <Button style={{backgroundColor:'black',color:'white', padding:'25px 10px',borderRadius:'10px'}} fullWidth>START FREE ASSESSMENT</Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            </div>
            <div style={{height:'50px'}}  id='contactform'></div>
            <div className={classes.aboutOA}    >
                
                <Container>
                    <Grid container>
                        <Grid item md={7}>
                            <br/>
                            <Typography  variant='h4'>ABOUT ORCA AQUATICS</Typography>
                            <br/>
                            <Typography variant='body2'>
                            Orca Aquatics is home of a comprehensive aquatics programme in swimming, competitive swimming, learn to swim and water polo. With over 4+ locations in the Jaipur,
                               and USA qualified teachers and coaches to choose from, access to quality aquatics provision has never been easier.
                            </Typography>
                            <br/>
                            <Grid container>
                                <Grid item md={6}>
                                <Typography variant='h6' style={{fontWeight:600}}>OVER 5+ LOCATIONS</Typography>
                                <Typography variant='body2'> Be it Jaipur, one of our swimming locations is never too far. </Typography>
                            
                                </Grid>
                                <Grid item md={6}>
                                <Typography variant='h6' style={{fontWeight:600}}>STRUCTURED PATHWAY</Typography>
                                <Typography variant='body2'>Our programmes follow a structured pathway that are fun and engaging whilst building water confidence.</Typography>
                                    
                                </Grid>
                            </Grid>
                            <br/>
                            <Grid container>
                                <Grid item md={6}>
                                <Typography variant='h6' style={{fontWeight:600}}>USA QUALIFIED TEACHERS</Typography>
                                <Typography variant='body2'> Highly qualified swimming and coaching staff who undergo monthly training ensuring the best delivery of our programmes.</Typography>
                            
                                </Grid>
                                <Grid item md={6}>
                                <Typography variant='h6' style={{fontWeight:600}}>ONLINE ASSESSMENT</Typography>
                                <Typography variant='body2'>No need to visit our pool for an assessment. Get assessed online and complete your booking in a matter of minutes.</Typography>
                                    
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item md={5} >
                            <div className={classes.formHome} style={{background: '#FFFFFF',padding: '30px 20px',border: '1px solid #f2f2f2',boxShadow: '0px 0px 25px 10px rgb(0 0 0 / 5%)'}}>
                            <Typography 
                            variant='h6' style={{fontWeight:600,textAlign:'center'}}>HAVE A QUESTION? <br/> REQUEST A CALLBACK FROM OUR<br/> SUPPORT STAFF</Typography>
                            <form ref={form2} onSubmit={sendEmail}>
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


                        </Grid>
                    </Grid>
                </Container>

            </div>
            <div className={classes.ourProg}>
                <Container>
                    <Typography align="center" variant='h4'>OUR PROGRAMMERS
                    </Typography>
                    <br/>
                    <Typography variant='body2'>
                    We offer fun and competitive opportunities for you to lead a healthier and safer lifestyle. Whether you are starting your journey to learn how to swim or have Olympic aspirations in any aquatic sport, we have the programme for you. We invite you to join us and experience the difference we can make in your life through the water.
                    </Typography>
                    <br/>
                    <Carousel  className={classes.courousal} animation="slide" indicators={false} interval={4000}  navButtonsAlwaysVisible={true} autoPlay={true}>
                        <div>
                            <Grid container>
                                <Grid item md={4} style={{padding:'20px'}}>
                                    <img src={coropic} width="350px" height="300px"  />
                                </Grid>
                                <Grid item md={4} style={{padding:'20px'}}>
                                    <img src={coropic1} width="350px" height="300px"  />
                                </Grid>
                                <Grid item md={4} style={{padding:'20px'}}>
                                    <img src={coropic2} width="350px" height="300px" />
                                </Grid>
                            </Grid>

                        </div>
                        <div>
                            <Grid container>
                                <Grid item md={4} style={{padding:'20px'}}>
                                    <img src={coropic3} width="350px" height="300px"  />
                                </Grid>
                                <Grid item md={4} style={{padding:'20px'}}>
                                    <img src={coropic4} width="350px" height="300px"  />
                                </Grid>
                                <Grid item md={4} style={{padding:'20px'}}>
                                    <img src={coropic5} width="350px" height="300px" />
                                </Grid>
                            </Grid>

                        </div>
                        <div>
                            <Grid container>
                                <Grid item md={4} style={{padding:'20px'}} >
                                    <img src={coropic6} width="350px" height="300px"  />
                                </Grid>
                                <Grid item md={4} style={{padding:'20px'}} >
                                    <img src={coropic7} width="350px" height="300px"  />
                                </Grid>
                                <Grid item md={4} style={{padding:'20px'}} >
                                    <img src={coropic8} width="350px" height="300px" />
                                </Grid>
                            </Grid>

                        </div>


                    </Carousel>
                <br/>
                <Grid container>
                    <Grid item md={4}/>
                    <Grid item md={4} >
                    <Button className={classes.orange_buttons}>
                    START ASSESSMENT
                </Button>
                    </Grid>
                <Grid item md={4}/>
                </Grid>
                <br/>

                
                </Container>
                
            </div>
            <div className={classes.countings}>
                <Container>
                    <Grid container>
                        <Grid item md={3}>
                            <Typography variant='h4'>{counting && <CountUp

  end={12}
  duration={1.5}/>} + </Typography>
                            <Typography variant='h6'>YEARS EXPERIANCE <br/> IN THE RAJASTHAN</Typography>
                        </Grid>
                        <Grid item md={3}>
                        <Typography variant='h4'>{counting && <CountUp

end={1000}
duration={1.5}/>} + </Typography>
                            <Typography variant='h6'>ACTIVE SWIMMING <br/> COMMUNITY</Typography>
                        </Grid>
                        <Grid item md={3}>
                        <Typography variant='h4'>{counting && <CountUp

end={250}
duration={1.5}/>}</Typography>
                            <Typography variant='h6'>NATIONAL SWIMMERS <br/> CREATED</Typography>
                        </Grid>
                        <Grid item md={3}>
                        <Typography variant='h4'>{counting && <CountUp

end={8}
duration={1.5}/>}</Typography>
                            <Typography variant='h6'>NATIONAL MEDALLIST <br/> SWIMMERS CREATED</Typography>
                        </Grid>

                    </Grid>

                </Container>

            </div>
            <br/>
            <div className={classes.testimonials}>
                <Container>
                    <Typography variant='h4' align="center" style={{color:'black'}}> SWIMMERS TESTIMONIALS</Typography>
                    <br/>
                    <Grid container>
                        <Grid item md={6}>
                            <img src={testimonials} style={{maxWidth:'90%', display:'block'}}/>

                        </Grid>
                        <Grid item md={6}>
                        <FormatQuoteIcon style={{display:'block',fontSize:'7rem'}}/>
                            <Carousel  autoPlay={false} navButtonsAlwaysInvisible={true}  >
                            <div > 
                                <Typography variant='body2' style={{fontSize:'20px',fontWeight:400,color:'#646464',fontFamily:'Lato, sans-serif '}}>Just wanted to say a big thank you for your amazing work. Since I have started with you in 2018 and my swimming is improved tremendously.
                                I am very thnakful to coaches as this program helped me to reach early 24sec in 50m freestyle.
                                More importantly, it is very obvious how keen you are to make me reach my full potential and making the best out of the sessions.
                                I am very appreciative of this.</Typography>
                                <Typography style={{fontSize:'20px',marginTop:'30px',color:'#646464',fontFamily:'Lato, sans-serif '}} variant='body2'>HARSHIT NIRWAN</Typography>
                                 
                               
                            </div>
                            <div > 
                                <Typography variant='body2' style={{fontSize:'20px',fontWeight:400,color:'#646464',fontFamily:'Lato, sans-serif '}}>Just wanted to say a big thank you for your amazing work with Omar. Since he has started with you in Level 2 (and now up to level 3) his swimming has improved tremendously.
                                We are fascinated how Carmelo has progressed his swimming skills in the last couple of months. He moved from not wanting to get into the pool to swim independently
                                for a few meters already! He has improved so much very rapidly and is extremely happy to discover new abilities in every swimming lesson.
                                He is always looking forward to seeing you in the swimming classes ☺.
                                Thank you so much for the patience, encouragement and learning that you give to Carmelo.
                            
                           </Typography>
                                <Typography style={{fontSize:'20px',marginTop:'30px',color:'#646464',fontFamily:'Lato, sans-serif '}} variant='body2'>RAKESH KUMAR</Typography>
                                 
                               
                            </div>
                            <div > 
                                <Typography variant='body2' style={{fontSize:'20px',fontWeight:400,color:'#646464',fontFamily:'Lato, sans-serif '}}>Just wanted to say a big thank you for your amazing work with Omar. Since he has started with you in Level 2 (and now up to level 3) his swimming has improved tremendously.
                                He is always excited to come to your class and uses the swimming vocabulary in his conversations whenever we are swimming (soldiers, disappear, rocket, dolphin kicks).
                                More importantly, it is very obvious how keen you are on Omar reaching his full potential and making the best out of the classes that he attends.
                                We are very appreciative of this - we know Omar is in good hands.</Typography>
                                
                                 <Typography style={{fontSize:'20px',marginTop:'30px',color:'#646464',fontFamily:'Lato, sans-serif '}} variant='body2'>RAKESH KUMAR</Typography>
                                 
                            </div>

                            </Carousel>
                            
                        </Grid>
                    </Grid>
                </Container>

            </div>
            <br/>
            <br/>
            <div className={classes.videos}>
                <a target="_blank"  href="https://www.youtube.com/watch?v=66erBKhLnA4">
                <PlayCircleOutlineIcon  style={{display:'block',margin:'2px auto',fontSize:'7rem',color:'white'}}/>
                </a>
            </div> 
            <br/>
            <br/>
          
            <br/>
            <br/>
            <br/>

    </div>

    {/* MOBILE WORK */}

    <div className={classes.mobileHeader}>
            <div >
            <Carousel  className={classes.courousal} animation="slide" indicators={false} interval={4000}  navButtonsAlwaysVisible={true} autoPlay={true}>
                
                        <Paper style={{ height: '350px' }} > 
                            <div style={{position:'relative'}}>
                                <img src={home1} />
                                <div style={{position:'absolute', top:'5%', left:'8%'}}>
                                <Typography variant='h4'>IT'S NEVER TOO EARLY TO <br/>LEARN TO SWIM!</Typography>
                                <br/>
                                <br/>
                                <Button className={classes.orange_buttons}>LEARN MORE</Button>
                                </div>
                            </div>
                        </Paper>
                        <Paper style={{ height: '350px' }}   >
                        <div style={{position:'relative'}}>
                                <img src={home2} />
                                <div style={{position:'absolute', top:'5%', left:'8%'}}>
                                <Typography variant='h4'>IT'S NEVER TOO EARLY TO <br/>LEARN TO SWIM!</Typography>
                                <br/>
                                <br/>
                                <Button className={classes.orange_buttons}>LEARN MORE</Button>
                                </div>
                            </div>
                         </Paper>
                        <Paper  style={{ height: '350px' }} >
                        <div style={{position:'relative'}}>
                                <img src={home3} />
                                <div style={{position:'absolute', top:'5%', left:'8%'}}>
                                <Typography variant='h4'>IT'S NEVER TOO EARLY TO <br/>LEARN TO SWIM!</Typography>
                                <br/>
                                <br/>
                                <Button className={classes.orange_buttons}>LEARN MORE</Button>
                                </div>
                            </div>
                        </Paper>
                        <Paper style={{ height: '350px' }} >
                        <div style={{position:'relative'}}>
                                <img src={home4} />
                                <div style={{position:'absolute', top:'5%', left:'8%'}}>
                                <Typography variant='h4'>IT'S NEVER TOO EARLY TO <br/>LEARN TO SWIM!</Typography>
                                <br/>
                                <br/>
                                <Button className={classes.orange_buttons}>LEARN MORE</Button>
                                </div>
                            </div>
                        </Paper>
                        
                
            </Carousel>
            <div style={{backgroundColor:'#374D9A',padding:'50px 0px'}}>
                <Container>
                    <Grid container>
                        <Grid item md={9}>
                            <Typography variant='h4'>REGISTER NOW!</Typography>
                            <br/>
                            <Typography variant='h6'>Become water safe and kick start your journey with OrcaAquatics today!</Typography>
                        </Grid>
                        
                        <Grid item md={3}>
                            <Button style={{marginTop:'18px', backgroundColor:'black',color:'white', padding:'25px 10px',borderRadius:'10px'}} fullWidth>START FREE ASSESSMENT</Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            </div>
            <div style={{height:'5px'}} ></div>
            <div className={classes.aboutOA}    >
                
                <Container>
                    <Grid container>
                        <Grid item md={7}>
                            <br/>
                            <Typography  variant='h4'>ABOUT ORCA AQUATICS</Typography>
                            <br/>
                            <Typography variant='body2'>
                            Orca Aquatics is home of a comprehensive aquatics programme in swimming, competitive swimming, learn to swim and water polo. With over 4+ locations in the Jaipur,
                               and USA qualified teachers and coaches to choose from, access to quality aquatics provision has never been easier.
                            </Typography>
                            <br/>
                            <Grid container>
                                <Grid item md={6}>
                                <Typography variant='h6' style={{fontWeight:600}}>OVER 5+ LOCATIONS</Typography>
                                <Typography variant='body2'> Be it Jaipur, one of our swimming locations is never too far. </Typography>
                            
                                </Grid>
                                <Grid item md={6}>
                                <Typography variant='h6' style={{fontWeight:600}}>STRUCTURED PATHWAY</Typography>
                                <Typography variant='body2'>Our programmes follow a structured pathway that are fun and engaging whilst building water confidence.</Typography>
                                    
                                </Grid>
                            </Grid>
                            <br/>
                            <Grid container>
                                <Grid item md={6}>
                                <Typography variant='h6' style={{fontWeight:600}}>USA QUALIFIED TEACHERS</Typography>
                                <Typography variant='body2'> Highly qualified swimming and coaching staff who undergo monthly training ensuring the best delivery of our programmes.</Typography>
                            
                                </Grid>
                                <Grid item md={6}>
                                <Typography variant='h6' style={{fontWeight:600}}>ONLINE ASSESSMENT</Typography>
                                <Typography variant='body2'>No need to visit our pool for an assessment. Get assessed online and complete your booking in a matter of minutes.</Typography>
                                    
                                </Grid>
                            </Grid>

                        </Grid>
                        <br/>
                        <br/>
                        <Grid item md={5} >
                            <div className={classes.formHome} style={{background: '#FFFFFF',padding: '30px 20px',border: '1px solid #f2f2f2',boxShadow: '0px 0px 25px 10px rgb(0 0 0 / 5%)'}}>
                            <Typography 
                            variant='h6' style={{fontWeight:600,textAlign:'center'}}>HAVE A QUESTION? <br/> REQUEST A CALLBACK FROM OUR<br/> SUPPORT STAFF</Typography>
                            <br/>
                            <TextField 
                             fullWidth id="name" label="Name" variant="outlined" style={{marginBottom:'16px'}}/>
                             
                            
                            <TextField  fullWidth id="email" label="Email" variant="outlined" style={{marginBottom:'16px'}}/>
                            
                            <TextField  fullWidth id="phone" label="Phone" variant="outlined" style={{marginBottom:'16px'}}/>
                            
                            <TextField  fullWidth id="message" label="Your message" variant="outlined" 
                               multiline
                               rows={3}
                            />
                            
                            <Button fullWidth>SEND MESSAGE</Button>
                            </div>


                        </Grid>
                    </Grid>
                </Container>

            </div>
            <div className={classes.ourProg}>
                <Container>
                    <Typography align="center" variant='h4'>OUR PROGRAMMERS
                    </Typography>
                    <br/>
                    <Typography variant='body2'>
                    We offer fun and competitive opportunities for you to lead a healthier and safer lifestyle. Whether you are starting your journey to learn how to swim or have Olympic aspirations in any aquatic sport, we have the programme for you. We invite you to join us and experience the difference we can make in your life through the water.
                    </Typography>
                    <br/>
                    <Carousel  className={classes.courousal} animation="slide" indicators={false} interval={4000}  navButtonsAlwaysVisible={true} autoPlay={true}>
                        <div>
                            <Grid container>
                                <Grid item sm={12} xs={12} md={12} style={{padding:'20px'}}>
                                    <img src={coropic} width="350px" height="300px" />
                                </Grid>
                            </Grid>

                        </div>
                        <div>
                            <Grid container>
                                <Grid item sm={12} xs={12} md={12} style={{padding:'20px'}}>
                                    <img src={coropic} width="350px" height="300px"  />
                                </Grid>
                            </Grid>

                        </div>
                        <div>
                            <Grid container>
                                <Grid item sm={12} xs={12} md={12} style={{padding:'20px'}} >
                                    <img src={coropic} width="350px" height="300px"  />
                                </Grid>
                            </Grid>

                        </div>


                    </Carousel>
                <br/>
                <Grid container>
                    <Grid item xs={2} sm={2} md={2} />
                    <Grid item xs={8} sm={8} md={8}>
                    <Button className={classes.orange_buttons}>
                    START ASSESSMENT
                </Button>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} />
                </Grid>
                <br/>

                
                </Container>
                
            </div>
            <div className={classes.countings}>
                <Container>
                    <Grid container>
                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant='h4'>{counting && <CountUp

  end={12}
  duration={1.5}/>} + </Typography>
                            <Typography variant='h6'>YEARS EXPERIANCE <br/> IN THE RAJASTHAN</Typography>
                        </Grid>
                        
                        <Grid style={{marginTop:'15px'}} item md={12} sm={12} xs={12}>
                        <Typography variant='h4'>{counting && <CountUp

end={100}
duration={1.5}/>} + </Typography>
                            <Typography variant='h6'>ACTIVE SWIMMING <br/> COMMUNITY</Typography>
                        </Grid>
                        <Grid style={{marginTop:'15px'}} item md={12} sm={12} xs={12}>
                        <Typography variant='h4'>{counting && <CountUp

end={250}
duration={1.5}/>}</Typography>
                            <Typography variant='h6'>NATIONAL SWIMMERS <br/> CREATED</Typography>
                        </Grid>
                        <Grid style={{marginTop:'15px'}} item md={12} sm={12} xs={12}>
                        <Typography variant='h4'>{counting && <CountUp

end={8}
duration={1.5}/>}</Typography>
                            <Typography variant='h6'>NATIONAL MEDALLIST <br/> SWIMMERS CREATED</Typography>
                        </Grid>

                    </Grid>

                </Container>

            </div>
            <br/>
            <div className={classes.testimonials}>
                <Container>
                    <Typography variant='h4' align="center" style={{color:'black'}}> SWIMMERS TESTIMONIALS</Typography>
                    <br/>
                    <Grid container>
                        <Grid item xs={12} md={12} sm={12}>
                            <img src={testimonials} style={{maxWidth:'100%', display:'block'}}/>

                        </Grid>
                        <Grid item xs={12} md={12} sm={12}>
                        
                            <Carousel  autoPlay={false} navButtonsAlwaysInvisible={true}  >
                            <div > 
                                <Typography variant='body2' style={{fontSize:'20px',fontWeight:400,color:'#646464',fontFamily:'Lato, sans-serif '}}> <FormatQuoteIcon style={{fontSize:'3rem'}}/> Just wanted to say a big thank you for your amazing work. Since I have started with you in 2018 and my swimming is improved tremendously.
                                I am very thnakful to coaches as this program helped me to reach early 24sec in 50m freestyle.
                                More importantly, it is very obvious how keen you are to make me reach my full potential and making the best out of the sessions.</Typography>
                                <Typography style={{fontSize:'20px',marginTop:'10px',color:'#646464',fontFamily:'Lato, sans-serif '}} variant='body2'>HARSHIT NIRWAN</Typography>
                            </div>
                            </Carousel>
                            
                        </Grid>
                    </Grid>
                </Container>

            </div>
            <br/>
            <br/>
            <div className={classes.videos}>
                <a target="_blank"  href="https://www.youtube.com/watch?v=66erBKhLnA4">
                <PlayCircleOutlineIcon  style={{display:'block',margin:'2px auto',fontSize:'7rem',color:'white'}}/>
                </a>
            </div> 
            <br/>
            <br/>
            <div className={classes.op} style={{padding:'1rem 0'}}>
            <Typography variant='h4' align="center" style={{color:'black'}}> OUR PARTNERS</Typography>
            <Container>
                <Carousel>
                    <Grid container>
                        <Grid item sm={12} md={12} xs={12}>
                            <img src={partner} width='100%' height='200px'/>
                        </Grid>
                       
                    </Grid>
                    <Grid container>
                        <Grid item sm={12} md={12} xs={12}>
                            <img src={partner} width='100%' height='200px'/>
                        </Grid>
                       
                    </Grid>
                </Carousel>
                
            </Container>
            </div>
            <br/>
            <br/>
            <br/>

    </div>
   
    </>
    )
}


export default HomePage
