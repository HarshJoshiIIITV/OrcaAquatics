import React, {useState,useEffect}  from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import comp from '../images/competitions.jpeg';
import cmp2 from '../images/competition2.jpg'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SQRSP from '../images/squadsRSP.png'
import SQDSP from '../images/squadsDSP.png'
import coach from '../images/coach.jpg'
import logo from '../images/logo.png'
import MailOutline from '@material-ui/icons/MailOutline';
import Phone from '@material-ui/icons/Phone';
import CalendarMonthIcon from '@material-ui/icons/CalendarTodayOutlined';
import Header from './Header';


const useStyles = makeStyles((theme) => ({
    competitions:{
        backgroundrPosition: 'center center',
        background: `linear-gradient( rgba(240, 240, 240, 0.6), rgba(240, 240, 240, 0.6) ), url(${comp})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',
        padding:'6rem 0rem',
    },
    parentcompetitions:{
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
    leftBlackBox:{
      padding:'25px 15px 25px 20px',
      background:'black',
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
      '& a':{
        fontFamily: 'Lato, sans-serif ',
        color:'white',
        textDecoration:'none'
      },
      '& .MuiTypography-body2':{
        color:'white',
        fontSize:'16px',
        marginBottom:'14px'
      },
      marginTop:'20px'


    },
    leftGrayBox:{
      padding:'25px 15px 35px 20px',
      background: '#F9FAFB',
      marginBottom:'26px',
      border:'1px solid #fafafa',
      '& Button':{
        color:'white',
        padding:'10px 16px',
        background:'#374D9A',
        width:'100%',
        marginTop:'12px',
        textTransform: 'lowercase'
      },
    }
    
    
    
}));


export const Competitions= (props) => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
    const classes = useStyles();
    const [acc1,setAcc1]=useState(false);
    const [acc2,setAcc2]=useState(false);
    const [acc3,setAcc3]=useState(false);
    const [acc4,setAcc4]=useState(false);
    const scrollToAccord=(accNo)=>{
      setAcc1(false);
      setAcc2(false);
      setAcc3(false);
      setAcc4(false);
        let ycor=document.getElementById('cp').offsetTop;
        console.log("YCOR",ycor);
        window.scroll(0,ycor-90);
        if(accNo===0){
          setAcc1(true);
        }
        else if(accNo===1){
          setAcc2(true)
        }
        else if(accNo===2){
          setAcc3(true);
        }
        else{
          setAcc4(true);
        }
    }
    return(
      <><Header  history={props.history} />
    <div className={classes.parentcompetitions}>
            <div className={classes.competitions}>
            
                <Container>
                    <Grid container>
                        <Grid item md={3} style={{padding:'14px'}}>
                            <Typography variant='h4' style={{color: '#374D9A'}}>COMPETITIONS</Typography>
                            <Link to='/'>HOME</Link> / <Link to='/competitions'>COMPETITIONS</Link>
                        </Grid>
                    </Grid>

                </Container>
                
            </div>
            <br/>
            <br/>
            
            <Container container>
              <Grid container>
              <Grid item md={4} style={{padding:'2rem'}}>
                
                <div className={classes.leftGrayBox}>
                  <Typography variant="h6">RESULT ARCHIVES</Typography>
                  <hr/>
                  
                  <Typography variant='body2'>Please click on below link to get the result archives</Typography>
                  <br/>
                  <Button style={{textTransform:'uppercase', fontWeight:'600'}}  onClick={()=>scrollToAccord(0)}>VIEW RESULTS ARCHIVE</Button>
                  {/* <Typography variant='body2'><Link onClick={()=>scrollToAccord(1)}>Development pathway </Link></Typography>
                  <Typography variant='body2'> <Link onClick={()=>scrollToAccord(2)}>Competition pathway </Link></Typography>
                  <Typography variant='body2'><Link onClick={()=>scrollToAccord(3)}>Performance pathway</Link></Typography> */}

                </div>

                <div className={classes.leftGrayBox}>
                  <Typography variant="h6">CONTACT SUPPORT</Typography>
                  <hr/>
                  <br/>
                  <div style={{display:'block',textAlign:'center',margin:'8px'}}>
                    <img src={logo}  width="44px" height="44px" />
                    
                    <Typography variant='body2' style={{marginTop:'12px'}} >Customer Support</Typography>
                  </div>
                  <Button><Phone/> (+91)9560956633</Button>
                  <Button><MailOutline/>squads@orcaquatics.in</Button>
                </div>
              </Grid>

              <Grid item md={8} style={{padding:'2rem'}}>
                <img src={cmp2} width={"100%"} />
                    <Typography variant='h4' style={{marginBottom:'12px', marginTop:'3rem'}}>COMPETITIONS</Typography>
                    <Typography variant='body2'>Orca aquatics swimming competitions are designed to provide the right level of competition to swimmers, supporting their development from the first competitive experience for those in the top end of the Learn to Swim programme, right through to elite performance.
                    <br/><br/>

              Our squad structure is designed to be progressive for swimmers to develop through pathways in line with the Long-Term Athlete Development Plan. We offer four pathways that allow an opportunity for each swimmer to develop and train in line with their correct age, ability, commitment, goals and potential. This structure gives swimmers of all abilities and commitment to enjoy the sport equally.
              <br/><br/>

              Although staying away from their home country, we continue to offer young expat swimmers a programme that propels them to represent their nation at the highest level within the sport, and have had multiple swimmers represent their home country internationally.

              </Typography>

              
              <Typography id='cp' variant='h4' style={{marginBottom:'12px', marginTop:'3rem'}}>TYPES OF PROGRAMMES</Typography>
                              <Typography variant='body2'>Click on the menus below to find out more information about our competitions and how to enter. If you are a Orca Aquatics member, your squad coach can give you more information on which competitions to enter and how to enter.

              </Typography>
              <br/>
            <Accordion style={{marginBottom:'10px'}} expanded={acc1}  onChange={(e)=>setAcc1(!acc1)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{background: '#374D9A'}}
                  >
                    <Typography variant='body2' style={{color:'white'}}>JUNIOR/SUB-JUNIOR CHAMPIONSHIPS</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant='body2' >
                    Our Club Pathway allows an opportunity for both late swimming developers and swimmers of less swimming commitment to train as part of a fun and progressive environment. Training is delivered with individual goals in mind, ensuring that each swimmer gets to improve and enjoy their swimming. Coaches work with swimmers who wish to take their swimming further and want to compete or progress into higher squads in the future.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
           
                <Accordion style={{marginBottom:'10px'}} expanded={acc2} onChange={(e)=>setAcc2(!acc2)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{background: '#374D9A'}}
                  >
                    <Typography variant='body2' style={{color:'white'}} >SENIOR CHAMPIONSHIPS</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant='body2' >
                    Our Development Pathway offers necessary skills, in and out of the pool to enable swimmers of all ages and abilities to fulfil their long-term potential. The training plans and daily focus is delivered with LTAD as the vision to allow swimmers to develop in a fun, safe, team oriented, learning environment.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
   
                <Accordion style={{marginBottom:'10px'}} expanded={acc3} onChange={(e)=>setAcc3(!acc3)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{background: '#374D9A'}}
                  >
                    <Typography variant='body2' style={{color:'white'}}>PARA CHAMPIONSHIPS</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant='body2' >
                    The Competition Pathway has evolved to support swimmers who are aiming to train and compete competitively. Training is delivered with individual goals in mind but importantly in line with the correct age and ability. Swimmers have full training available to them but with a slightly lower commitment and performance expectation than the Performance Pathway – this allows swimmers to choose their commitment to fall in line with their goals.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                
                <Accordion style={{marginBottom:'10px'}} expanded={acc4} onChange={(e)=>setAcc4(!acc4)} >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{background: '#374D9A'}}
                  >
                    <Typography variant='body2' style={{color:'white'}}>MASTERS CHAMPIONSHIPS</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant='body2' >
                    Our Performance Pathway is aimed at top performing swimmers achieving at a national or international level, and offers world class services such as dedicated full-time coaches, assistant coaches, strength and conditioning, video analysis, sports psychology consultancy and nutrition advice. This commitment to excellence has led us to consistently develop elite athletes onto national and international teams every year.</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              </Grid>


        </Container>



            
    </div>
    </>
    )
}


export default Competitions;
