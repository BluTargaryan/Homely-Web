
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import shape from '../media/Ellipse 84.png'
import dots from '../media/dots2.png'
import app from "../media/App Store.png"
import play from "../media/Play Store.png"
import vector from '../media/Vector 335.png'
import vector2 from '../media/Vector 336.png'
import stepdot from '../media/stepdot.png'
import city1 from '../media/alice-RBfacFpqDXc-unsplash.jpg'
import city2 from '../media/dennis-savenko-us8qgV5jhks-unsplash.jpg'
import city3 from '../media/maayan-nemanov-rZgqDdxiOAk-unsplash.jpg'
import city4 from '../media/pat-whelen-r5iYkdeear0-unsplash.jpg'

const Starting = () =>{
return(
   <StyledStarting>
<img src={dots} alt="dots" id="dots"/>
<img src={shape} alt="shape" id="shape"/>
<div className="works">
<div className="heading">
<div className="header">
<h3>How it works</h3>
<h1>Don’t Know How
To Get Started?</h1>
<p>Follow the steps shown below to proceed to the mobile application.</p>
</div>
<div className="links">
<img src={app} alt="App Store" />
<img src={play} alt="Play Store" />
</div>
</div>
<div className="path">
<img src={vector} alt="spine" />
<img id="spine2" src={vector2} alt="spine 2" />
<div className="step">
<div className="holder">
<img src={stepdot} alt="Step dot" id="stepdot"/>
<h1>1</h1>
<div className="step-txt">
<h4>Download & Register</h4>
<p>Click on the download button to take you to your store. Download the app and register to continue.</p>
</div>
</div>
</div>
<div className="step" id="Step-2">
<div className="holder">
<img src={stepdot} alt="Step dot" id="stepdot"/>
<h1>2</h1>
<div className="step-txt">
<h4>Explore & Make your Choice</h4>
<p>Search through our inventory and to pick the perfect home for you.</p>
</div>
</div>
</div>
<div className="step" id="Step-3">
<div className="holder">
<img src={stepdot} alt="Step dot" id="stepdot"/>
<h1>3</h1>
<div className="step-txt">
<h4>Contact Agent</h4>
<p>Once you’ve seen the house or property you like, all you have to do is click the contact agent button.</p>
</div>
</div>
</div>
</div>
</div>
<div className="finder">
    <h1>Find Top Houses & Properties in <span>All Cities</span></h1>

    <div className="locations">
<div className="container"><div style={{background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url(${city1})`}}><span>Enugu</span></div></div>
<div className="container"><div style={{background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url(${city2})`}}><span>Abuja</span></div></div>
<div className="container"><div style={{background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url(${city3})`}}><span>Lagos</span></div></div>
<div className="container"><div style={{background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url(${city4})`}}><span>Paris</span></div></div>


    </div>
</div>
   </StyledStarting>
) 
}

