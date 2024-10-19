import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
import AboutSection from "../components/AboutSection";
import VideosSection from "../components/VideosSection";

export default function Home() {
    const location = useLocation();
    const [videos, setVideos] = useState([]);
    const [showCart, setShowCartOverlay] = useState(false);
    const [showDownload, setShowDownload] = useState(false);
    const [boughtVideo, setBoughtVideo] = useState(false);
    const [showGITOverlay, setShowGITOverlay] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState();

    useEffect(() => {
        /** fetch videos and load state */
        setVideos([
            {
                url: "#",
                thumbnail: phone1,
                code: "samsung-galaxy-a14",
                device: "Samsung Galaxy A14",
                title: "40s Asian Male using using Samsung Galaxy A14 in the street",
                keywords: ["Samsung", "Asian Man", "street"],
                resolution: [{
                    id: "hd",
                    type: "HD (1920x1080px)",
                    price: "$39"
                },
                {
                    id: "4k",
                    type: "4K (3840x2160px)",
                    price: "$39"
                }],
                framerate: "24FPS",
                codec: "MOV ProRes 422"
            },
            {
                url: "#",
                thumbnail: phone2,
                code: "samsung-galaxy-a14",
                device: "Samsung Galaxy A14",
                title: "40s Asian Male using using Samsung Galaxy A14 in the street",
                keywords: ["Samsung", "Asian Man", "street"],
                resolution: [{
                    id: "hd",
                    type: "HD (1920x1080px)",
                    price: "$39"
                },
                {
                    id: "4k",
                    type: "4K (3840x2160px)",
                    price: "$39"
                }],
                framerate: "24FPS",
                codec: "MOV ProRes 422"
            },
            {
                url: "#",
                thumbnail: phone3,
                code: "samsung-galaxy-a14",
                device: "Samsung Galaxy A14",
                title: "40s Asian Male using using Samsung Galaxy A14 in the street",
                keywords: ["Samsung", "Asian Man", "street"],
                resolution: [{
                    id: "hd",
                    type: "HD (1920x1080px)",
                    price: "$39"
                },
                {
                    id: "4k",
                    type: "4K (3840x2160px)",
                    price: "$39"
                }],
                framerate: "24FPS",
                codec: "MOV ProRes 422"
            },
            {
                url: "#",
                thumbnail: phone4,
                code: "google-pixel-8",
                device: "Google Pixel 8",
                title: "40s Asian Male using using Google Pixel 8 in the street",
                keywords: ["Pixel", "Asian Man", "street"],
                resolution: [{
                    id: "hd",
                    type: "HD (1920x1080px)",
                    price: "$39"
                },
                {
                    id: "4k",
                    type: "4K (3840x2160px)",
                    price: "$39"
                }],
                framerate: "24FPS",
                codec: "MOV ProRes 422"
            },
            {
                url: "#",
                thumbnail: phone5,
                code: "apple-iphone-16",
                device: "Apple iPhone 16",
                title: "40s Asian Male using using Apple iPhone 16 in the street",
                keywords: ["iPhone", "Asian Man", "street"],
                resolution: [{
                    id: "hd",
                    type: "HD (1920x1080px)",
                    price: "$39"
                },
                {
                    id: "4k",
                    type: "4K (3840x2160px)",
                    price: "$39"
                }],
                framerate: "24FPS",
                codec: "MOV ProRes 422"
            },
            {
                url: "#",
                thumbnail: phone6,
                code: "google-pixel-8",
                device: "Google Pixel 8",
                title: "40s Asian Male using using Google Pixel 8 in the street",
                keywords: ["Pixel", "Asian Man", "street"],
                resolution: [{
                    id: "hd",
                    type: "HD (1920x1080px)",
                    price: "$39"
                },
                {
                    id: "4k",
                    type: "4K (3840x2160px)",
                    price: "$39"
                }],
                framerate: "24FPS",
                codec: "MOV ProRes 422"
            },
            {
                url: "#",
                thumbnail: phone7,
                code: "apple-iphone-16",
                device: "Apple iPhone 16",
                title: "40s Asian Male using using Apple iPhone 16 in the street",
                keywords: ["iPhone", "Asian Man", "street"],
                resolution: [{
                    id: "hd",
                    type: "HD (1920x1080px)",
                    price: "$39"
                },
                {
                    id: "4k",
                    type: "4K (3840x2160px)",
                    price: "$39"
                }],
                framerate: "24FPS",
                codec: "MOV ProRes 422"
            },
            {
                url: "#",
                thumbnail: phone8,
                code: "apple-iphone-16",
                device: "Apple iPhone 16",
                title: "40s Asian Male using using Apple iPhone 16 in the street",
                keywords: ["iPhone", "Asian Man", "street"],
                resolution: [{
                    id: "hd",
                    type: "HD (1920x1080px)",
                    price: "$39"
                },
                {
                    id: "4k",
                    type: "4K (3840x2160px)",
                    price: "$39"
                }],
                framerate: "24FPS",
                codec: "MOV ProRes 422"
            },
            {
                url: "#",
                thumbnail: phone9,
                code: "google-pixel-8",
                device: "Google Pixel 8",
                title: "40s Asian Male using using Google Pixel 8 in the street",
                keywords: ["Pixel", "Asian Man", "street"],
                resolution: [{
                    id: "hd",
                    type: "HD (1920x1080px)",
                    price: "$39"
                },
                {
                    id: "4k",
                    type: "4K (3840x2160px)",
                    price: "$39"
                }],
                framerate: "24FPS",
                codec: "MOV ProRes 422"
            }
        ])
    }, []);
    useEffect(() => {
        setSelectedVideo(null);
    }, [location]);

    return (
        <div className="page-container">
            <Header />
            <VideosSection
                showGITOverlay={showGITOverlay}
                setShowGITOverlay={setShowGITOverlay}
                showDownload={showDownload}
                setShowDownload={setShowDownload}
                selectedVideo={selectedVideo}
                setSelectedVideo={setSelectedVideo}
                setShowCartOverlay={setShowCartOverlay}
                showCart={showCart}
                boughtVideo={boughtVideo}
                setBoughtVideo={setBoughtVideo}
                videos={videos}
                location={location.pathname.split("/").pop()}
            />
            <AboutSection
                showGITOverlay={showGITOverlay}
                setShowGITOverlay={setShowGITOverlay}
            />
        </div>
    )
}