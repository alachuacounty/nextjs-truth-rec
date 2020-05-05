import css from 'styled-jsx/css'


export default css `
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
  
/************** MAIN CONTENT STYLES ***************/
h3{
    font-size: 24px;
}
body{
    margin: 0!important;
}

/*************************************************/
         /*UNIQUE MAIN GRID STYLES START HERE*/
/************************************************/

.grid-container{
	-ms-grid-rows: auto 1fr auto;
	grid-template-rows: auto 1fr auto;
  }

#contact-main{
	display:-ms-grid;
    margin-top: 40px;
    margin-bottom: 50px;
	display:grid;
    -ms-grid-columns: 22% 1fr 22%;
    -ms-grid-row:2;
    -ms-grid-column:1;
	grid-template-columns: 22% 1fr 22%;
    grid-template-areas: ". content .";
    grid-area: main-section;

}
@media screen and (max-width:920px){
    #contact-main {
        -ms-grid-columns: 12% 1fr 12%;
        grid-template-columns: 12% 1fr 12%;
    }
}

@media screen and (max-width: 780px) {
    #contact-main {
        -ms-grid-columns: 12% 1fr 12%;
        grid-template-columns: 12% 1fr 12%;

    }
}

@media screen and (max-width:480px){
    #contact-main {
        -ms-grid-columns: 10% 1fr 10%;
        grid-template-columns: 10% 1fr 10%;
    }
}
#main-content{
    -ms-grid-row:1;
    -ms-grid-column:2;
    grid-area:content;
}

/*************************************************/
         /*UNIQUE MAIN GRID STYLES END HERE*/
/************************************************/

/*
footer {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    right:0;
    left:0;
    bottom: 0;
    position: absolute;
    width: 100%;
    background-color:#252525;
    color:white;
    height:50px;
    align-content: center;
}

.visit {
    grid-column: 2/6;
    margin: 0;
    
}

.alachua-info{
    font-size: 15px;
    color:white;
   
}
*/
h1.title {
    -ms-grid-row:1;
    -ms-grid-column:2;
    margin: auto;
    grid-area:title;
  }


/*****************************************/
        /* STYLES FOR FORM GO HERE*/
/*****************************************/


.form-style-1 {
	margin:10px auto;
	max-width: 800px;
	padding: 20px 12px 10px 20px;
	font: 13px "Lucida Sans Unicode", "Lucida Grande", sans-serif;
}
.form-style-1 li {
	padding: 0;
	display: block;
	list-style: none;
	margin: 10px 0 0 0;
}
.form-style-1 label{
	margin:0 0 3px 0;
	padding:0px;
	display:block;
	font-weight: bold;
}
.form-style-1 input[type=text], 
.form-style-1 input[type=date],
.form-style-1 input[type=datetime],
.form-style-1 input[type=number],
.form-style-1 input[type=search],
.form-style-1 input[type=time],
.form-style-1 input[type=url],
.form-style-1 input[type=email],
textarea, 
select{
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	border:1px solid #BEBEBE;
	padding: 7px;
	margin:0px;
	-webkit-transition: all 0.30s ease-in-out;
	-moz-transition: all 0.30s ease-in-out;
	-ms-transition: all 0.30s ease-in-out;
	-o-transition: all 0.30s ease-in-out;
	outline: none;	
}
.form-style-1 input[type=text]:focus, 
.form-style-1 input[type=date]:focus,
.form-style-1 input[type=datetime]:focus,
.form-style-1 input[type=number]:focus,
.form-style-1 input[type=search]:focus,
.form-style-1 input[type=time]:focus,
.form-style-1 input[type=url]:focus,
.form-style-1 input[type=email]:focus,
.form-style-1 textarea:focus, 
.form-style-1 select:focus{
	-webkit-box-shadow: 0 0 8px #88D5E9;
	box-shadow: 0 0 8px #88D5E9;
	border: 1px solid #88D5E9;
}
.form-style-1 .field-divided{
	width: 49%;
}

.form-style-1 .field-long{
	width: 100%;
}
.form-style-1 .field-select{
	width: 100%;
}
.form-style-1 .field-textarea{
	height: 100px;
}
.form-style-1 input[type=submit], .form-style-1 input[type=button]{
	background: #4B99AD;
	padding: 8px 15px 8px 15px;
	border: none;
	color: #fff;
}
.form-style-1 input[type=submit]:hover, .form-style-1 input[type=button]:hover{
	background: #4691A4;
	box-shadow:none;
	-moz-box-shadow:none;
	-webkit-box-shadow:none;
}
.form-style-1 .required{
	color:red;
}

.form-validation{
	display:none;
}


/*****************************************/
        /* STYLES FOR FORM END HERE*/
/*****************************************/
`