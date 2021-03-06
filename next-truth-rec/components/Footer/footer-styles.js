import css from 'styled-jsx/css'


export default css `


/************** FOOTER STYLES ************/

#footer {
    -ms-grid-row:3;
    -ms-grid-column:1;
    display: -ms-grid;
    display: grid;
    grid-area:footer;
    -ms-grid-columns: 1fr 5fr 1fr;
    grid-template-columns: 1fr 5fr 1fr;
        grid-template-areas: ". alachua-info ." ;
    width: 100%;
   
    background-color:#252525;
    color:white;
    min-height: 50px;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    bottom: 0;
}
body{
    min-height: 100%;
}

.alachua-info{
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    grid-area: alachua-info;
    font-size: 15px;
    text-align: center;
    color:white;
    -ms-grid-column-align: center;
        justify-self: center;
    -ms-grid-row-align: center;
        align-self: center;

    display:block;
    line-height: 30px;

}

`
