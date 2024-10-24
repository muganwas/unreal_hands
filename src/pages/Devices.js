import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import VideosSection from '../components/VideosSection';
import AboutSection from '../components/AboutSection';
import { ref, listAll } from "firebase/storage";
import { storage } from "../helpers/firebase";
import { formatVids } from "../helpers";


export default function Devices() {
    const location = useLocation();
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showCart, setShowCartOverlay] = useState(false);
    const [showGITOverlay, setShowGITOverlay] = useState(false);
    const [showDownload, setShowDownload] = useState(false);
    const [boughtVideo, setBoughtVideo] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState();

    useEffect(() => {
        const { pathname } = location;
        setSelectedVideo(null);
        setBoughtVideo(null);
        setVideos([]);
        /** fetch from cloud storage */
        async function fetchData() {
            setIsLoading(true);
            var vids = [];
            const code = pathname.split("/").pop();
            const device = await listAll(ref(storage, `${code}/sd/horizontal`));
            vids = await formatVids(device.items, code, 'horizontal', [code, "street"], vids);
            setVideos(vids);
            setIsLoading(false);
        }
        fetchData();
    }, [location]);

    return (
        <div className="page-container">
            <Header />
            <VideosSection
                showGITOverlay={showGITOverlay}
                setShowGITOverlay={setShowGITOverlay}
                showDownload={showDownload}
                isLoading={isLoading}
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