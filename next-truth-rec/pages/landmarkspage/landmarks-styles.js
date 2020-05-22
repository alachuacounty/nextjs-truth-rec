import css from 'styled-jsx/css'

export default css `
body{
    margin: 0!important;
}
h1 {
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    font-weight: bold;
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

.modal-body{
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 60% 40%;
    overflow: hidden;
    grid-template-columns: 60% 40%;
        grid-template-areas:
    "modal-description modal-landmark";
}

.modal-description{
    -ms-grid-row: 1;
    -ms-grid-column: 1;
    grid-area: modal-description;
    line-height: 2.5rem;
    padding: 0 2%;
}

.modal-content{
    width: 650px;
}

.modal-landmark{
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    grid-area: modal-landmark;
    width: 100%;
}

@media screen and (max-width:980px){
.modal-content {
  width:100%;
}

.modal-body{
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr;
    grid-template-columns:1fr;
    grid-template-rows: auto auto;
        grid-template-areas:
    "modal-description" "modal-landmark";
}



}

/************************************/
/*******MAIN GRID STARTS HERE*********/
/************************************/

#landmarks-main{
    grid-area: main-section;
    display: -ms-grid;
    display: grid;
    line-height
    2.2rem;
    margin-top:40px;
    margin-bottom:80px;
    -ms-grid-row:2;
    -ms-grid-column:1;
    -ms-grid-columns: 15% 1fr 15%;
    grid-template-columns: 15% 1fr 15%;
        grid-template-areas:
     ". title ."
     ". intro1 ."
     ". markers ."
     ". intro2 ."
     ". registered ."
     ". intro3 ."
     ". maps ."
     ". intro4 ."
     ". noted .";
}

/* CHILDREN ELEMENTS*/
.title{
-ms-grid-row: 1;
-ms-grid-column: 2;
/*     grid-column: 2/3;
    -ms-grid-column: 2; */
    grid-area: title;
}
.first-intro{
-ms-grid-row: 2;
-ms-grid-column: 2;
/*     grid-column: 2/3;
    -ms-grid-column: 2; */
    grid-area: intro1;
}

.markers{
    -ms-grid-row: 3;
    -ms-grid-column: 2;
    grid-area: markers;
}
.markers, .register-sites, .noteworthy-locations, .map{
/*     display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 23%));
    grid-column: 2/3;
    grid-gap: 20px;
    display: -ms-grid;
    -ms-grid-column:repeat(auto-fit, minmax(180px, 23%)) ;
    -ms-grid-column: 2; */
    display:-webkit-box;
    display:-moz-box;
    display:-ms-flexbox;
    display:flex;
    -ms-flex-wrap:wrap;
        flex-wrap:wrap;
    margin-top:20px;
    
}
.markers article, .register-sites article, .noteworthy-locations article, .map article{
    width:20%;
    min-width:220px;
    max-width:350px;
    margin-right:20px;
    margin-bottom:20px;
}
.second-intro{
-ms-grid-row: 4;
-ms-grid-column: 2;
/*     grid-column: 2/3;
    -ms-grid-column: 2; */
    grid-area: intro2;
}
.register-sites{
-ms-grid-row: 5;
-ms-grid-column: 2;
/*     grid-column: 2/3;
    -ms-grid-column: 2; */
    grid-area: registered;
    
}
.third-intro{
-ms-grid-row: 6;
-ms-grid-column: 2;
/*     grid-column: 2/3;;
    -ms-grid-column: 2; */
    grid-area: intro3;
}
.map{
-ms-grid-row: 7;
-ms-grid-column: 2;
/*     grid-column: 2/3;
    -ms-grid-column: 2; */
    grid-area: maps;
}
.fourth-intro{
-ms-grid-row: 8;
-ms-grid-column: 2;
/*     grid-column: 2/3;
    -ms-grid-column: 2; */
    grid-area: intro4;
}
.noteworthy-locations{
-ms-grid-row: 9;
-ms-grid-column: 2;
/*     grid-column: 2/3;
    -ms-grid-column: 2; */
    grid-area: noted;
}

/*WRAPPER FOR THE CARDS, BOX SHADOW*/
.walls-sign,
.serenola,
.quinn,
.liberty,
.shady-grove,
.map-img,
.pleasant,
.map-card,
.wallB,
.newnansvile{
    -webkit-box-shadow: 4px 4px 4px lightgrey;
            box-shadow: 4px 4px 4px lightgrey;
    border-radius: 10px;
    -webkit-transition: all .1;
    transition: all .1;
    overflow: hidden;

/************************************/
/*******MAIN GRID ENDS HERE*********/
/************************************/
}

/* THE CODE FOR THE HOVER ON CARDS*/
.walls-sign:hover{
    -webkit-transform: scale(.9);
            transform: scale(.9);
}
.serenola:hover{
    -webkit-transform: scale(.9);
            transform: scale(.9);
}
.quinn:hover{
    -webkit-transform: scale(.9);
            transform: scale(.9);
}
.liberty:hover{
    -webkit-transform: scale(.9);
            transform: scale(.9);
}
.shady-grove:hover{
    -webkit-transform: scale(.9);
            transform: scale(.9);
}
.pleasant:hover{
    -webkit-transform: scale(.9);
            transform: scale(.9);
}
.map-card:hover{
    -webkit-transform: scale(.9);
            transform: scale(.9);
}
.wallB:hover{
    -webkit-transform: scale(.9);
            transform: scale(.9);
}
.newnansvile:hover{
    -webkit-transform: scale(.9);
            transform: scale(.9);
}
.map-img:hover{
    -webkit-transform: scale(.9);
            transform: scale(.9);
}


/************************************/
/*******MEDIA QUERIES*********/
/************************************/
/*
@media screen and (max-width: 1210px){
    .menu{
        padding-right: 25px;
    }
    .sub-elements li{
        padding-right: 25px;
    }
   
}
@media screen and (max-width: 1175px){
    .menu{
        padding-right: 15px;
    }
    .sub-elements li{
        padding-right: 15px;
    }
    
}
@media screen and (max-width: 1115px){
    .menu{
        padding-right: 10px;
    }
    .sub-elements li{
        padding-right: 10px;
    }
    .elements .menu , .subnav ul li{
        font-size: 1.3rem;
    }
    
}
*/
@media screen and (max-width: 1024px) {

    #landmarks-main{
        -ms-grid-columns: 10% 1fr 10%;
        grid-template-columns: 10% 1fr 10%;
    }
}

@media screen and (max-width: 720px) {

    .markers, .register-sites, .noteworthy-locations, .map{
        -webkit-box-pack: center;
           -moz-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
    }

}
/* @media screen and (max-width: 1024px) {
    a .logo-img {
        /*! position: relative; *
        width: 100%;
        display: block;
    }
    .elements ul .menu {
        grid-column: 3/4;
        margin-top: auto;
        margin-bottom: auto;
    }
  
    .sub-elements {
        grid-template-columns: repeat(auto-fill,minmax(80px,100px));
        justify-content: center;
        grid-column: 4/5;
        margin-top: auto;
        margin-bottom: auto;
     
        /*! margin-left: 25px; *
    }
    .sub-elements li{
        justify-self: center;
    }
    .elements .menu , .subnav ul li{
        font-size: 1.1rem;
    }
} */

/* @media screen and (max-width: 920px){
    .elements .menu , .subnav ul li{
        font-size: 1rem;
    }
}
@media screen and (max-width: 880px){
.menu a , .subnav ul li{
    padding-right: 8px !important;
}
.sub-elements li{
    padding-right: 8px;
}

}
@media screen and (max-width: 840px){
    .menu a , .subnav ul li{
        padding: 5px !important;
        font-size: .8rem;
    }
    .sub-elements li{
        padding-right: 5px;
    }
    .markers{
        display: grid;
        grid-template-columns: 45% 45%;
        grid-gap: 25px;
}
.register-sites{
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 25px;
}
 .noteworthy-locations {
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 25px; 
}
.map{
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 25px; 
    
}
}
@media screen and (max-width: 780px) {
    
   
    .logo {
        grid-column: 1/2;
        grid-row: 1/2;
    }
    .elements {
        display: none;
        font-size: 24px;
        grid-column: 3/4;
        margin-top: auto;
        margin-bottom: auto;
    }
    
    .subnav {
      display: grid;
        grid-template-columns: 250px 1fr;
        grid-column: 1/4;
        background-color: black;
        grid-row: 2;
        border-top: 3px solid #9F895D;
    }
    .sub-elements {
        display:grid;
        grid-template-columns: 1fr 1fr 1fr; 
        justify-content: center;
        grid-column: 1/4;
        margin-top: auto;
        margin-bottom: auto;
       
        /*! margin-left: 25px; *
    }
    .menu a , .subnav ul li{
        padding: 8px !important;
        font-size: 1.2rem;
    }
    .sub-elements li{
        padding-right: 8px;
    }
    .hamburger-menu{
        display:block;
    }
   
#main {
    grid-area: main;
    display: grid;
    grid-template-columns: 10% 1fr 10%;
    grid-column: 1/4;
}
.markers{
        display: grid;
        grid-template-columns: 45% 45%;
        grid-gap: 25px;
}
.register-sites{
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 25px;
}
 .noteworthy-locations {
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 25px; 
}
.map{
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 25px; 
    
}
}
/* TABLET MEDIA QUERY *
@media screen and (max-width: 720px) {
 
    .menu a , .subnav ul li{
        padding: 8px !important;
        font-size: 1rem;
    }
    .sub-elements li{
        padding-right: 8px;
    }
    .markers{
        display: grid;
        grid-template-columns: 45% 45%;
    }
     .noteworthy-locations, .map{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        grid-column: 2/3;
        grid-gap: 20px;
        
    }
    .register-sites{
        display: grid;
        grid-template-columns: 45% 45%;
        grid-template: 50% 50%;
    }
}
@media screen and (max-width: 480px) {
   
 
    .logo {
        grid-column: 1/2;
        grid-row: 1/2;
    }
    
    .subnav {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column: 1/4;
        background-color: black;
        grid-row: 2;
        border-top: 3px solid #9F895D;
    }
    .markers, .register-sites, .noteworthy-locations, .map{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-column: 2/3;
        grid-gap: 20px;
        
    }
    #main{
        grid-template-columns: 8% 1fr 8%;
    }
    .walls-sign:hover{
        transform: scale(1);
    }
}
 */



/* video cards css starts here*/


@media screen and (max-width: 480px) {
#landmarks-main{
    grid-template-columns: 8% 1fr 8%;
}
}

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