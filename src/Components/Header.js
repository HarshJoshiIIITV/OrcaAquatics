import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Grid,  } from '@material-ui/core'
import logo from '../images/logo.png'
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import behindNumber from '../images/behind_number.png'
import behindThumbnail from '../images/video-thumbnail.png'
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    active:{
        color:'white',
        background:'#374D9A',
    },
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
            fontFamily: 'Lato, sans-serif'
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
        position: 'sticky',
        top: '0',
        zIndex:100,
        backgroundColor:'white',
        '& .MuiTypography-h4':{
            fontWeight:600,
            fontFamily: 'Lato, sans-serif',
            color:'white'
        },
        '& .MuiTypography-h6':{
            fontWeight:600,
            fontFamily: 'Lato, sans-serif',
            color:'white'
        },
        '& Button':{
            fontFamily: 'Lato, sans-serif',
        }
    },
    aboutOA:{
        padding:'50px 0px',
        '& p':{
            fontFamily: 'Lato, sans-serif',
            color:'#646464'
        },
        '& .MuiTypography-h4':{
            fontWeight:400,
            fontFamily: 'Lato, sans-serif',
            color:'#555555'
        },
        '& .MuiTypography-h6':{
            fontWeight:400,
            fontFamily: 'Lato, sans-serif',
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
            fontFamily: 'Lato, sans-serif',
            color:'#555555'
        },
        '& .MuiTypography-h4':{
            fontWeight:600,
            fontFamily: 'Lato, sans-serif',
            color:'#111111'
        },
        '& .MuiTypography-h6':{
            fontWeight:400,
            fontFamily: 'Lato, sans-serif',
            color:'#555555'
        },
        '& Button':{
            
        },
        '& .MuiTypography-body2':{
            padding:'10px 20px 10px 0px'
        }
    },
    countings:{
        background: `linear-gradient( rgba(244,121,18,0.8), rgba(244,121,18,0.8) ), url(${behindNumber})`,
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
        background: `linear-gradient(rgba(17, 17, 17, 0), rgba(17, 17, 17, 0)) 0% -58.0875px / cover no-repeat fixed, (${behindThumbnail}) 0%`
    },
    op:{
        padding:'6rem 0rem'
    }
    
}));


export const Header= (props) => {
    const classes = useStyles();
    const ScrollToIdForm=()=>{
        let ycor=document.getElementById('contactform').offsetTop;
        window.scrollTo({ top: ycor-10, behavior: 'smooth' })
    }
    let active=[false,false,false,false,false,false,false,false];
    const path=props.history.location.pathname;
    if(path.includes('learn_to_swim')){
        active[0]=true;
    }
    else if(path.includes('squads')){
        active[1]=true;
    }
    else if(path.includes('competitions')){
        active[2]=true;
    }
    else if(path.includes('locations')){
        active[3]=true;
    }
    else if(path.includes('blogs')){
        active[4]=true;
    }
    else if(path.includes("gallery")){
        active[5]=true;
    }
    else if(path.includes("live_results")){
        active[6]=true;
    }
    else if(path.includes("contact_us")){
        active[7]=true;
    }
    return(
        <div className={classes.parentHeader}>
            <div className={classes.topheader} >
                <Container>
                    <Grid container>
                        <Grid item xl={7} lg={6} md={5} sm={12}>
                            <a href="mailto:orcaswim22@gmail.com"><MailOutlineIcon style={{width:'24px',color: "#374D9A",height:'18px',position:'relative',top:'4px'}}/>
                            <span style={{fontFamily:'Lato, sans-serif'}}>orcaswim22@gmail.com</span></a>
                            <a href='tel:+919560956633'><PhoneIcon style={{color: "#374D9A",width:'22px',height:'16px',marginLeft:'10px',position:'relative',top:'2px'}}/>
                            <span  style={{marginLeft:'-4px',fontFamily:'Lato, sans-serif'}}>  +919560956633</span> </a>
                        </Grid>
                        <Grid item xl={5} lg={6} md={7} sm={12} style={{display:'flex',justifyContent:'space-around'}}> 
                            {/* <Button>NewsLetter</Button> */}
                            <Link to='gallery' ><Button className={active[5] ? classes.active : ''}>Gallery</Button></Link>
                            <Link to='live_results' ><Button className={active[6] ? classes.active : ''}>Live results</Button></Link>
                            <Link to='contact_us' ><Button  className={active[7] ? classes.active : ''}>Contact us</Button></Link>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className={classes.navbar} >
                <Container style={{display:'flex',justifyContent:'space-around', flexWrap:'wrap'}}>
                    <Link style={{display:'block'}} to='/'><img src={logo}  style={{height:'60px',width:'80px',position:'relative',top:'-5px'}}/> </Link>
                    <Link to='learn_to_swim' style={{paddingTop:'14px'}} ><Button className={active[0] ? classes.active : ''}>Learn to swim</Button></Link>
                    <Link to='squads' style={{paddingTop:'14px'}} ><Button className={active[1] ? classes.active : ''}>Squads</Button></Link>
                            {/* <Buton>SynQuatics</Button> */}
                            {/* <Button>Hamiliton Sharks</Button> */}
                            <Link to='competitions' style={{paddingTop:'14px'}} ><Button className={active[2] ? classes.active : ''}>Competitions</Button> </Link>
                           <Link to='locations' style={{paddingTop:'14px'}} > <Button className={active[3] ? classes.active : ''}>Locations</Button></Link> 
                            <Link style={{paddingTop:'14px'}} to='blogs' ><Button className={active[4] ? classes.active : ''}>Blog</Button></Link>
                            <Link style={{paddingTop:'14px',visibility:'hidden'}}><Button>Summer</Button></Link>

                </Container>

            </div>
          
    </div>
    
    )
}


export default Header
