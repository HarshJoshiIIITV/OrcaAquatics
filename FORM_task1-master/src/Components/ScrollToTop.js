import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
export default function ScrollToTop() {
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
        background:'#F47912', 
      width: '40px',
      padding:'6px',
      left: '95%',
      bottom: '80px',
      borderRadius:'8px',
      height: '40px',
      fontSize: '4rem',
      zIndex: '1',
      cursor: 'pointer',
      color: 'white'}}>
            <ArrowUpwardIcon onClick={scrollToTop}  style={{position:'absolute',top:'12px',left:'12px'}} />
      </div>
      }
   </> );
    
  }