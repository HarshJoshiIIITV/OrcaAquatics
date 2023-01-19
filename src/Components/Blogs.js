import React, {useState,useEffect}  from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import blog from '../images/blog.jpeg'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SQRSP from '../images/squadsRSP.jpeg'
import SQDSP from '../images/squadsDSP.png'
import coach from '../images/coach.jpg'
import logo from '../images/logo.png'
import MailOutline from '@material-ui/icons/MailOutline';
import Phone from '@material-ui/icons/Phone';
import CalendarMonthIcon from '@material-ui/icons/CalendarTodayOutlined';
import Header from './Header';


const useStyles = makeStyles((theme) => ({
    blogs:{
        backgroundrPosition: 'center center',
        background: `linear-gradient( rgba(240, 240, 240, 0.6), rgba(240, 240, 240, 0.6) ), url(${blog})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',
        padding:'6rem 0rem',
    },
    parentblogs:{
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
    rightGrayBox:{
      padding:'25px 15px 35px 20px',
      background: '#F9FAFB',
      // marginTop:'26px',
      border:'1px solid #fafafa',
      '& a':{
        
        color:'#646464',
      },
      '& .MuiTypography-body2':{
        fontSize:'16px',
        textTransform:'uppercase',
        marginTop:'16px'
    },
    '& span':{
      fontSize:'14px',
      textTransform:'uppercase',
      color:'#374D9A',
      marginLeft:'6px'
  }
    }
    
    
    
}));


export const Blogs= (props) => {
    const classes = useStyles();
    useEffect(()=>{
      window.scrollTo(0, 0);
    },[])
   
    const scrollToAccord=(accNo)=>{
      const yOffset = -126; 
      const ycor = document.getElementById(accNo);
      const y = ycor.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' })
    }

    return(
      <><Header  history={props.history} />
    <div className={classes.parentblogs}>
            <div className={classes.blogs}>
            
                <Container>
                    <Grid container>
                        <Grid item md={3} style={{padding:'14px'}}>
                            <Typography variant='h4' style={{color: '#374D9A'}}>BLOG</Typography>
                            <Link to='/'>HOME</Link> / <Link to='/blogs'>BLOG</Link>
                        </Grid>
                    </Grid>

                </Container>
                
            </div>
            <br/>
            <br/>
            
            <Container container>
              <Grid container>
            
              <Grid item md={8} style={{padding:'2rem'}}>
                <img src={SQRSP} width={"100%"} />

                <div>
                  <Typography variant='h4' style={{marginBottom:'12px', marginTop:'3rem'}} id='bl1'>BENEFITS OF SWIMMING</Typography>
                  <Typography variant='body2'>It’s winter and it’s the cooler time of the year here in the UAE, so it’s a great time to spend time outdoors, and there are so many reasons and benefits to keep swimming throughout the winter.
                  <p></p>
                  1.    Stay away from winter viruses 
                  Wait, that can’t be right! Except, it is! Swimming year-round boosts fitness levels helping your child build a stronger immune system. As a result, children are more resilient to stress and illness. We see parents withdrawing their children from our learn to swim programme at the start of the Term 2 believing it will help avoid illness. Perhaps, it stems from the old tale that children who have ‘wet hair’ or who ‘go out in the cold’ get sick. In reality, children who swim throughout winter are in fact less likely to catch colds and flu. 
                  <p></p>
                  2.    Swimming is a great way to keep fit
                  Unlike the cold countries, here in the UAE kids have an array of outdoor activities they can be a part of throughout the winter months to keep fit. And when it comes to fitness, swimming tops the list. It’s a great way to remain fit and it’s a sure way to keep those energy levels maintained. 
                <p></p>
                  3.    Swimming is a sport that could save your child’s life
                  Accidents can and do happen. It’s imperative that your child understands how to handle an emergency and stay confident in the water. Our swimming lessons, be it in summer, winter or any other time of the year helps reinforce your child’s swimming and safety skills so they are prepared if anything goes wrong. We have a water safety week as part of our learn to swim programme which ensures swimmers are armed with the skills they need to face an emergency in the water.
                  </Typography>
                </div>

                <div>
                  <Typography variant='h4' style={{marginBottom:'12px', marginTop:'3rem'}} id='bl2'>WHY TO CHOOSE US ?</Typography>
                  <Typography variant='body2'>
                  1. Attention to Details
                  It’s our attention to the small stuff, scheduling of timelines and keen project management that makes us stand out from the rest. We are creative, while keeping a close eye on the calendar and your budget.
                  <p></p>
                  2. A Plan for Success
                  You want results. We have found that the best way to get them is with up front research – of your company, competitors, target market and customer psychographics. Only after we fully understand you and your customers, do we recommend a plan of attack.
                  <p></p>
                  3. Creativity
                  We bring our diverse background of advertising, design, branding, public relations, research and strategic planning to work for your company. Not only will your materials look great – they will get results.

                  Yes, we have won awards for our work. But we don’t create concepts in a vacuum – they fit into the standards of your industry. And once we have a total picture of your company, its target audience and goals, we’ll create a detailed plan – that also includes a commitment to stay on budget and on deadline.
                  <p></p>
                  4. Experts Only
                  First Impressions is comprised of specialists with corporate and agency experience that hail from various backgrounds. As such, First Impressions will never assign second-tier (or gasp! third tier!) support staff to any account.
                  <p></p>
                  5. Pricing
                  Our prices are competitive and fair. There are no surprise bills. Any unexpected or additional expenses must be pre-approved by you. That’s how we would like to be treated, and that is how our clients are treated.

                  </Typography>
                </div>


                <div>
                  <Typography variant='h4' style={{marginBottom:'12px', marginTop:'3rem'}} id='bl3'>WHY OUR COACHES ARE BEST IN THE INDIA ?</Typography>
                  <Typography variant='body2'>
                  1. A good coach is self-aware.
                  To understand oneself, one’s coaching style, and how it is perceived and received by employees, is a critical first step to becoming a valuable and effective coach. Self-awareness is a journey unto itself, so we’ll be writing more about that in the coming weeks.
                  <p></p>
                  2. A good coach brings specific and well-defined issues to the attention of others.
                  Being unspecific about problem areas, or failing to bring them up with the appropriate parties, suggests a reluctance to affect positive change and a lack of leadership.
                  <p></p>
                  3. A good coach prepares for each session with information, examples, ideas, etc., and is ready for discussion.
                  Coaching sessions should be scheduled in advance, and the coach should have a solid agenda for each session that lays out the mission for the day. Without structure, the coaching session can devolve into a casual conversation with no real substance or direction.
                  <p></p>
                  4. A good coach treats individuals as partners in the organization, encouraging their input and trusting them to carry out assignments.
                  Some coaches are fans of “tough love,” while others are more lenient, but what all good coaches have in common is respect for their mentees. Contempt and resentment have no place in an effective coaching relationship, and only breed further conflict.
                  <p></p>
                  5. A good coach knows the strengths and weaknesses of his or her employees.
                  Much like the coach of a sports team, he or she knows how to tap into the individual strengths of employees to get the most out of them and to get the greatest amount of productivity from the team, collectively and individually.
                  </Typography>
                </div> 

                <div>
                  <Typography variant='h4' style={{marginBottom:'12px', marginTop:'3rem'}} id='bl4'>HEALTH AND SWIMMING</Typography>
                  <Typography variant='body2'>
                  1. A Gush Of Energy 
                  Thanks to the weather and our increased levels of inactivity, many amongst us to feel fatigued and drained out rather easily.  Now, push the tiredness out of the window by investing 30 minutes, 2-3 times a week on swimming. This will not only give a boost to your energy levels but also up your metabolic rate.
                  <p></p>
                  2. De-Stresser 
                  A few laps, a couple of times a week, can indeed help you relax and rejuvenate. Allowing you to also drift away from the everyday chaos, this fun activity aids in reducing anxiety and bouts of depression. Moreover, the positive physical exertion also tires you and helps you sleep peacefully. It has also been observed that in the long run, swimming helps to regulate sleep patterns.

                  Swimming helps in increasing the heart rate without stressing out the body. Nearly 50 per cent of older people experience insomnia and swimming can help with sleeping as well as boosting the quality of life.
                  <p></p>
                  3. Turns Back The Clock 
                  If the ageing clock is fast catching up on you, try swimming! No matter your age, swimming has a positive impact on blood pressure and cholesterol levels. It also improves cardiovascular performances, betters the health of the central nervous system and improves cognitive functioning. Therefore, helping you feel younger at heart and active especially when it comes to performing regular bodily functions.

                  <p></p>
                  4. Works On Underperforming Muscles 
                    Swimming is a comprehensive and thorough workout. Thus, as you work your way against the water, you land up using most of the unused muscles in your body. Many women suffer from niggling lower back pain, if you are one of them then probably it’s time you resort to swimming and bid adieu to back pain forever.
                  </Typography>
                </div> 

                       </Grid>

              <Grid item md={4} style={{padding:'2rem'}}>
                <div className={classes.rightGrayBox}>
                  <Typography variant="h6">BLOGS LINK'S</Typography>
                  <hr/>
                  <br/>
                  <div style={{display:'block',margin:'8px'}}>
                    
                    <Typography variant='body2' style={{marginTop:'0px'}}><Link onClick={()=>scrollToAccord('bl1')}>Benefits of swimming</Link></Typography>
                    <div style={{display:'flex'}}> 
                      <CalendarMonthIcon style={{fontSize:'18px'}}/>
                      <span> August 25,2020</span>
                  </div>
                   
                   <Typography variant='body2'><Link onClick={()=>scrollToAccord('bl2')}>Why to choose us ?</Link></Typography>
                   <div style={{display:'flex'}}> 
                      <CalendarMonthIcon style={{fontSize:'18px'}}/>
                      <span> August 25,2020</span>
                  </div>
                
                  
                  <Typography variant='body2'> <Link onClick={()=>scrollToAccord('bl3')}>Why our coaches are best in the india ? </Link></Typography>
                  <div style={{display:'flex'}}> 
                      <CalendarMonthIcon style={{fontSize:'18px'}}/>
                      <span> August 25,2020</span>
                  </div>
                                    
                  <Typography variant='body2'><Link onClick={()=>scrollToAccord('bl4')}>Health and swimming</Link></Typography>
                  <div style={{display:'flex'}}> 
                      <CalendarMonthIcon style={{fontSize:'18px'}}/>
                      <span> August 25,2020</span>
                  </div>
                  </div>
                </div>
              </Grid>

              </Grid>
        </Container>



            
    </div>
    </>
    )
}


export default Blogs;
