import css from 'styled-jsx/css'

export default css `


/* STYLES FOR 1024 AND LARGER*/
body {
    font-size: 20px;
    margin: 0;
    display: -ms-flexbox;
    -ms-flex-direction: column;
    
}

h1 {
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
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

h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
/************************************/
/********MAIN CONTENT STYLES*********/
/************************************/
#links-main{
    -ms-grid-row: 2;
    -ms-grid-column: 1;
    grid-area: main-section;
    margin-top:40px;
    margin-bottom:50px;
    display: -ms-grid;
    -ms-grid-row:2;
    -ms-grid-column:1;
    display: grid;
    -ms-grid-columns: 25% 1fr 25%;
    grid-template-columns: 25% 1fr 25%;
        grid-template-areas: ". content .";
    
}
.link-intro{
    -ms-grid-column:2;
    -ms-grid-column-span: 1;
    grid-area: content;
    grid-column:2/3;
    padding-top:3%;
}

/************************************/
/********MEDIA QUERIES*********/
/************************************/

@media screen and (max-width: 480px) {
   
    /* CSS FOR NAVBAR AND SUBNAV BAR*/

    #main {
        -ms-grid-columns: 10% 1fr 10%;
        grid-template-columns: 10% 1fr 10%;       
    }
    .main-content{
        padding: 7px;
        -ms-flex-line-pack: justify;
            align-content: justify;
    }

}







`