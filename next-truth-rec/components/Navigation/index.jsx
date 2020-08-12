//import React from 'react';
//import "./index.css";
//import logo from "../../img/truth-logo.png";
import Link from "next/link";
import navcss from './nav-styles';

class Navigation extends React.Component{


    render(){

        return(
              <section className="nav">
                                
                    <div className="grid-item logo">
                        <Link href="/"><a><img className="logo-img" src="/img/truth-logo.png" alt="truth logo"/></a></Link>
                    </div>
                    <div className=" grid-item elements">
                        <ul className="element-children">
                            <li className="menu"> <Link href="../About"><a>About</a></Link></li>
                            <li id = "explore" className="menu"><Link href="/Resources"><a>Resources</a></Link></li>
                            <li className="menu"><Link href="/Reparations"><a>Reparations</a></Link></li>
                            <li className="menu"><Link href="/Events"><a>Events</a></Link></li>
                            <li className="menu"><Link href="/Contact"><a>Contact</a></Link></li>
                        </ul>
                    </div>
                    <div className="hamburger-menu">
                        <a href="#" className="openModalBtn">
                            <span className="bar one"></span>
                            <span className="bar two"></span>
                            <span className="bar three"></span>
                        </a>
                    </div>

                    <div className="grid-item subnav">
                        <ul className="sub-elements">
                            <li><Link href="/Resources"><a>Resources</a></Link></li>
                            <li><Link href="/Members"><a>Committees</a></Link></li>
                            <li><Link href="/Timeline"><a>Timeline</a></Link></li>
                        </ul>
                    </div>

                 <style jsx>
                    {navcss}
                </style> 


                </section>

        );
    }
}

export default Navigation;


