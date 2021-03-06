import css from 'styled-jsx/css'


export default css.global `

/***************************/
/*THESE ARE BASE STYLES FOR ALL THE SITE*/
/***************************/
body{
    display: -ms-flexbox;
    -ms-flex-direction: column;
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 16px;
    margin: 0!important;
}
p {
    display: block;
    margin-block-start: 1em !important;
    margin-block-end: 1em !important;
    margin-inline-start: 0px !important;
    margin-inline-end: 0px !important;
}

:-webkit-any(article,aside,nav,section) h1 {
    margin-block-start: 0.83em !important;
    margin-block-end: 0.83em !important;
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
#__next-prerender-indicator {
    display: none!important;
  }
.grid-container{
    width:100%;
    height:100%;
    display: -ms-flexbox;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
       -moz-box-orient: vertical;
       -moz-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
}
.main{
    -webkit-box-flex:1;
       -moz-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
}
.elements .menu , .subnav ul li{
    font-size: 1.3rem;
}
.grid-container {
    display: -ms-grid;
    display: grid;
    -ms-grid-rows: auto 1fr auto;
    grid-template-rows: auto 1fr auto;
    -ms-grid-columns:100%;
    grid-template-columns:100%;
        grid-template-areas:
        "nav"
        "main-section"
        "footer";
    min-height:100vh;
    */height:100vh; */
}

a:hover{
    color: #9F895d;
}


  /* CODE FOR HAMBURGER MENU HERE*/
#modal{
    background-color:#00283C;
    display: none;
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-rows: 10% 1fr 0.5fr;
    grid-template-rows: 10% 1fr 0.5fr; 
        grid-template-areas: 
    "close-modal"
    "nav-list"
    ".";

    position: fixed;
    top: 0;
    left:0;
    z-index:99999999;
    width: 100%;
    height: 100%;
    -webkit-animation-name: myModal;
            animation-name: myModal;
    -webkit-animation-duration: .5s;
            animation-duration: .5s;

}   

#modal.modalVisible{
    display: -ms-grid;
    display: grid;
}

.modal-children{
    -ms-grid-row: 2;
    -ms-grid-column: 1;
    grid-area: nav-list;
    display:-webkit-box;
    display:-moz-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
       -moz-box-orient: vertical;
       -moz-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    justify-items: left;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    font-size: 35px;
    list-style-type: none;

}
#closeModalBtn{
    -ms-grid-row:1;
    -ms-grid-column:1;
    color: white;
    -ms-grid-column-align: end;
        justify-self: end;
    -ms-grid-row-align: center;
        align-self: center;
    grid-area:close-modal;
}
 .bar {
    display: block;
    margin-right: 20px;
    width: 25px;
    margin-bottom: 5px;
    height: 4px;
    background-color: #fff;
    border-radius: 1px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.openModalBtn{
    display: block;
}

#closeModalBtn{
    -ms-grid-column-align: end;
        justify-self: end;
}
.on .one {
    -webkit-transform: rotate(45deg) translate(6px, 6px);
            transform: rotate(45deg) translate(6px, 6px);
}

.on .two {
    opacity: 0;
}

.on .three {
    -webkit-transform: rotate(-45deg) translate(6px, -6px);
            transform: rotate(-45deg) translate(6px, -6px);
}

/*HAMBURGER ENDS HERE */


/*1024 AND LARGER STYLES END HERE*/
@media screen and (max-width: 1340px){
    .elements .menu , .subnav ul li{
        font-size: 1.1rem;
    }
}
@media screen and (max-width: 1230px){

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
@media screen and (max-width: 1134px){

    .menu{
        padding-right: 10px;
    }
    .sub-elements li{
        padding-right: 10px;
    }
    .elements .menu , .subnav ul li{
        font-size: 1rem;
    }
}

@media screen and (max-width: 1050px) {

    a .logo-img {
        /*! position: relative; */
        width: 100%;
        display: block;
    }

    .elements ul .menu {
        margin-top: auto;
        margin-bottom: auto;
    }

    .sub-elements{
        margin-top:6px;
    }

    .sub-elements li{
        -ms-grid-column-align: center;
            justify-self: center;
    }

    .elements .menu , .subnav ul li{
        font-size: .9rem;
    }
}
@media screen and (max-width: 950px){
    .nav {
        -ms-grid-columns: 1fr 215px 5fr;
        grid-template-columns: 1fr 215px 5fr;
    }

    .elements{
        -ms-grid-columns: 0px 1fr;
        grid-template-columns: 0px 1fr;
    }

    .subnav {
        -ms-grid-columns: 1fr 215px 2% 5fr;
        grid-template-columns: 1fr 215px 2% 5fr;
    }
}
/*
@media screen and (max-width: 860px){
    .menu a , .subnav ul li{
        padding-right: 8px !important;
    }
    .sub-elements li{
        padding-right: 8px;
    }


    .nav {
        grid-template-columns: 0.5fr 215px 5fr;
    }

    .elements{
        grid-template-columns: 0px 1fr;
    }

    .subnav {
        grid-template-columns: 0.5fr 215px 2% 5fr;
    }

    .element-children {
        padding-inline-start: 10px;
    }

}
*/

/* was prev at 810px */
@media screen and (max-width: 860px) {
    

    .nav {
        -ms-grid-columns: 180px 1fr;
        grid-template-columns: 180px 1fr;
            grid-template-areas: 
        "nav-logo ham-menu"
        "sub-nav sub-nav"
        ;
    }

    .logo {
         -ms-grid-row: 1;
         -ms-grid-column: 2;

         grid-area: nav-logo;
         -ms-grid-row:1;
         -ms-grid-row-span:1;
         grid-row:1/2;
     }

    .elements {
        display: none;
    }
    .subnav {
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
            grid-template-areas: 
        " snav-ul";
    }
    .sub-elements {
        display:-webkit-box;
        display:-moz-box;
        display:-ms-flexbox;
        display:flex;
        -ms-flex-pack: distribute;
            justify-content: space-around;
        -webkit-box-pack: space-evenly;
           -moz-box-pack: space-evenly;
            -ms-flex-pack: space-evenly;
                justify-content: space-evenly;
    }
    .menu a , .subnav ul li{
        padding: 8px !important;
        font-size: 1rem;
    }
    .sub-elements li{
        padding-right: 8px;
    }
    .hamburger-menu{
        display:block;
        grid-area: ham-menu;
    }

    .logo {
        -ms-grid-row: 1;
        -ms-grid-column: 1;

    }

    .hamburger-menu {
        -ms-grid-row: 1;
        -ms-grid-column: 2;

    }

    .subnav {
        -ms-grid-row:2;
        -ms-grid-column:1;
        -ms-grid-column-span:2;
    }
    .sub-elements {
        -ms-grid-row:1;
        -ms-grid-column:1;
    }
}
@media screen and (max-width: 860px){

    .logo {
        -ms-grid-row: 1;
        -ms-grid-column: 1;

    }

    .hamburger-menu {
        -ms-grid-row: 1;
        -ms-grid-column: 2;

    }
}


/****** NAVIGATION ENDS HERE *******/

/******* MAIN GRID *******/

.main {
-ms-grid-row: 2;
-ms-grid-column: 1;
/*    display: grid;
    grid-template-columns: 16% 1fr 16%;*/
    grid-area: main-section;
    margin-top:  40px;
    margin-bottom: 50px;
}

@media screen and (max-width: 780px) {
   
}

@media screen and (max-width:480px){
    .main {
       /* grid-template-columns: 10% 1fr 10%;*/
        margin-top: 0;
        margin-bottom: 0;
    }
}

/******* MAIN GRID END *******/


.modal-open {
    overflow: hidden
}

.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    outline: 0;
    background-color: rgba(0,0,0,0.4);
}

.modal.fade .modal-dialog {
    -webkit-transition: -webkit-transform .3s ease-out;
    transition: -webkit-transform .3s ease-out;
    transition: transform .3s ease-out;
    transition: transform .3s ease-out, -webkit-transform .3s ease-out;
    -webkit-transform: translate(0, -25%);
    transform: translate(0, -25%)
}

.modal.show .modal-dialog {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
}

.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto
}

.modal-dialog {
    position: relative;
    width: auto;
    margin: 10px
}

.modal-content {
    width: 740px;
    position: relative;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #999;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 6px;
    outline: 0;
    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
    box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    /* Could be more or less, depending on screen size */
      
}

.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000
}

.modal-backdrop.fade {
    filter: alpha(opacity=0);
    opacity: 0
}

.modal-backdrop.show {
    filter: alpha(opacity=50);
    opacity: .5
}

.modal-header {
    padding: 15px;
    border-bottom: 1px solid #e5e5e5
}

.modal-header .close {
    margin-top: -2px;
    padding: 0 ;
    margin:0;
    color: #000;
    float: right;
    font-size: 28px;
    font-weight: bold;
    opacity:0.4;
}

.modal-title {
    margin: 0;
    line-height: 1.42857143;
    font-weight: bold;
}

.modal-body {
    position: relative;
    padding: 15px
}

.modal-description{
    margin-right: 2%;;
}

.modal-footer {
    padding: 15px;
    text-align: right;
    border-top: 1px solid #e5e5e5
}

.modal-footer .btn+.btn {
    margin-bottom: 0;
    margin-left: 5px
}

.modal-footer .btn-group .btn+.btn {
    margin-left: -1px
}

.modal-footer .btn-block+.btn-block {
    margin-left: 0
}

.modal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll
}

@media (min-width:768px) {
    .modal-dialog {
        width: 600px;
        margin: 30px auto
    }
    .modal-content {
        -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
        box-shadow: 0 5px 15px rgba(0, 0, 0, .5)
    }
    .modal-sm {
        width: 300px
    }
}

@media (min-width: 576px){

    .modal-dialog {
        max-width: 600px;
        margin: 30px auto;
    } 
   
}
@media (min-width:992px) {
    .modal-lg {
        width: 900px
    }
}
.close {
    float: right;
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    filter: alpha(opacity=20);
    opacity: .2
}

.close:focus,
.close:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    filter: alpha(opacity=50);
    opacity: .5
}

button.close {
    -webkit-appearance: none;
    padding: 0;
    cursor: pointer;
    background: 0 0;
    border: 0
}

.modal-open {
    overflow: hidden
}

.modal-children .menu3 , .element-children .menu:nth-of-type(3){
    display: none !important;
}

`