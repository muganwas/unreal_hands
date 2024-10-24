import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import VideosSection from "../components/VideosSection";
import { ref, listAll } from "firebase/storage";
import { storage } from "../helpers/firebase";
import { formatVids } from "../helpers";

export default function Home() {
    const location = useLocation();
    const [videos, setVideos] = useState([]);
    const [showCart, setShowCartOverlay] = useState(false);
    const [showDownload, setShowDownload] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [boughtVideo, setBoughtVideo] = useState(false);
    const [showGITOverlay, setShowGITOverlay] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState();

    useEffect(() => {
        /** fetch videos and load state */
        async function fetchData() {
            setIsLoading(true);
            var vids = [];
            /** "lazy loading" */
            const galaxya15 = await listAll(ref(storage, 'galaxya15/sd/horizontal'));
            vids = await formatVids(galaxya15.items, 'galaxya15', 'horizontal', ["Samsung", "street"], vids);
            setVideos(vids);
            const iPhone16 = await listAll(ref(storage, 'iphone16/sd/horizontal'));
            vids = await formatVids(iPhone16.items, 'iphone16', 'horizontal', ["iPhone", "street"], vids);
            setVideos(vids);
            const iPad = await listAll(ref(storage, 'ipad/sd/horizontal'));
            vids = await formatVids(iPad.items, 'ipad', 'horizontal', ["iPad", "street"], vids);
            setVideos(vids);
            setIsLoading(false);
        }
        fetchData();
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
                isLoading={isLoading}
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