import css from 'styled-jsx/css'

export default css `
#main-section{
    background: #fafaf9!important;
    grid-area: main-section;
    display: grid;
    grid-template-columns: 15% 1fr 15%;
    grid-template-areas:
    ". title ."
    ". note ."
    ". main-committee ."
    ". sub-committee ."
   
}
.title{
    grid-area: title;
    text-transform: uppercase;
   /* border-bottom: 1px solid#00283C;*/
    margin-top: 6%;
}
.main-committee{
    grid-area: main-committee;
    justify-content: center;
  
   margin-bottom: 3%;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
    "one two three"
}
.committee-name{
    text-transform: uppercase;
    font-size: 18px;
}
.one{
    grid-area: one;
    
}
.two{
    grid-area: two;
}
.three{
    grid-area: three;
}



.committee-info{
    align-items: center;
    padding: 3%;
    margin-left: 3%;
    margin-right: 3%;
    text-align: center;
    background: white;
    border: 1px solid #e0e0d9!important;
    border-radius: 8px !important;
    box-shadow: 3px 3px 3px lightgrey;
    border-radius: 10px;
    transition: all .1;
    overflow: hidden;
} 
.committee-info:hover{
    -webkit-transform: scale(1.1);
            transform: scale(1.1);
}

.sub-committee {
    grid-area: sub-committee;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
    grid-area: sub-title;
    /* border-bottom: 1px solid#00283C;*/
    text-transform: uppercase;
   
}

.first{
    grid-area: first;
}
.second{
    grid-area: second;
}
.third{
    grid-area: third;
}
.fourth{
    grid-area: fourth;
}
.fifth{
    grid-area: fifth;
}
.sixth{
    grid-area: sixth;
}
.seventh{
    grid-area: seventh;
}
.eighth{
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
        grid-area: main-committee;
        justify-content: center;
       margin-bottom: 3%;
        display:grid;
        grid-template-columns: 1fr;
        grid-template-areas:
        "one"
        "two"
        "three"
    }
    

    .sub-committee{
       grid-template-columns: 1fr;
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
}

/* MEDIA QUERY FOR IPAD / IPAD PRO */
@media (min-width: 451px) and (max-width:1024px){
    .title{
        padding: 3%;
        line-height: 1.5em;
        text-align: center;
    }
    #main-section{
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
        grid-area: main-committee;
        justify-content: center;
       margin-bottom: 1%;
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas:
        "one two"
        "three ."
    }
    

    .sub-committee{
       grid-template-columns: 1fr 1fr;
       grid-template-rows: 10% 1fr 1fr 1fr 1fr;
       grid-template-areas:
       "sub-title sub-title"
        "first second"
        "third fourth"
        "fifth sixth"
        "seventh eighth"
    }

   
.note{
    grid-area: note;
    font-size: 16px;
    margin-bottom: 2%;
    text-align: center;
    line-height: 1.5em;
}
.sub-title{
    text-align: center;
}
}


/* MEDIA QUERY LAPTOP */
@media (min-width: 1025px) and (max-width:1200px){

    #main-section{
      
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