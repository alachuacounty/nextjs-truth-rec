import css from 'styled-jsx/css'


export default css `
.content-text1{
    line-height: 2em;
}

body{
    margin: 0!important;
}
#main-section {
}
.index-main {
    grid-area: main-section;
    margin-top: 0;
    margin-bottom: 0;
    display:-webkit-box;
    display:-moz-box;
    display:-ms-flexbox;
    display:flex;
    -ms-grid-row:2;
    -ms-grid-column:1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
       -moz-box-orient: vertical;
       -moz-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    /*
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: 100%;
    grid-template-areas:
        "hero"
        "truth-rec-info"   
        "img-quote"; */
}

/***********************************/
    /*HERO SECTION SECTION 1*/    
/***********************************/
.hero {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 12% 76% 12%;
    grid-template-columns: 12% 76% 12%;
        grid-template-areas:
    ". hero-img .";
    background-color: #252525;
    max-height: 600px;
    overflow: hidden;
    width:100%;
    grid-area: hero;
    margin-left: auto;
    margin-right: auto;
}

.hero-img {
    -ms-grid-row:1;
    -ms-grid-column:2;
    width: 100%;
    grid-area:hero-img;
}
/***********************************/
     /*HERO SECTION SECTION 1*/   
/***********************************/


/***********************************/
    /*TRUTH REC SECTION SECTION 2*/   
/***********************************/

#truth-rec-info {
    display: -ms-grid;
    display: grid;
    width:100%;
    font-size: 18px;
    -ms-grid-columns: 15% 1fr 15%;
    grid-template-columns: 15% 1fr 15%;
    grid-area: truth-rec-info;
        grid-template-areas: 
    ". truth-info-head ."
    ". truth-info-text ."
    "tagline tagline tagline";
    margin-top: 50px;
}

.truth-info-head {
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    grid-area: truth-info-head;
}
.truth-info-text{
    -ms-grid-row: 2;
    -ms-grid-column: 2;
    margin-bottom: 50px;
    line-height: 2.5rem;
    padding-left: 50px;
    grid-area: truth-info-text;
}
.tagline{
    -ms-grid-row:3;
    -ms-grid-column:1;
    -ms-grid-column-span:3;
    display:-ms-grid;
    display:grid;
    -ms-grid-columns: 15% 1fr 15%;
    grid-template-columns: 15% 1fr 15%;
        grid-template-areas: 
    ". tag-text .";
    grid-area:tagline;
    color: white;
    background-color: #9F895d;
}
.explore{
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    grid-area: tag-text;
}
h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

.overlay-text p{
    text-decoration:underline;
}

/***********************************/
    /*TRUTH REC SECTION SECTION 2*/   
/***********************************/

/***********************************/
/*IMG AND QUOTE SECTION SECTION 3*/   
/***********************************/
#img-quote {
    grid-area: img-quote;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 15% 1fr 15%;
    grid-template-columns: 15% 1fr 15%;
        grid-template-areas: 
    ". images ."
    ". roosevelt-quote ."
    ". quote .";
    background: #00283C;
    color: white;  
    width:100%;
}

.images {
    -ms-grid-row:1;
    -ms-grid-column:2;
    grid-area:images;
    display: -ms-grid;
    display: grid;
    margin-top: 10%;
    grid-gap: 2%;
    -ms-grid-columns: 1fr 2% 1fr 2% 1fr;
    grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: 
    "img-left  img-center  img-right";
    padding: 0 1em;
}

.img {
    width: 100%;
}

.img-left {
    -ms-grid-row:1;
    -ms-grid-column:1;
    margin: 0;
    position: relative;
    grid-area:img-left;
}
.span-text{
    position: absolute;
    height: 100%;  
    width: 100%;   
    top: -8px;   
    left: 0;
}
.overlay-text{
    position: absolute;
    top:50%;
    left:50%;
    -webkit-transform: translateY(-50%) translateX(-50%);
            transform: translateY(-50%) translateX(-50%);
    
 }
 .overlay-text p{
    color: white;
    /*border-bottom: solid 3px #9F895D;*/
    font-size: 26px;
}

.img-center {
    -ms-grid-row:1;
    -ms-grid-column:3;
    margin: 0;
    position: relative;
    grid-area:img-center;
}

.img-right {
    -ms-grid-row:1;
    -ms-grid-column:5;
    margin: 0;
    position: relative;
    grid-area:img-right;
}

.roosevelt-quote {
    -ms-grid-row:2;
    -ms-grid-column:2;
    font-size: 18px;
    padding: 0 60px;
    grid-area:roosevelt-quote;
    line-height: 2.5em;
    margin-top: 40px;
    border-top: 1px #9F895D solid;
}

a img {
    width: 100%;
}


.quote {
    -ms-grid-row: 3;
    -ms-grid-column: 2;
    display: -ms-grid;
    display: grid;
    margin-bottom: 100px;
    color: #9F895D;
    border-bottom: 1px #9F895D solid;
    line-height: 1.8rem;
    padding: 0 60px;
    grid-area: quote;
}
.quotee{
    -ms-grid-column-align: end;
        justify-self: end;
}

/***********************************/
/*IMG AND FDR QUOTE SECTION SECTION 3*/   
/***********************************/

/***********************************/
        /*TABLET BREAKPOINT*/   
/***********************************/

@media screen and (max-width: 780px) {
    .hero { 
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
            grid-template-areas:
            "hero-img";
    }
    .images {
        display: -ms-grid;
        display: grid;
        margin-top: 50px;
        margin-bottom:50px;
        grid-gap: 5%;
        -ms-grid-columns:10% 5% 1fr 5% 10%;
        grid-template-columns:10% 1fr 10%;
        -ms-grid-rows: 1fr 5% 1fr 5% 1fr;
        grid-template-rows: 1fr 1fr 1fr;
            grid-template-areas:
        ". img-left ."
        ". img-center ."
        ". img-right .";
        padding: 0;
    }
    .hero-img {
        -ms-grid-row:1;
        -ms-grid-column:1;
    }
    .img-left {
        -ms-grid-row:1;
        -ms-grid-column:3;
    }
    .img-center {
        -ms-grid-row:3;
        -ms-grid-column:3;
    }
    .img-right {
        -ms-grid-row:5;
        -ms-grid-column:3;
    }
}
/***********************************/
        /*TABLET BREAKPOINT*/   
/***********************************/


/***********************************/
        /*MOBILE BREAKPOINT*/   
/***********************************/


@media screen and (max-width: 481px) {
    .images {
        display: -ms-grid;
        display: grid;
        margin-top: 50px;
        grid-gap: 0;
        gap: 3%;
        -ms-grid-columns: 2% 0 1fr 0 2%;
        grid-template-columns: 2% 1fr 2%;
        -ms-grid-rows: 1fr 0 1fr 0 1fr;
        grid-template-rows: repeat(3,1fr);
            grid-template-areas:
        ". img-left ."
        ". img-center ."
        ". img-right .";
        padding: 0;
    }
    .img-left {
        -ms-grid-row:1;
        -ms-grid-column:3;
    }
    .img-center {
        -ms-grid-row:3;
        -ms-grid-column:3;
    }
    .img-right {
        -ms-grid-row:5;
        -ms-grid-column:3;
    }

}

/**************************************/
    /*MOBILE STYLES MEDIA QUERY*/   
/**************************************/
@media screen and (max-width: 480px) {
    #truth-rec-info{
        font-size: 16px;
        grid-template-columns: 1fr;
        margin-top: 3%!important;
    }

    #truth-rec-info h2{
        font-size: 34px;
        line-height: 3rem;
    }
    .truth-info-head{
        -ms-grid-row: 1;
        -ms-grid-column: 2;
        grid-area: truth-info-head;
        -ms-grid-column-align: center;
            justify-self: center;
            padding: 0 1rem;
            text-align: center;
    }
    .truth-info-text{
        -ms-grid-row: 2;
        -ms-grid-column: 2;
        grid-area: truth-info-text;
        margin: 0;
        padding: 1.5em;
        padding-top: 0;
        padding-bottom: 0;
        line-height: 2rem;
    }
    .explore{
        text-align: center;
    }
    .overlay-text{
        top: 70%;
    }
    .overlay-text p{
        font-size: 18px;
    }
    #img-quote {
        -ms-grid-columns: 5% 1fr 5%;
        grid-template-columns: 5% 1fr 5%;
    }
    .roosevelt-quote {
        padding: 1em;
        line-height: 1.5em;
        margin-top: 40px;
        border-top: 1px #9F895D solid;
    }

    .roosevelt-quote p{
        line-height:2rem;
    }
    .quotee{
        justify-self: center;
    }
}

/* THE HERO IS TEMPORARILY TURNED OFF */
.hero{
    display: none !important;
}
`