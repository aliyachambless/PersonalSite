import PropTypes from 'prop-types';
import React from 'react';
import Gallery from 'react-grid-gallery';
import styled from 'styled-components'

const Container = styled.div`
  padding: 100px;
  font-family: acumin-pro, sans-serif !important;
  transition: all 0.4s ease-in-out;

  .footerCount_lkhc9u {
    font-family: acumin-pro, sans-serif !important;
  }
`

const Caption = styled.div`
  font-family: acumin-pro, sans-serif;
    position: absolute;
    width: fit-content;
    left: 50%;
    top: 50%;
    right: 50%;
    transform: translate(-50%,-50%);
`

export class Art extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: this.props.images
        };
    }

    render () {
        var images =
                this.state.images.map((i) => {
                    i.customOverlay = (
                            <div style={captionStyle}>
                            <div style={{margin: "15px"}}>{i.caption}</div>
                        </div>);
                    return i;
                });


        return (
            <Container>
                <Gallery 
                images={images} 
                enableImageSelection={false}
                rowHeight={350}
                margin={10}
                showCloseButton={false}
                backdropClosesModal={true}
                showImageCount={false}
                />
            </Container>
        );
    }
}

Art.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.string,
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired
        })
    ).isRequired
};

const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
    fontSize: "90%"
};

const images = [
    {
        src: "trisexualPaintin.png",
        thumbnailWidth: 2464,
        thumbnailHeight: 3194,
        caption: "Oil Painting"
    },
    {
        src: "shaynaClose.jpg",
        thumbnailWidth: 1000,
        thumbnailHeight: 1333,
        caption: "Oil Painting"
    },
    {
        src: "shaynaFull.jpg",
        thumbnailWidth: 3949,
        thumbnailHeight: 2969,
        caption: "Oil Painting"
    },

    {
        src: "ibra.png",
        thumbnailWidth: 3300,
        thumbnailHeight: 2550,
        caption: "Digital Art - Illustrator"
    },
    {
        src: "IMG_4955.JPG",
        thumbnailWidth: 3024,
        thumbnailHeight: 4032,
        caption: "Ink Drawing"
    },
    {
        src:  "IMG_4958.jpg",
        thumbnailWidth: 3024,
        thumbnailHeight: 4032,
        caption: "Ink Drawing"
    },
    {
        src: "IMG_5086.JPG",
        thumbnailWidth: 4032,
        thumbnailHeight: 3024,
        caption: "Charcoal Drawing"
    },
    {
        src: "IMG_5238.jpg",
        thumbnailWidth: 3024,
        thumbnailHeight: 4032,
        caption: "Charcoal Drawing"
    },
    {
        src: "IMG_7461.PNG",
        thumbnailWidth: 3000,
        thumbnailHeight: 3000,
        caption: "Digital Art - Photoshop"
    },
    {
        src: "IMG_7462.PNG",
        thumbnailWidth: 1280,
        thumbnailHeight: 1280,
        caption: "Digital Art - Photoshop"
    },
    {
        src: "IMG_9232.JPG",
        thumbnailWidth: 1385,
        thumbnailHeight: 1842,
        caption: "Digital Art - Photoshop"
    },
    {
        src: "snakeFace.png",
        thumbnailWidth: 800,
        thumbnailHeight: 1083,
        caption: "Digital Art - Photoshop"
    },
    {
        src: "albinoSnakeColor.png",
        thumbnailWidth: 3200,
        thumbnailHeight: 4162,
        caption: "Digital Art - Photoshop"
    },
    // {
    //     src: "elegant.JPG",
    //     thumbnailWidth: 2502,
    //     thumbnailHeight: 3486,
    //     caption: "Boats (Jeshu John - designerspics.com)"
    // },
]

Art.defaultProps = {
    images: images.map(img => ({
        src: require('../images/art/'+img.src), 
        thumbnail: require('../images/art/'+img.src),
        thumbnailWidth: img.thumbnailWidth,
        thumbnailHeight: img.thumbnailHeight,
        caption: <Caption>{img.caption}</Caption>
    })) 
};