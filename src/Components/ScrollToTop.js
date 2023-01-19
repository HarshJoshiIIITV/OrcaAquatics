import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  mobileView:{
    "@media (min-width: 50px)": {
        display: "block"
      },
      "@media (min-width: 1000px)": {
        display: "none"
      },
    },
  lappiView:{
      "@media (min-width: 50px)": {
        display: "none"
      },
      "@media (min-width: 1000px)": {
        display: "block"
      },
    }
}))

export default function ScrollToTop() {
  const classes = useStyles();
  
    const [isVisible, setIsVisible] = useState(false);
  
    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      // Button is displayed after scrolling for 500 pixels
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  
  //scroll-to-top classes: fixed, bottom:0, right:0
    return (
      <>
      {isVisible && 
      <div style={{
        position: 'fixed',
        background:'#374D9A', 
      width: '40px',
      padding:'6px',
      left: '85%',
      bottom: '80px',
      borderRadius:'8px',
      height: '40px',
      fontSize: '4rem',
      zIndex: '1',
      cursor: 'pointer',
      color: 'white'}} className={classes.mobileView}>
            <ArrowUpwardIcon onClick={scrollToTop}  style={{position:'absolute',top:'12px',left:'12px'}} />
      </div>
      }
      {isVisible && 
      <div style={{
        position: 'fixed',
        background:'#374D9A', 
      width: '40px',
      padding:'6px',
      left: '95%',
      bottom: '80px',
      borderRadius:'8px',
      height: '40px',
      fontSize: '4rem',
      zIndex: '1',
      cursor: 'pointer',
      color: 'white'}} className={classes.lappiView}>
            <ArrowUpwardIcon onClick={scrollToTop}  style={{position:'absolute',top:'12px',left:'12px'}} />
      </div>
      }
   </>
    );
    
  }