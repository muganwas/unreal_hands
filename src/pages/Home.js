import React, { useEffect, useState } from "react";
import Header from "../components/Header";
/** Temp thumbnails */
import phone1 from "../images/phone_1.png";
import phone2 from "../images/phone_2.png";
import phone3 from "../images/phone_3.png";
import phone4 from "../images/phone_4.png";
import phone5 from "../images/phone_5.png";
import phone6 from "../images/phone_6.png";
import phone7 from "../images/phone_7.png";
import phone8 from "../images/phone_8.png";
import phone9 from "../images/phone_9.png";

export default function Home() {
    const [videos, setVideos] = useState([]);
    const [showCartOverlay, setShowCartOverlay] = useState(false);
    const [showGITOverlay, setshowGITOverlay] = useState(false);
    const [selectedDevice, setSelectedDevice] = useState();

    const toggleCartOverlay = (e) => {
        e.preventDefault();
        if (!selectedDevice && e.target.id) {
            const device = videos.find(v => v.code === e.target.id);
            setSelectedDevice(device);
            setShowCartOverlay(true);
        }
        else {
            setSelectedDevice(null);
            setShowCartOverlay(false);
        }

    }

    const toggleGITOverlay = (e) => {
        e.preventDefault();
        setshowGITOverlay(!showGITOverlay);
    }
    useEffect(() => {
        /** fetch videos and load state */
        setVideos([
            {
                url: "#",
                thumbnail: phone1,
                code: "SGA14",
                device: "Samsung Galaxy A14"
            },
            {
                url: "#",
                thumbnail: phone2,
                code: "SGA14",
                device: "Samsung Galaxy A14"
            },
            {
                url: "#",
                thumbnail: phone3,
                code: "SGA14",
                device: "Samsung Galaxy A14"
            },
            {
                url: "#",
                thumbnail: phone4,
                code: "GP8",
                device: "Google Pixel 8"
            },
            {
                url: "#",
                thumbnail: phone5,
                code: "Ai16",
                device: "Apple iPhone 16"
            },
            {
                url: "#",
                thumbnail: phone6,
                code: "GP8",
                device: "Google Pixel 8"
            },
            {
                url: "#",
                thumbnail: phone7,
                code: "Ai16",
                device: "Apple iPhone 16"
            },
            {
                url: "#",
                thumbnail: phone8,
                code: "Ai16",
                device: "Apple iPhone 16"
            },
            {
                url: "#",
                thumbnail: phone9,
                code: "GP8",
                device: "Google Pixel 8"
            }
        ])
    }, []);

    return (
        <div className="page-container">
            <Header />
            <div className="videos-section">
                <span className="videos-title">
                    Green Screen video mock-ups
                </span>
                <div className="video-container">
                    {videos.map((vid, index) => {
                        return (
                            <div key={`v-${index}`} className="video-thumb">
                                <img alt={vid.device} src={vid.thumbnail} />
                                <span id={vid.code} onClick={toggleCartOverlay} className="button buy">
                                </span>
                            </div>
                        )
                    })}
                </div>
                {!!showCartOverlay && <div className="cart-overlay">
                    This is the cart overlay
                </div>}
                {!!showGITOverlay && <div className="git-overlay">
                    This is the git overlay
                </div>}
            </div>
            <div className="about-section">
                <div className="about-sub-section">
                    <div className="about-text">
                        <span className="about-title">
                            Green screen replacement and content integration service
                        </span>
                        <div className="about-details">
                            <span>
                                At UnrealHands, we can do more than just replace the green screen in our Google Pixel 8 video mockups. We can change:
                            </span>
                            <ul>
                                <li>age,</li>
                                <li>skin tones,</li>
                                <li>lighting,</li>
                                <li>background,</li>
                                <li>and event <span>match screen light leaks, and gesture timing</span>to fit your custom videos perfectly. </li>
                            </ul>
                            <p>
                                Say goodbye to Mocha tracking and tedious editing—just send us your content, and we'll handle the rest.
                                Get professional, <strong>ready-to-use</strong> videos in no time with our <strong>24-hour delivery</strong> (after finalizing all details)
                            </p>
                            For our most demanding clients, we also offer custom-tailored camera movements to elevate your video projects even further.
                            <p>
                            </p>
                        </div>
                    </div>
                    <div className="get-in-touch">
                        <div className="git-illustration">

                        </div>
                        <div className="git-bottom">
                            <span onClick={toggleGITOverlay} className="button git">
                                Get in touch
                            </span>
                            <span className="git-pricing">
                                <span className="git-price">$79.00</span>
                                <span className="git-price-details">Video+replacement</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}