import React from 'react'
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
import testimonials from '../images/testimonials.jpg';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import partner1 from '../images/partner1.png'

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
        fontFamily:'Libre Baskerville',
        fontWeight:600
    }
    },
    navbar:{
        '& Button':{
            fontFamily:'Libre Baskerville',
            fontWeight:600
        },
        padding:'10px'
    },
    orange_buttons:{
        padding:'15px 30px',
        background:'#F47912',
        color:'white',
        borderRadius:'10px',
        fontFamily:'Libre Baskerville',
        fontWeight:600
    },
    '.MuiTypography-h2':{
        color:'white'
    },
    courousal:{
        '& .MuiTypography-h2':{
            color:'white ',
            fontFamily: 'Libre Baskerville'
        },
        '& Button':{
            marginTop:'25px',
        }
    },
    parentHeader:{
        '& .MuiTypography-h4':{
            fontWeight:600,
            fontFamily: 'Libre Baskerville',
            color:'white'
        },
        '& .MuiTypography-h6':{
            fontWeight:600,
            fontFamily: 'Libre Baskerville',
            color:'white'
        },
        '& Button':{
            fontFamily: 'Libre Baskerville',
        }
    },
    aboutOA:{
        padding:'50px 0px',
        '& p':{
            fontFamily: 'Libre Baskerville',
            color:'#646464'
        },
        '& .MuiTypography-h4':{
            fontWeight:400,
            fontFamily: 'Libre Baskerville',
            color:'#555555'
        },
        '& .MuiTypography-h6':{
            fontWeight:400,
            fontFamily: 'Libre Baskerville',
            color:'#555555'
        },
        '& Button':{
            
        },
        '& .MuiTypography-body2':{
            padding:'10px 20px 10px 0px'
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
            backgroundColor:'#F47912',
            padding:'20px 10px',
            fontWeight:600
        }
    },
    ourProg:{
        backgroundColor:'#EDF0F2',
        width:'100%',
        padding:'50px 0px',
        '& p':{
            fontFamily: 'Libre Baskerville',
            color:'#555555'
        },
        '& .MuiTypography-h4':{
            fontWeight:600,
            fontFamily: 'Libre Baskerville',
            color:'#111111'
        },
        '& .MuiTypography-h6':{
            fontWeight:400,
            fontFamily: 'Libre Baskerville',
            color:'#555555'
        },
        '& Button':{
            
        },
        '& .MuiTypography-body2':{
            padding:'10px 20px 10px 0px'
        }
    },
    countings:{
        background: 'linear-gradient( rgba(244,121,18,0.8), rgba(244,121,18,0.8) ), url(https://www.hamiltonaquatics.ae/assets/images/behind_number.jpg)',
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
        background: 'linear-gradient(rgba(17, 17, 17, 0), rgba(17, 17, 17, 0)) 0% -58.0875px / cover no-repeat fixed, url(https://www.hamiltonaquatics.ae/assets/images/video-thumbnail.jpg) 0%'
    },
    op:{
        padding:'6rem 0rem'
    }
    
}));


