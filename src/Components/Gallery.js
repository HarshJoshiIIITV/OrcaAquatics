import React, {useState,useEffect,useCallback}  from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import gallery from '../images/gallerybg.jpg'
import Header from './Header';
import PhotoAlbum from "react-photo-album";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./gallaryphotos";

const useStyles = makeStyles((theme) => ({
    gallery:{
        backgroundrPosition: 'center center',
        background: `linear-gradient( rgba(240, 240, 240, 0.6), rgba(240, 240, 240, 0.6) ), url(${gallery})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',
        padding:'6rem 0rem',
    },
    parentGallery:{
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
}));





export const Gallery= (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event,  photo, index ) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    const classes = useStyles();
  
    return(
        <><Header  history={props.history} />
    <div className={classes.parentGallery}>
            <div className={classes.gallery}>
            
                <Container>
                    <Grid container>
                        <Grid item md={3} style={{padding:'14px'}}>
                            <Typography variant='h4' style={{color: '#374D9A'}}>GALLERY</Typography>
                            <Link to='/'>HOME</Link> / <Link to='/gallery'>GALLERY</Link>
                        </Grid>
                    </Grid>

                </Container>
                
            </div>
            <br/>
            <br/>
            
            <Container container>
                <Typography variant='body2' style={{textAlign:'center',padding:'2rem',color: '#a1a1a1',fontSize: '24px',fontWeight: 'lighter'}}>ORCA AQUATICS GALLERY 2022</Typography>
                <PhotoAlbum layout="rows" photos={photos} onClick={openLightbox} />
                <ModalGateway>
                {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    }))}
                    />
                </Modal>
                ) : null}
                </ModalGateway>
        </Container>
        



            
    </div>
    </>
    )
}


export default Gallery;
