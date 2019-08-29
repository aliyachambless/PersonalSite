import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';
import blobs from 'blobs';
import styled from 'styled-components'

// CommonJS style
//grab the core
var KUTE = require("kute.js");
// Add SVG Plugin
require("kute.js/kute-svg");
// Add CSS Plugin
require("kute.js/kute-css");
// Add Attributes Plugin
require("kute.js/kute-attr");
// Add Text Plugin
require("kute.js/kute-text");

const numBlobs = 8;

const Blob = styled(InlineSVG)`
    position: absolute;
    left: ${(props) => props.x}%;
    top: ${(props) => props.y}%;
    z-index: -1;
`

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const getRandomArbitrary = (min, max) => {
    return  Math.random() * (max - min) + min;
}

export class Blobs extends Component {

    componentDidMount() {
        for (let i = 0; i < numBlobs*3; i++) {
            this.move(this.move, i, screen.width/2, screen.height/2)
            this.morph(this.morph, i, true)
        } 
    }

    componentDidUnmount() {
        console.log("uda")
    }

    morph(morph, i, cycle) {
        if(cycle){
            KUTE.to('#shape-'+i, { path: '#second-'+i }, 
            {
                duration: 1000, 
                complete() {
                    morph(morph, i, false)
                }
            }).start();
        } else {
            KUTE.to('#shape-'+i, { path: '#first-'+i }, 
            {
                duration: 3000, 
                complete() {
                    morph(morph, i, true)
                }
            }).start();
        }
    }

    move(move, i, x, y) {
        const left = Math.random()*(screen.width-500);
        const top = Math.random()*(screen.height-500);
        KUTE.to(`.blob-`+i,
        {
            left: left,
            top: top,
            rotate: Math.random()*360,
            scale: Math.random()+0.5 
        }, {
                duration: Math.sqrt((left-x)**2 + (top-y)**2)*30,
                easing: 'easingQuinticInOut',
                morphIndex: 127,
                complete() {
                    move(move, i, left, top)
                }
            }
        ).start();
    }

    getColor(num) {
        if(num%3 == 0 && num > 6){
            return '#4399de80';
        } else if(num%3 == 1 && num > 6) {
            return '#e3305680';
        } else {
            return '#FEE23880';
        }
    }

    createBlobs(maker) {
        let blobs = [];
        let i = 0;
        for (i; i < numBlobs*3; i++) {
            let size = getRandomInt(300,700);
            const options1 = {
                size: size,
                complexity: getRandomArbitrary(0.5,1),
                contrast: getRandomArbitrary(0.4,0.9),
                seed: Math.random()*100,
                color: '#FFF'
            }
            const options2 = {
                size: size - 50,
                complexity: getRandomArbitrary(0.5,1),
                contrast: getRandomArbitrary(0.4,0.6),
                seed: Math.random()*100,
                color: '#FFF'
            }
            const blob1 = maker(options1);
            const blob1path = blob1.substring(
                blob1.lastIndexOf('d="') + 3, 
                blob1.lastIndexOf('/>') - 2
            );
            const blob2 = maker(options2);
            const blob2path = blob2.substring(
                blob2.lastIndexOf('d="') + 3, 
                blob2.lastIndexOf('/>') - 2
            );
            const blob = '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" xmlns="http://www.w3.org/2000/svg"> <g transform="rotate(16.111840262892656,199.5,199.5)"> <path stroke="none" stroke-width="0" fill="' + this.getColor(i) + '" id="shape-' + i + '" d="' + blob1path + '" /> <path stroke="none" stroke-width="0" fill="#4399de90" id="first-' + i + '" style="visibility:hidden" d="' + blob1path + '" /> <path stroke="none" stroke-width="0" fill="#4399de90" id="second-' + i + '" style="visibility:hidden" d="' + blob2path + '" /> </g> </svg> '
            blobs.push(<Blob src={blob} x={getRandomInt(-20,90)} y={getRandomInt(-20,90)} className={"blob-"+i}/>)
        }
        return blobs
    }

    render() {
        return (
        <div>
            {this.createBlobs(blobs)}
        </div>
        )
    }
}