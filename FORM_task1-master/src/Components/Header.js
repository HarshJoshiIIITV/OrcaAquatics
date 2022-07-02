import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Grid,  } from '@material-ui/core'
import logo from '../images/logo.png'
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

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


export const Header= (props) => {
    const classes = useStyles();
    return(
        <div className={classes.parentHeader}>
            <div className={classes.topheader}>
                <Container>
                    <Grid container>
                        <Grid item md={5}>
                            <MailOutlineIcon style={{width:'24px',color: "#F47912",height:'18px',position:'relative',top:'4px'}}/>
                            <span>orcaswim22@gmail.com</span>
                            <PhoneIcon style={{color: "#F47912",width:'22px',height:'16px',marginLeft:'10px',position:'relative',top:'2px'}}/>
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
          
    </div>
    
    )
}


export default Header
