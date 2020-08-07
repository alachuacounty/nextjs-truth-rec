//import React from 'react';
//import "./index.css";

import Link from "next/link";
import modalStyles from "./modal-styles"

class Modal extends React.Component{

    componentDidMount() {

        var toggle = document.getElementsByClassName('openModalBtn')[0];
        var modal = document.getElementById('modal');
        function openModal() {
           
            modal.classList.toggle("modalVisible");
                     
        }
        toggle.onclick = openModal;
        var closeModalBtn = document.getElementById('closeModalBtn');
        function closeModal() {

            modal.classList.toggle("modalVisible");
        }
        closeModalBtn.onclick = closeModal;
      }


    render(){

        return(
            <div id="modal">
                <div id="closeModalBtn">         
                    <a className="on" href="#">
                        <span className="bar one"></span>
                        <span className="bar two"></span>
                        <span className="bar three"></span>
                    </a> 
                </div>
                <ul className="modal-children">
                    <li className="menu1"> <Link href="/About"><a>About</a></Link></li>
                    <li className="menu2"><Link href="/Resources"><a>Resources</a></Link></li>
                    <li className="menu4"><Link href="/Events"><a>Events</a></Link></li>
                    <li className="menu5"><Link href="/Contact"><a>Contact</a></Link></li>
                </ul> 
                <style jsx>{modalStyles}</style>
            </div>

        );
    }
}

export default Modal;

