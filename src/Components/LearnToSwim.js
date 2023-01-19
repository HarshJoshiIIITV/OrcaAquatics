import React, {useState,useEffect}  from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import lts from '../images/lts.jpeg'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SQRSP from '../images/squadsRSP.png'
import lts2 from '../images/lts2.png'
import coach from '../images/coach.jpg'
import logo from '../images/logo.png'
import MailOutline from '@material-ui/icons/MailOutline';
import Phone from '@material-ui/icons/Phone';
import Header from './Header';


const useStyles = makeStyles((theme) => ({
    lts:{
        backgroundrPosition: 'center center',
        background: `linear-gradient( rgba(240, 240, 240, 0.6), rgba(240, 240, 240, 0.6) ), url(${lts})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',
        padding:'6rem 0rem',
    },
    backgroundOrange:{
      background:'#374D9A'
    },
    parentlts:{
      '& table': {
        borderCollapse: 'collapse',
        width: '100%'
      },
      '& td, th': {
        border: '1px solid #dddddd',
        textAlign: 'left',
        padding: '8px'
      },
      // tr:nth-child(even) {
      //   background-color: #dddddd;
      // },
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
      background: '#F9FAFB',
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
      '& a':{
        fontFamily: 'Lato, sans-serif ',
        color:'black',
        textDecoration:'none'
      },
      '& .MuiTypography-body2':{
        color:'black',
        fontSize:'16px',
        marginBottom:'14px'
      },
      marginTop:'20px'


    },
    leftGrayBox:{
      padding:'25px 15px 35px 20px',
      background: '#F9FAFB',
      marginTop:'26px',
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


export const LearnToSwim= (props) => {
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
    <div className={classes.parentlts}>
            <div className={classes.lts}>
            
                <Container>
                    <Grid container>
                        <Grid item md={3} style={{padding:'14px'}}>
                            <Typography variant='h4' style={{color: '#374D9A'}}>LEARN TO SWIM</Typography>
                            <Link to='/'>HOME</Link> / <Link to='/learn_to_swim'>LEARN TO SWIM</Link>
                        </Grid>
                    </Grid>

                </Container>
                
            </div>
            <br/>
            <br/>
            
            <Container container>
              <Grid container>
              <Grid item md={4} style={{padding:'2rem'}}>
                <img src={lts2} width={"100%"} />
                
                <div className={classes.leftBlackBox}>
                  <Typography variant="h6">OUR CLUBS</Typography>
                  <hr/>
                  <br/>
                  
                  <Typography variant='body2'><Link onClick={()=>scrollToAccord(0)}>Orca's kids club | 5-13 Years</Link></Typography>
                  <Typography variant='body2'><Link onClick={()=>scrollToAccord(1)}>Orca's teens club | 13-19 Years </Link></Typography>
                  <Typography variant='body2'> <Link onClick={()=>scrollToAccord(2)}>Orca's evergreen club | 19+ Years</Link></Typography>

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
                  <Button><MailOutline/>squads@orcaaquatics.in</Button>
                </div>
              </Grid>

              <Grid item md={8} style={{padding:'0rem 2rem 2rem 2rem'}}>
                    <Typography variant='h4' style={{marginBottom:'12px', marginTop:'2rem'}}>LEARN TO SWIM LESSONS</Typography>
                    <Typography variant='body2'>One way of ensuring your child’s safety in the water is taking them to swimming lessons from an early age. The benefits of swimming are widely known, but for children in particular, learning to swim has added benefits:<p></p>
                    1. Lessons provide your children with confidence, which is great for self-esteem <br></br>
                    2. Your child will learn about water safety in and around water <br></br>
                    3. Swimming is a great way to exercise <br></br>
                    4. Earlier development of physical skills including hand-eye coordination and muscle tone <br></br> 
                    5. Enhances social and personal skills <br></br>
                    <p></p>
                    Swimming lessons are also extremely beneficial for children over the age of five as it enhances their knowledge of safety around water as well furthering their skills and stroke development.
 <p></p>

 At Orca Aquatics, our learn to swim programme has been carefully designed taking vital elements into consideration like water safety, water confidence and enjoying the water. The programme is broken down into 8 learning levels, each of which has a set criteria. More information about these levels can be found below.

              </Typography>

              
              <Typography id='cp' variant='h4' style={{marginBottom:'12px', marginTop:'3rem'}}>HOW TO GET STARTED?</Typography>
                              <Typography variant='body2'>

                              Getting started is simple. Our online assessments allow you to book your child’s first swimming lesson from the comfort of your home. Head over to Orca Bay, our online portal, and answer a few basic questions about your child’s current swimming ability. Once you have done that, our set criteria will decide the level your child can begin with and subsequently taking you to a list of over 30 locations in the UAE where can you book an available swimming lesson.
<p></p>
Before heading over to the online assessment though, we suggest you get familiar with the learn to swim programmes that we offer.

              </Typography>
              <br/>
            <Accordion style={{marginBottom:'10px'}} expanded={acc1}  onChange={(e)=>setAcc1(!acc1)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{background: '#374D9A'}}
                  >
                    <Typography variant='body2' style={{color:'white'}}>Orca's kids club | 5-13 Years</Typography>
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
                    <Typography variant='body2' style={{color:'white'}} >Orca's teens club | 13-20 Years</Typography>
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
                    <Typography variant='body2' style={{color:'white'}}>Orca's evergreen club | 20+ Years</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant='body2' >
                    The Competition Pathway has evolved to support swimmers who are aiming to train and compete competitively. Training is delivered with individual goals in mind but importantly in line with the correct age and ability. Swimmers have full training available to them but with a slightly lower commitment and performance expectation than the Performance Pathway – this allows swimmers to choose their commitment to fall in line with their goals.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                
                {/* <Accordion style={{marginBottom:'10px'}} expanded={acc4} onChange={(e)=>setAcc4(!acc4)} >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{background: '#374D9A'}}
                  >
                    <Typography variant='body2' style={{color:'white'}}>PERFORMANCE PATHWAY</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant='body2' >
                    Our Performance Pathway is aimed at top performing swimmers achieving at a national or international level, and offers world class services such as dedicated full-time coaches, assistant coaches, strength and conditioning, video analysis, sports psychology consultancy and nutrition advice. This commitment to excellence has led us to consistently develop elite athletes onto national and international teams every year.</Typography>
                  </AccordionDetails>
                </Accordion> */}

                <Typography variant='h4' style={{marginBottom:'12px', marginTop:'3rem'}}>LEARN TO SWIM LESSONS FEES</Typography>
                
                  <table>
                    <tr className={classes.backgroundOrange}>
                      <th style={{color:'white'}}>Clubs</th>
                      <th style={{color:'white'}}>Pool timings</th>
                      <th style={{color:'white'}}>Price per month</th>
                    </tr>
                    <tr>
                      <td>Orca's kids club | 5-13 Years</td>
                      <td>6am-9am  |  4pm-7pm</td>
                      <td>3000 Rs</td>
                    </tr>
                    <tr>
                      <td>Orca's teens club | 13-19 Years</td>
                      <td>6am-9am  |  4pm-7pm</td>
                      <td>3500 Rs</td>
                    </tr>
                    <tr>
                      <td>Orca's evergreen club | 19+ Years</td>
                      <td>6am-9am  |  4pm-7pm</td>
                      <td>4000 Rs</td>
                    </tr>
                    
                  </table>   
              </Grid>
              </Grid>

             

        </Container>



            
    </div>
    </>
    )
}


export default LearnToSwim;
