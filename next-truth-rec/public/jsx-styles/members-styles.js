import css from 'styled-jsx/css'

export default css `
#main-section{
    background: #fafaf9!important;
    grid-area: main-section;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 15% 1fr 15%;
    grid-template-columns: 15% 1fr 15%;
        grid-template-areas:
    ". title ."
    ". note ."
    ". main-committee ."
    ". sub-committee ."
   
}

.main{
    margin: 0px !important;
}
.title{
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    grid-area: title;
    text-transform: uppercase;
   /* border-bottom: 1px solid#00283C;*/
    margin-top: 6%;
}
.main-committee{
    -ms-grid-row: 3;
    -ms-grid-column: 2;
    grid-area: main-committee;
    -webkit-box-pack: center;
       -moz-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  
   margin-bottom: 3%;
    display:-ms-grid;
    display:grid;
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas:
    "one two three"
}
.committee-name{
    text-transform: uppercase;
    font-size: 18px;
}
.one{
    -ms-grid-row: 1;
    -ms-grid-column: 1;
    grid-area: one;
    
}
.two{
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    grid-area: two;
}
.three{
    -ms-grid-row: 1;
    -ms-grid-column: 3;
    grid-area: three;
}



.committee-info{
    -webkit-box-align: center;
       -moz-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 3%;
    margin-left: 3%;
    margin-right: 3%;
    text-align: center;
    background: white;
    border: 1px solid #e0e0d9!important;
    border-radius: 8px !important;
    -webkit-box-shadow: 3px 3px 3px lightgrey;
            box-shadow: 3px 3px 3px lightgrey;
    border-radius: 10px;
    -webkit-transition: all .1;
    transition: all .1;
    overflow: hidden;
} 
.committee-info:hover{
    -webkit-transform: scale(1.1);
            transform: scale(1.1);
}

.sub-committee {
    -ms-grid-row: 4;
    -ms-grid-column: 2;
    grid-area: sub-committee;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr)[3];
    grid-template-columns: repeat(3, 1fr);
    -ms-grid-rows: 6% 1fr 1fr 1fr 1fr;
    grid-template-rows: 6% 1fr 1fr 1fr 1fr;
        grid-template-areas:
        "sub-title sub-title sub-title"
        "first second third"
        "fourth fifth sixth"
        "seventh eighth .";
}
.sub-row{
    margin: 10% 4%;
}
.sub-title{
    -ms-grid-row: 1;
    -ms-grid-column: 1;
    -ms-grid-column-span: 3;
    grid-area: sub-title;
    /* border-bottom: 1px solid#00283C;*/
    text-transform: uppercase;
   
}

.first{
    -ms-grid-row: 2;
    -ms-grid-column: 1;
    grid-area: first;
}
.second{
    -ms-grid-row: 2;
    -ms-grid-column: 2;
    grid-area: second;
}
.third{
    -ms-grid-row: 2;
    -ms-grid-column: 3;
    grid-area: third;
}
.fourth{
    -ms-grid-row: 3;
    -ms-grid-column: 1;
    grid-area: fourth;
}
.fifth{
    -ms-grid-row: 3;
    -ms-grid-column: 2;
    grid-area: fifth;
}
.sixth{
    -ms-grid-row: 3;
    -ms-grid-column: 3;
    grid-area: sixth;
}
.seventh{
    -ms-grid-row: 4;
    -ms-grid-column: 1;
    grid-area: seventh;
}
.eighth{
    -ms-grid-row: 4;
    -ms-grid-column: 2;
    grid-area: eighth;
}
.committee-name{
    font-weight: bold;
    line-height: 1.8em;
}
.area{
    font-weight: bold;
}

.note{
    -ms-grid-row: 2;
    -ms-grid-column: 2;
    grid-area: note;
    font-size: 16px;
    margin-bottom: 5%;
    text-align: center;
    line-height: 1.5em;
}


span{
    font-weight: bold;
}

/* MEDIA QUERY FOR MOBILE */

@media (max-width:450px){
    .title{
        padding: 3%;
        line-height: 1.5em;
        text-align: center;
    }

    .title,.sub-title{
        line-height: 1.8em;
    }
    #main-section{
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
            grid-template-areas:
        "title"
        "note"
        "main-committee"
        "sub-committee"
    }

    .committee-info{
        margin: 3% 2%;
    }

    .main-committee{
        -ms-grid-row: 3;
        -ms-grid-column: 2;
        grid-area: main-committee;
        -webkit-box-pack: center;
           -moz-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
       margin-bottom: 3%;
        display:-ms-grid;
        display:grid;
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
            grid-template-areas:
        "one"
        "two"
        "three"
    }
    

    .sub-committee{
       -ms-grid-columns: 1fr;
       grid-template-columns: 1fr;
       -ms-grid-rows: 7% (1fr)[8];
       grid-template-rows: 7% repeat(8, 1fr);
           grid-template-areas:
       "sub-title"
        "first"
        "second"
        "third"
        "fourth"
        "fifth"
        "sixth"
        "seventh"
        "eighth"
    }

    .note{
        font-size: 12px;
        padding: 0 3%;
        line-height:2.5em;
    }
    .sub-title{
        text-align: center;
    }
.alachua-info{
    text-align: center;
}
    .title{
        -ms-grid-row: 1;
        -ms-grid-column: 1
    }
    .main-committee{
        -ms-grid-row: 3;
        -ms-grid-column: 1
    }

    .one{
        -ms-grid-row: 1;
        -ms-grid-column: 1
    }

    .two{
        -ms-grid-row: 2;
        -ms-grid-column: 1
    }

    .three{
        -ms-grid-row: 3;
        -ms-grid-column: 1
    }
    .sub-committee{
        -ms-grid-row: 4;
        -ms-grid-column: 1
    }
    

    .sub-title{
        -ms-grid-row: 1;
        -ms-grid-column: 1;
        -ms-grid-column-span: 1
    }
    

    .first{
        -ms-grid-row: 2;
        -ms-grid-column: 1
    }
    

    .second{
        -ms-grid-row: 3;
        -ms-grid-column: 1
    }
    

    .third{
        -ms-grid-row: 4;
        -ms-grid-column: 1
    }
    

    .fourth{
        -ms-grid-row: 5;
        -ms-grid-column: 1
    }
    

    .fifth{
        -ms-grid-row: 6;
        -ms-grid-column: 1
    }
    

    .sixth{
        -ms-grid-row: 7;
        -ms-grid-column: 1
    }
    

    .seventh{
        -ms-grid-row: 8;
        -ms-grid-column: 1
    }
    

    .eighth{
        -ms-grid-row: 9;
        -ms-grid-column: 1
    }
    .note{
        -ms-grid-row: 2;
        -ms-grid-column: 1
    }
}

/* MEDIA QUERY FOR IPAD / IPAD PRO */
@media (min-width: 451px) and (max-width:1024px){
    .title{
        padding: 3%;
        line-height: 1.5em;
        text-align: center;
    }
    #main-section{
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
            grid-template-areas:
        "title"
        "note"
        "main-committee"
        "sub-committee"
        
    }

    .committee-info{
        margin: 3% 2%;
    }

    .main-committee{
        -ms-grid-row: 3;
        -ms-grid-column: 2;
        grid-area: main-committee;
        -webkit-box-pack: center;
           -moz-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
       margin-bottom: 1%;
        display:-ms-grid;
        display:grid;
        -ms-grid-columns: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        -ms-grid-rows: (1fr)[2];
        grid-template-rows: repeat(2, 1fr);
            grid-template-areas:
        "one two"
        "three ."
    }
    

    .sub-committee{
       -ms-grid-columns: 1fr 1fr;
       grid-template-columns: 1fr 1fr;
       -ms-grid-rows: 10% 1fr 1fr 1fr 1fr;
       grid-template-rows: 10% 1fr 1fr 1fr 1fr;
           grid-template-areas:
       "sub-title sub-title"
        "first second"
        "third fourth"
        "fifth sixth"
        "seventh eighth"
    }

   
.note{
    -ms-grid-row: 2;
    -ms-grid-column: 2;
    grid-area: note;
    font-size: 16px;
    margin-bottom: 2%;
    text-align: center;
    line-height: 1.5em;
}

   
@media (max-width:450px){
    .main-committee{
            -ms-grid-row: 3;
            -ms-grid-column: 1
    }
    .main-committee{
            -ms-grid-row: 3;
            -ms-grid-column: 1
    }
    .note{
            -ms-grid-row: 2;
            -ms-grid-column: 1
    }
   
    }

   
@media (min-width: 451px) and (max-width:1024px){
    .main-committee{
            -ms-grid-row: 3;
            -ms-grid-column: 1
        
    }
    .note{
            -ms-grid-row: 2;
            -ms-grid-column: 1
        
    }
   
    }
.sub-title{
    text-align: center;
}
    .title{
        -ms-grid-row: 1;
        -ms-grid-column: 1
        
    }
    .main-committee{
        -ms-grid-row: 3;
        -ms-grid-column: 1
        
    }

    .one{
        -ms-grid-row: 1;
        -ms-grid-column: 1
    }

    .two{
        -ms-grid-row: 1;
        -ms-grid-column: 2
    }

    .three{
        -ms-grid-row: 2;
        -ms-grid-column: 1
    }
    .sub-committee{
        -ms-grid-row: 4;
        -ms-grid-column: 1
        
    }
    

    .sub-title{
        -ms-grid-row: 1;
        -ms-grid-column: 1;
        -ms-grid-column-span: 2
    }
    

    .first{
        -ms-grid-row: 2;
        -ms-grid-column: 1
    }
    

    .second{
        -ms-grid-row: 2;
        -ms-grid-column: 2
    }
    

    .third{
        -ms-grid-row: 3;
        -ms-grid-column: 1
    }
    

    .fourth{
        -ms-grid-row: 3;
        -ms-grid-column: 2
    }
    

    .fifth{
        -ms-grid-row: 4;
        -ms-grid-column: 1
    }
    

    .sixth{
        -ms-grid-row: 4;
        -ms-grid-column: 2
    }
    

    .seventh{
        -ms-grid-row: 5;
        -ms-grid-column: 1
    }
    

    .eighth{
        -ms-grid-row: 5;
        -ms-grid-column: 2
    }
    .note{
        -ms-grid-row: 2;
        -ms-grid-column: 1
        
    }
    .main-committee{
        -ms-grid-row: 3;
        -ms-grid-column: 1
        
    }
}


/* MEDIA QUERY LAPTOP */
@media (min-width: 1025px) and (max-width:1200px){

    #main-section{
      
        -ms-grid-columns: 10% 1fr 10%;
      
        grid-template-columns: 10% 1fr 10%;
        
    }
   .committee-name{
    font-weight: bold;
    font-size: 14px;
}
   
   .committee-email{
    font-size: 12px;
}

}
`