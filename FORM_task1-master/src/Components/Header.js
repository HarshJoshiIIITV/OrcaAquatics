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
    }
    
}));


export const Header= (props) => {
    const classes = useStyles();
    return(
        <div className={classes.parentHeader}>
            <div className={classes.topheader}>
                <Container>
                    <Grid container>
                        <Grid item md={5}>
                            <MailOutlineIcon style={{width:'24px',height:'18px',position:'relative',top:'4px'}}/>
                            <span>orcaswim22@gmail.com</span>
                            <PhoneIcon style={{width:'22px',height:'16px',marginLeft:'10px',position:'relative',top:'2px'}}/>
                            <span style={{marginLeft:'-4px'}}>  +919560956633</span>    
                        </Grid>
                        <Grid item md={7} style={{display:'flex',justifyContent:'space-around'}}> 
                            <Button>NewsLetter</Button>
          ,                  <Button>Gallery</Button>
                            <Button>Live results</Button>
                            <Button style={{ background:'#F47912'}}>Member login</Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className={classes.navbar}>
                <Container style={{display:'flex',justifyContent:'space-around'}}>
                    <img src={logo} width="44px" height="44px" style={{paddingTop:'10px'}}/>
                    <Button>Learn to swim</Button>
                            <Button>Squads</Button>
                            <Button>SynQuatics</Button>
                            <Button>Hamiliton Sharks</Button>
                            <Button>Competitions</Button>
                            <Button>Locations</Button>
                            <Button>Blog</Button>
                            <Button>Summer</Button>

                </Container>

            </div>
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
                <Button className={classes.orange_buttons} style={{textAlign:'center'}}>
                    START ASSESSMENT
                </Button>
                
                </Container>
                
            </div>

    </div>
    
    )
}


export default Header