const StyledStarting= styled(motion.div)`
width:100% ;
height:1486px ;
position:relative ;
display:flex ;
flex-direction:column ;
align-items:center ;

#dots{
    position:absolute ;
    right:0 ;
    top:0 ;
    height:15% ;
    width:auto ;
}
#shape{
    position:absolute ;
    transform: translate(0, -50%);
    top:50%;
    left:0 ;
}

.works{
    width:80% ;
    height:600px ;
    margin-top:120px ;
    position:relative ;

    .heading{
        width:30% ;
        height: 265px;
        display:flex ;
            flex-direction:column ;
            justify-content:space-between ;

        .header{
            height:70% ;
            width: 100%;
            display:flex ;
            flex-direction:column ;
            justify-content:space-between ;

            h3{
                font-weight: 600;
font-size: 14px;
line-height: 21px;
/* identical to box height */

text-transform: uppercase;

/* Extra */

color: #9966CC;
            }

            h1{
                font-family: 'Manrope', sans-serif;
                font-weight: 800;
font-size: 40px;
line-height: 48px;
color: #000000;
            }

            p{
                font-weight: 400;
font-size: 16px;
line-height: 140%;
letter-spacing: 0.1px;
color: rgba(17, 17, 21, 0.4);
            }
        }

        .links{
            width:90% ;
            height:auto ;
            display:flex ;
            justify-content:space-between ;

            img{
               width:45% ;
               height:auto ;
               cursor: pointer;
    &:hover{
         filter:drop-shadow(1px 0px 5px rgba(0, 0, 0, 0.685)) ;
      }
            }
        }
    }
    .path{
        pointer-events:none;
        width:100% ;
        height: 584px;
        position:absolute ;
top: 3%;

img{
    width:80% ;
    position:absolute ;
    left:0 ;
    top:20% ;
    z-index:1 ;
    
}
#spine2{
    display:none ;
}
.step{
    pointer-events:all;
    width:25% ;
    height: 204px;
    position:absolute ;
    bottom:0 ;
    left:10%;
    
   

.holder{
    position:relative ;
    width:100% ;
    height: 100%;
    cursor:default ;
    

    &:hover{
        h1{
            opacity:1 ;
            color:#9966CC ;
        }
        .step-txt{
         p{
            color: rgba(17, 17, 21, 0.801); ;
         }
        }
    }

    #stepdot{
    position:absolute ;
    top:5% ;
    left:0 ;
    width:20% ;
}
h1{
    position:absolute ;
    right:5% ;  
    top:0 ;
    font-weight:900 ;
    font-size: 204px;
line-height: 204px;
color: #000000;
opacity: 0.05;
transition:.2s ease-in ;
}
.step-txt{
    position:absolute ;
    bottom:0 ;
    height:50% ;
    width:100% ;
    display:flex ;
    flex-direction:column ;

    h4{
        font-weight: 600;
font-size: 16px;
line-height: 30px;
    }
    p{
        font-weight: 400;
font-size: 16px;
line-height: 140%;
transition:.2s ease-in ;
/* or 22px */

letter-spacing: 0.1px;

/* Web grey */

color: rgba(17, 17, 21, 0.4);
    }
}
}


}

#Step-2{
    position:absolute ;
    left:40% ;
    top:50% ;
}

#Step-3{
    position:absolute ;
    top:15% ;
    left:70% ;
}

    }
}

.finder{
    width:80% ;
    height:526px ;
    margin-top:120px ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    justify-content:space-between ;

    h1{
        font-weight: 600;
font-size: 40px;
line-height: 150%;
        span{
        color: #9966CC;
    }
    }
    
.locations{
    height: 394px;
    width:100% ;
    display:flex ;
    justify-content:space-between ;

    .container{
        width:22% ;
        height:100% ;
        border-radius:24px ;
        overflow:hidden ;
        div{
        width:100% ;
        height:100% ;
        background-size:cover !important;
        background-position:center ;
        position:relative ;
        transition:.1s ease-in ;
        
        
        &:hover{
            transform:scale(1.2) ;
            

            span{
                display:none ;
            }
        }
       
        span{
        position:absolute ;
        left:24px ;
        bottom:20px ;
        color:white ;
        font-weight: 400;
font-size: 22px;
line-height: 150%;
        }
    }
    }

    
}


}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 480px) {
height: 1750px;

#dots{
    display:none ;
}

#shape{
    height: 30%;
    top:25% ;
    
}

.works{
    height: auto;
    width:90% ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    
    

    .heading{
        height: 120px;
        width:100% ;
        align-items:center ;

        .header{
            justify-content:space-between ;
            align-items:center ;
            height: 300px;
            h3{
                font-size:12px ;
                text-align:center ;
            }
            h1{
                font-size:20px ;
                line-height: 17px;
                padding-top:12px ;
                text-align:center ;
            }
            p{
                padding-top:8px ;
                font-size:14px ;
                text-align:center ;
            }
        }

        .links{
            width:70% ;
            margin-top:20px ;
        }
    }

    .path{
        height: 400px;
        position:relative ;
        margin:0 auto ;
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        justify-content:space-around ;
        
        img{
            display:none ;
        }

        .step,#Step-2,#Step-3{
            height: 20%;
            width:90% ;
            position:initial ;

            .holder{
                h1{
                    line-height:initial ;
                    font-size:100px ;
                }

                .step-txt{
                    height:70% ;
                    h4{
                        line-height:initial ;
                    font-size:20px ;
                }
                p{
                    line-height:initial ;
                    font-size:15px ;
                }
                }
            }
        }
    }
}

.finder{
    height:auto ;

    h1{
        font-size:28px ;
        text-align:center ;
    }
    .locations{
        margin-top:20px ;
        height: 800px;
        flex-direction:column ;
        justify-content:space-around ;

        .container{
            width: 100%;
            height: 22%;

            div{
            
            background-position:center center !important ;

            span{
                font-size: 20px;
            }
        }
        }
        
    }
}
}

@media only screen and (min-width: 481px) and (max-width: 768px){
    height: 1850px;

#dots{
    display:none ;
}

#shape{
    height: 30%;
    top:25% ;
    
}

.works{
    margin-top:50px ;
    height: auto;
    width:90% ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    
    

    .heading{
        height: 120px;
        width:100% ;
        align-items:center ;

        .header{
            justify-content:space-between ;
            align-items:center ;
            height: 400px;
            h3{
                font-size:16px ;
                text-align:center ;
            }
            h1{
                font-size:24px ;
                line-height: 17px;
                padding-top:12px ;
                text-align:center ;
            }
            p{
                padding-top:8px ;
                font-size:16px ;
                text-align:center ;
            }
        }

        .links{
            width:45% ;
            margin-top:20px ;
        }
    }

    .path{
        height: 300px;
        position:relative ;
        margin-top:50px !important;
        margin:0 auto ;
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        justify-content:space-around ;
        
        img{
            display:none ;
        }

        .step,#Step-2,#Step-3{
            height: 20%;
            width:90% ;
            position:initial ;

            .holder{
                h1{
                    line-height:initial ;
                    font-size:100px ;
                }

                .step-txt{
                    height:70% ;
                    h4{
                        line-height:initial ;
                    font-size:20px ;
                }
                p{
                    line-height:initial ;
                    font-size:15px ;
                }
                }
            }
        }
    }
}

.finder{
    height:auto ;

    h1{
        font-size:28px ;
        text-align:center ;
    }
    .locations{
        margin-top:20px ;
        height: 1100px;
        flex-direction:column ;
        justify-content:space-around ;

        .container{
            width: 100%;
            height: 22%;

            div{
            
            background-position:center center !important ;

            span{
                font-size: 20px;
            }
        }
        }

        
    }
}
}

@media only screen and (min-width: 769px) and (max-width: 1200px){
    .works{
        .heading{
            width:40% ;
            .header{
                .links{
                    width: 100%;
                }
            }
        }
        .path{
            top:8% ;
            .step{
                bottom:20% ;
            }
            #Step-2{
                top:35% ;
            }
        }
    }
    .finder{
        width: 90%;
        h1{
            text-align:center ;
        }
        .locations{
            .container{
                width:24% ;
            }
        }
    }
}
`

export default Starting;