export const HomePage= (props) => {
    const classes = useStyles();
    return(
        <div className={classes.parentHeader}>
            <div >
            <Carousel  className={classes.courousal} animation="slide" indicators={false} interval={4000}  navButtonsAlwaysVisible={true} autoPlay={true}>
                
                        <Paper style={{ height: '760px' }} > 
                            <div style={{position:'relative'}}>
                                <img src={home1} />
                                <div style={{position:'absolute', top:'20%', left:'16%'}}>
                                <Typography variant='h2'>IT'S NEVER TOO EARLY TO <br/>LEARN TO SWIM!</Typography>
                                <Button className={classes.orange_buttons}>LEARN MORE</Button>
                                </div>
                            </div>
                        </Paper>
                        <Paper style={{ height: '760px' }}   >
                        <div style={{position:'relative'}}>
                                <img src={home2} />
                                <div style={{position:'absolute', top:'20%', left:'16%'}}>
                                <Typography variant='h2'>IT'S NEVER TOO EARLY TO <br/>LEARN TO SWIM!</Typography>
                                <Button className={classes.orange_buttons}>LEARN MORE</Button>
                                </div>
                            </div>
                         </Paper>
                        <Paper  style={{ height: '760px' }} >
                        <div style={{position:'relative'}}>
                                <img src={home3} />
                                <div style={{position:'absolute', top:'20%', left:'16%'}}>
                                <Typography variant='h2'>IT'S NEVER TOO EARLY TO <br/>LEARN TO SWIM!</Typography>
                                <Button className={classes.orange_buttons}>LEARN MORE</Button>
                                </div>
                            </div>
                        </Paper>
                        <Paper style={{ height: '760px' }} >
                        <div style={{position:'relative'}}>
                                <img src={home4} />
                                <div style={{position:'absolute', top:'20%', left:'16%'}}>
                                <Typography variant='h2'>IT'S NEVER TOO EARLY TO <br/>LEARN TO SWIM!</Typography>
                                <Button className={classes.orange_buttons}>LEARN MORE</Button>
                                </div>
                            </div>
                        </Paper>
                        
                
            </Carousel>
            <div style={{backgroundColor:'#F47912',padding:'50px 0px'}}>
                <Container>
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
            <div className={classes.aboutOA}>
                <Container>
                    <Grid container>
                        <Grid item md={7}>
                            <br/>
                            <Typography  variant='h4'>ABOUT ORCA AQUATICS</Typography>
                            <br/>
                            <Typography variant='body2'>
                            Orca Aquatics is home of a comprehensive aquatics programme in swimming, competitive swimming, artistic swimming and water polo. With over 30 locations in the UAE,
                               and UK qualified teachers and coaches to choose from, access to quality aquatics provision has never been easier.
                            </Typography>
                            <br/>
                            <Grid container>
                                <Grid item md={6}>
                                <Typography variant='h6' style={{fontWeight:600}}>OVER 30+ LOCATIONS</Typography>
                                <Typography variant='body2'> Be it Dubai or Abu Dhabi, one of our swimming locations is never too far. </Typography>
                            
                                </Grid>
                                <Grid item md={6}>
                                <Typography variant='h6' style={{fontWeight:600}}>STRUCTURED PATHWAY</Typography>
                                <Typography variant='body2'>Our programmes follow a structured pathway that are fun and engaging whilst building water confidence.</Typography>
                                    
                                </Grid>
                            </Grid>
                            <br/>
                            <Grid container>
                                <Grid item md={6}>
                                <Typography variant='h6' style={{fontWeight:600}}>UK QUALIFIED TEACHERS</Typography>
                                <Typography variant='body2'> Highly qualified swimming and coaching staff who undergo monthly training ensuring the best delivery of our programmes.</Typography>
                            
                                </Grid>
                                <Grid item md={6}>
                                <Typography variant='h6' style={{fontWeight:600}}>ONLINE ASSESSMENT</Typography>
                                <Typography variant='body2'>No need to visit our pool for an assessment. Get assessed online and complete your booking in a matter of minutes.</Typography>
                                    
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item md={5}>
                            <div className={classes.formHome} style={{background: '#FFFFFF',padding: '30px 20px',border: '1px solid #f2f2f2',boxShadow: '0px 0px 25px 10px rgb(0 0 0 / 5%)'}}>
                            <Typography variant='h6' style={{fontWeight:600,textAlign:'center'}}>HAVE A QUESTION? <br/> REQUEST A CALLBACK FROM OUR<br/> SUPPORT STAFF</Typography>
                            
                            <TextField fullWidth id="name" label="Name" variant="filled" />
                            
                            <TextField fullWidth id="email" label="Email" variant="filled" />
                            
                            <TextField fullWidth id="phone" label="Phone" variant="filled" />
                            
                            <TextField fullWidth id="message" label="Phone" variant="filled" />
                            
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
                                <Grid item md={4} style={{padding:'20px'}}>
                                    <img src={coropic} width="350px" height="300px"  />
                                </Grid>
                                <Grid item md={4} style={{padding:'20px'}}>
                                    <img src={coropic} width="350px" height="300px"  />
                                </Grid>
                                <Grid item md={4} style={{padding:'20px'}}>
                                    <img src={coropic} width="350px" height="300px" />
                                </Grid>
                            </Grid>

                        </div>
                        <div>
                            <Grid container>
                                <Grid item md={4} style={{padding:'20px'}}>
                                    <img src={coropic} width="350px" height="300px"  />
                                </Grid>
                                <Grid item md={4} style={{padding:'20px'}}>
                                    <img src={coropic} width="350px" height="300px"  />
                                </Grid>
                                <Grid item md={4} style={{padding:'20px'}}>
                                    <img src={coropic} width="350px" height="300px" />
                                </Grid>
                            </Grid>

                        </div>
                        <div>
                            <Grid container>
                                <Grid item md={4} style={{padding:'20px'}} >
                                    <img src={coropic} width="350px" height="300px"  />
                                </Grid>
                                <Grid item md={4} style={{padding:'20px'}} >
                                    <img src={coropic} width="350px" height="300px"  />
                                </Grid>
                                <Grid item md={4} style={{padding:'20px'}} >
                                    <img src={coropic} width="350px" height="300px" />
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
                            <Typography variant='h4'>12+</Typography>
                            <Typography variant='h6'>YEARS EXPERIANCE <br/> IN THE INDIA</Typography>
                        </Grid>
                        <Grid item md={3}>
                        <Typography variant='h4'>500+</Typography>
                            <Typography variant='h6'>ACTIVE SWIMMING <br/> COMMUNITY</Typography>
                        </Grid>
                        <Grid item md={3}>
                        <Typography variant='h4'>20</Typography>
                            <Typography variant='h6'>EXPERT SWIMMING <br/> TRAINERS</Typography>
                        </Grid>
                        <Grid item md={3}>
                        <Typography variant='h4'>3</Typography>
                            <Typography variant='h6'>OLYMPIC SWIMMERS <br/> CREATED</Typography>
                        </Grid>

                    </Grid>

                </Container>

            </div>
            <br/>
            <div className={classes.testimonials}>
                <Container>
                    <Typography variant='h4' align="center" style={{color:'black'}}> MEMBER TESTIMONIALS</Typography>
                    <br/>
                    <Grid container>
                        <Grid item md={6}>
                            <img src={testimonials} style={{maxWidth:'90%', display:'block'}}/>

                        </Grid>
                        <Grid item md={6}>
                        <FormatQuoteIcon style={{display:'block',fontSize:'7rem'}}/>
                            <Carousel>
                            <div > 
                                <Typography variant='body2' style={{fontSize:'20px',fontWeight:400,color:'#646464',fontFamily:'Libre Baskerville'}}>Just wanted to say a big thank you for your amazing work with Omar. Since he has started with you in Level 2 (and now up to level 3) his swimming has improved tremendously.
                                He is always excited to come to your class and uses the swimming vocabulary in his conversations whenever we are swimming (soldiers, disappear, rocket, dolphin kicks).
                                More importantly, it is very obvious how keen you are on Omar reaching his full potential and making the best out of the classes that he attends.
                                We are very appreciative of this - we know Omar is in good hands.</Typography>
                                <Typography style={{fontSize:'20px',marginTop:'30px',color:'#646464',fontFamily:'Libre Baskerville'}} variant='body2'>RAKESH KUMAR</Typography>
                                 
                               
                            </div>
                            <div > 
                                <Typography variant='body2' style={{fontSize:'20px',fontWeight:400,color:'#646464',fontFamily:'Libre Baskerville'}}>Just wanted to say a big thank you for your amazing work with Omar. Since he has started with you in Level 2 (and now up to level 3) his swimming has improved tremendously.
                                We are fascinated how Carmelo has progressed his swimming skills in the last couple of months. He moved from not wanting to get into the pool to swim independently
                                for a few meters already! He has improved so much very rapidly and is extremely happy to discover new abilities in every swimming lesson.
                                He is always looking forward to seeing you in the swimming classes ☺.
                                Thank you so much for the patience, encouragement and learning that you give to Carmelo.
                            
                           </Typography>
                                <Typography style={{fontSize:'20px',marginTop:'30px',color:'#646464',fontFamily:'Libre Baskerville'}} variant='body2'>RAKESH KUMAR</Typography>
                                 
                               
                            </div>
                            <div > 
                                <Typography variant='body2' style={{fontSize:'20px',fontWeight:400,color:'#646464',fontFamily:'Libre Baskerville'}}>Just wanted to say a big thank you for your amazing work with Omar. Since he has started with you in Level 2 (and now up to level 3) his swimming has improved tremendously.
                                He is always excited to come to your class and uses the swimming vocabulary in his conversations whenever we are swimming (soldiers, disappear, rocket, dolphin kicks).
                                More importantly, it is very obvious how keen you are on Omar reaching his full potential and making the best out of the classes that he attends.
                                We are very appreciative of this - we know Omar is in good hands.</Typography>
                                
                                 <Typography style={{fontSize:'20px',marginTop:'30px',color:'#646464',fontFamily:'Libre Baskerville'}} variant='body2'>RAKESH KUMAR</Typography>
                                 
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
            <div className={classes.op}>
            <Typography variant='h4' align="center" style={{color:'black'}}> OUR PARTNERS</Typography>
            <Container>
                <Carousel>
                    <Grid container>
                        <Grid item md={3}>
                            <img src={partner1} width='100%' height='100%'/>
                        </Grid>
                        <Grid item md={3}>
                        <img src={partner1} width='100%' height='100%'/>
                        </Grid>
                        <Grid item md={3}>
                        <img src={partner1} width='100%' height='100%'/>
                         </Grid>
                        <Grid item md={3}>
                        <img src={partner1} width='100%' height='100%'/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={3}>
                            <img src={partner1} width='100%' height='100%'/>
                        </Grid>
                        <Grid item md={3}>
                        <img src={partner1} width='100%' height='100%'/>
                        </Grid>
                        <Grid item md={3}>
                        <img src={partner1} width='100%' height='100%'/>
                        </Grid>
                        <Grid item md={3}>
                        <img src={partner1} width='100%' height='100%'/>
                        </Grid>
                    </Grid>
                </Carousel>
                
            </Container>
            </div>
            <br/>
            <br/>
            <br/>

    </div>
    
    )
}


export default HomePage
