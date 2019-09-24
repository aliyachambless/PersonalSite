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
    padding: 20px;
`

export class Design extends React.Component {
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
                rowHeight={500}
                margin={20}
                showCloseButton={false}
                backdropClosesModal={true}
                showImageCount={false}
                />
            </Container>
        );
    }
}

Design.propTypes = {
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
        src: "MacBook Pro.png",
        thumbnailWidth: 2880,
        thumbnailHeight: 1800,
        caption: "Designs for the exchange@brown website, a clothing buying and selling platform for Brown students."
    },
    {
        src: "MacBook Pro-4.png",
        thumbnailWidth: 2880,
        thumbnailHeight: 1800,
        caption: "Search page for exchange@brown"
    },
    {
        src: "f@b poster.png",
        thumbnailWidth: 9150,
        thumbnailHeight: 12300,
        caption: "Exchange@brown demo poster"
    },

    {
        src: "booklet_mockup.png",
        thumbnailWidth: 1000,
        thumbnailHeight: 581,
        caption: "Steve Lacy Booklet for RISD Graphic Design course final project: branding an artist."
    },
    {
        src: "vinyl_cover_front.png",
        thumbnailWidth: 1200,
        thumbnailHeight: 766,
        caption: "Album cover front for RISD Graphic Design course"
    },
    {
        src:  "vinyl_cover_back.png",
        thumbnailWidth: 1200,
        thumbnailHeight: 766,
        caption: "Album cover back for RISD Graphic Design course"
    },
    // {
    //     src: "steve_lacy_booklet.pdf",
    //     thumbnailWidth: 4032,
    //     thumbnailHeight: 3024,
    //     caption: "Boats (Jeshu John - designerspics.com)"
    // },
    {
        src: "delicate_poster.png",
        thumbnailWidth: 4400,
        thumbnailHeight: 6800,
        caption: "RISD GD excercise: express the meaning of a word through design."
    },
    {
        src: "primaryAlphabet.png",
        thumbnailWidth: 612,
        thumbnailHeight: 831,
        caption: "RISD GD excercise: create an alphabet from found objects (contruction paper)."
    },
    {
        src: "royal-01.png",
        thumbnailWidth: 2550,
        thumbnailHeight: 3300,
        caption: "Brown University Film Forum screening poster"
    },
    {
        src: "ducksoup.png",
        thumbnailWidth: 2550,
        thumbnailHeight: 3300,
        caption: "Brown University Film Forum screening poster"
    },
    {
        src: "aNewLeaf.png",
        thumbnailWidth: 2550,
        thumbnailHeight: 3300,
        caption: "Brown University Film Forum screening poster"
    },
    {
        src: "theylive.png",
        thumbnailWidth: 2550,
        thumbnailHeight: 3300,
        caption: "Brown University Film Forum screening poster"
    },
    {
        src: "getout.png",
        thumbnailWidth: 2550,
        thumbnailHeight: 3300,
        caption: "Brown University Film Forum screening poster"
    },
    {
        src: "menuSecondDraft.png",
        thumbnailWidth: 2090,
        thumbnailHeight: 3230,
        caption: "RISD GD excercise: show heirarchical info on a menu."
    },
]

Design.defaultProps = {
    images: images.map(img => ({
        src: require('../images/design/'+img.src), 
        thumbnail: require('../images/design/'+img.src),
        thumbnailWidth: img.thumbnailWidth,
        thumbnailHeight: img.thumbnailHeight,
        caption: <Caption>{img.caption}</Caption>
    })) 
};