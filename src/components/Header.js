import React from "react";
import { Link, NavLink } from "react-router-dom";
import TextLogo from '../images/text-logo.svg';

export default function Header() {
    return (
        <div className="header-container">
            <header>
                <div className="left-header">
                    <Link to={"/"}><img className="logo" alt="unreal hands logo" src={TextLogo} /></Link>
                    <nav>
                        <NavLink to={"/devices/iphone16"} className={({ isActive, isPending }) => isPending ? "pending-nav-link" : isActive ? "active-nav-link" : "nav-link"} >
                            Apple iPhone 16
                        </NavLink>
                        <NavLink to={"/devices/galaxya15"} className={({ isActive, isPending }) => isPending ? "pending-nav-link" : isActive ? "active-nav-link" : "nav-link"} >
                            Samsung Galaxy A15
                        </NavLink>
                        <NavLink to={"/devices/google-pixel-8"} className={({ isActive, isPending }) => isPending ? "pending-nav-link" : isActive ? "active-nav-link" : "nav-link"} >
                            Google Pixel 8
                        </NavLink>
                        <NavLink to={"/devices/ipad"} className={({ isActive, isPending }) => isPending ? "pending-nav-link" : isActive ? "active-nav-link" : "nav-link"} >
                            iPad
                        </NavLink>
                    </nav>
                </div>
                <div className="alt-nav">
                    <span className="popup-link">Content Integration</span>
                    <Link className="link faq" to={"/faq"}>FAQ</Link>
                </div>
            </header>
        </div>
    )
}