import css from 'styled-jsx/css'

export default css `

/* MAPPING NESTED GRIDS FOR CONTENT AREAS: VIDEO, PHOTOS AND MAP*/

/* MODAL STYLES*/

.modal-body-2{
 padding: 15px;
}
body {
    font-size: 16px;
    margin: 0;
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
/* video cards css starts here*/

#media-main{
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 15% 1fr 15%;
    grid-template-columns: 15% 1fr 15%;
        grid-template-areas: 
    ". intro ."
    ". video-title ."
    ". video-content ."
    ". photo-title ."
    ". photo-content ."
    ". map-title ."
    ". map-content .";
    grid-area: main-section;
    -ms-grid-row:2;
    -ms-grid-column:1;
}
.intro{
   -ms-grid-row: 1;
   -ms-grid-column: 2;
   /* grid-column: 2/3;*/
   grid-area: intro;
    padding-top: 3%;
}
.video-title{
    -ms-grid-row: 2;
    -ms-grid-column: 2;
    /* grid-column: 2/3; */
    padding-top: 3%;
    grid-area: video-title;
}
.video-content{
-ms-grid-row:3;
-ms-grid-column:2;
/*     display:grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-column: 2/3; */
    display:-webkit-box;
    display:-moz-box;
    display:-ms-flexbox;
    display:flex;
    -ms-flex-wrap:wrap;
        flex-wrap:wrap;
    padding-bottom: 3%;
    grid-area:video-content;
}

.video-content article{
    width: 17%;
    margin-right: 20px;
    margin-bottom: 25px;
    min-width: 175px;
    cursor: pointer;
}

.video-content article a {

    display: inline-block;
    height: 100%;

}
.video-content article .card-text{
    padding: 0 20px;
}

.photo-title{
-ms-grid-row: 4;
-ms-grid-column: 2;
/*     grid-column: 2/3; */
    grid-area: photo-title;
}
.photo-content{
-ms-grid-row: 5;
-ms-grid-column: 2;
/*     display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-column: 2/3; */
    display:-webkit-box;
    display:-moz-box;
    display:-ms-flexbox;
    display:flex;
    -ms-flex-wrap:wrap;
        flex-wrap:wrap;
    padding-bottom: 4%;
    grid-area: photo-content;
}
.photo-content article{
    width: 10%;
    margin-right: 10px;
    margin-bottom: 10px;
    min-width: 175px;
    cursor: pointer;
}
.map-title{
    -ms-grid-row: 6;
    -ms-grid-column: 2;
    /* grid-column: 2/3; */
    grid-area: map-title;
}
.map-content{
-ms-grid-row: 7;
-ms-grid-column: 2;
/*     display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 15px;
    grid-column: 2/3; */
    padding-bottom: 4%;
    display:-webkit-box;
    display:-moz-box;
    display:-ms-flexbox;
    display:flex;
    -ms-flex-wrap:wrap;
        flex-wrap:wrap;
    grid-area: map-content;
}

.map-content article{
    width: 20%;
    margin-right: 20px;
    margin-bottom: 25px;
    min-width: 175px;
    cursor: pointer;
}
.resource {
    width: 100%;
}
.shadow{
    transition:transform .3s cubic-bezier(0.4, 0, 0.2, 1),opacity 0.1s,-webkit-transform .3s cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-box-shadow: 0 0 30px rgba(0,0,0,0.1);
            box-shadow: 0 0 30px rgba(0,0,0,0.1);
    width: 100%;
}
.shadow-text {
    padding: 5px;
}
.shadow-text p{
    padding: 10px;
    margin:0;
}

.bo-diddley{
    transition:transform .3s cubic-bezier(0.4, 0, 0.2, 1),opacity 0.1s,-webkit-transform .3s cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
   -webkit-box-shadow: 0 0 30px rgba(0,0,0,0.1);
           box-shadow: 0 0 30px rgba(0,0,0,0.1);
}

.baseball{
    -webkit-box-shadow: 0 0 30px rgba(0,0,0,0.1);
            box-shadow: 0 0 30px rgba(0,0,0,0.1);
    width: 100%;
}
.verdell-washington{

    width: 100%;
}
.freedom-ride{

    width: 100%;
}
.cotton-club {

    width: 100%;
}


.thumbnail {
    width: 100%;
}
.dates {
    text-align: center;
    margin: 0;
    padding: 0;
    font-weight: bold;
}








/*MAP SECTION*/







/*CSS FOR LIGHTBOX*/
/*
.lightbox {
	
	display: none;

	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	text-align: center;
	top: 0;
	left: 0;
	background: rgba(0,0,0,0.8);
}
.lightbox img {
	
	max-width: 100%;
	max-height: 100%;
    margin-top: 200px;
    margin-bottom: auto;
}

.lightbox:target {
	
	outline: none;
	display: block;
}
*/








/* video cards css starts here*/

/* CARD BOX SHADOWS*/
.shadow-plantations-card,
.bo-diddley-card,
.baseball-card,
.verdell-washington-card,
.freedom-ride-card,
.cotton-club-card
{
    -webkit-box-shadow: 4px 4px 4px 4px lightgrey;
            box-shadow: 4px 4px 4px 4px lightgrey;
    /* border-radius: 10px; */
    -webkit-transition: all .1s;
    transition: all .1s;
    overflow: hidden;
    border-radius: 10px;
}

/* HOVER STATES FOR THE CARDS*/
.shadow-plantations-card:hover,
.bo-diddley-card:hover,
.baseball-card:hover,
.verdell-washington-card:hover,
.freedom-ride-card:hover,
.cotton-club-card:hover{
    -webkit-transform: scale(.9);
            transform: scale(.9);
}


.dates {
    text-align: center;
    margin: 0;
    padding: 0;
} 


@media screen and (max-width: 1450px){
  
    .video-content{
       /* display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 15px;
        grid-column: 2/3; */
    }
    .photo-content{
/*         display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        grid-gap: 15px;
        grid-column: 2/3;  */
    }
    .map-content{
/*         display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        grid-gap: 15px;
        grid-column: 2/3; */
    }
}




/*1024 AND LARGER STYLES END HERE*/

@media screen and (max-width: 1210px){

    .photo-content{
/*         display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        grid-gap: 15px;
        grid-column: 2/3;  */
    }
    .map-content{
   /*      display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        grid-gap: 15px;
        grid-column: 2/3; */
    }
   
}

/*DESKTOP MEDIA QUERY*/
@media screen and (max-width: 1024px) {
    #main{
        
        -ms-grid-columns: 13% 1fr 13%;
        
        grid-template-columns: 13% 1fr 13%;
        
    }


    .video-content{
/*         display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        grid-gap: 15px;
        grid-column: 2/3;  */
    }
    .photo-content{
/*         display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        grid-gap: 15px;
        grid-column: 2/3;  */
    }
    .map-content{
 /*        display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        grid-gap: 15px;
        grid-column: 2/3; */
    }

}


@media screen and (max-width: 880px){

#main{
/*     display: grid;
    grid-template-columns: 10% 1fr 10%;
    grid-area: main; */
}
}



@media screen and (max-width: 800px) {
    

#main {
/*     grid-area: main;
    display: grid;
    grid-template-columns: 5% 1fr 5%;
    grid-column: 1/4; */
    justify-items: center;
}
.video-content, .photo-content, .map-content{
    -webkit-box-pack: center;
       -moz-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}

}

@media screen and (max-width: 480px) {
    
    .video-content{
 /*        display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        grid-gap: 15px;
        grid-column: 2/3;  */
    }
    .modal-content{
        width:100%;
    }
    .modal-body-2{
        padding:0;
    }

    }

/* TABLET MEDIA QUERY */



/* video cards css starts here*/


.resource {
    width: 100%;
}

.shadow {

    -webkit-box-shadow: 3px 5px 6px #ccc;

            box-shadow: 3px 5px 6px #ccc;
    width: 100%;
}
.shadow-text {
    padding: 5px;
}

.shadow-text p {
    text-align: center;
    font-size: 14px;
}
.img-top{
   width: 100%;
}
.bo-diddley {
    -webkit-box-shadow: 3px 5px 6px #ccc;
            box-shadow: 3px 5px 6px #ccc;
    width: 100%;
}

.thumbnail {
    width: 100%;
}

.dates {
    text-align: center;
    margin: 0;
    padding: 0;
    font-weight: bold;
}


/*MAP SECTION*/


/*CSS FOR LIGHTBOX*/
.lightbox {
    /** Default lightbox to hidden */
    display: none;
    /** Position and style */
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    text-align: center;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
}

.lightbox img {
    /** Pad the lightbox image */
    max-width: 100%;
    max-height: 100%;
    margin-top: 200px;
    margin-bottom: auto;
}

.lightbox:target {
    /** Remove default browser outline */
    outline: none;

    /** Unhide lightbox **/
    display: block;
}
`