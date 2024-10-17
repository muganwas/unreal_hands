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
                        <NavLink to={"/devices/apple-iphone-16"} className={({ isActive, isPending }) => isPending ? "pending-nav-link" : isActive ? "active-nav-link" : "nav-link"} >
                            Apple iPhone 16
                        </NavLink>
                        <NavLink to={"/devices/samsung-galaxy-a14"} className={({ isActive, isPending }) => isPending ? "pending-nav-link" : isActive ? "active-nav-link" : "nav-link"} >
                            Samsung Galaxy A14
                        </NavLink>
                        <NavLink to={"/devices/google-pixel-6"} className={({ isActive, isPending }) => isPending ? "pending-nav-link" : isActive ? "active-nav-link" : "nav-link"} >
                            Google Pixel 6
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