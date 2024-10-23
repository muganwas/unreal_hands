import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import VideosSection from "../components/VideosSection";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../helpers/firebase";

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
        async function fetchData() {
            const galaxya15 = await listAll(ref(storage, 'galaxya15/sd/horizontal'));
            const vids = [];
            galaxya15.items.forEach(async item => {
                const name = item.name.split('.')[0];
                const vidURL = await getDownloadURL(ref(storage, item.fullPath));
                const thumbnailURL = await getDownloadURL(ref(storage, 'galaxya15/preview/horizontal/' + name + '.jpg'));
                vids.push({
                    url: vidURL,
                    thumbnail: thumbnailURL,
                    code: "samsung-galaxy-a15",
                    title: name,
                    orientation: "horizontal",
                    // keywords: ["Samsung", "Asian Man", "street"],
                    resolution: [{
                        id: "hd",
                        type: "HD (1920x1080px)",
                        price: "$49"
                    },
                    {
                        id: "sd",
                        type: "SD (720x480px)",
                        price: "$39"
                    },
                    {
                        id: "4k",
                        type: "4K (3840x2160px)",
                        price: "$59"
                    }],
                    framerate: "24FPS",
                    codec: "MOV ProRes 422"
                });
                //const csv = await getDownloadURL(ref(storage, 'galaxya15/csv/' + name + '.csv'));
            });
            setVideos(vids);
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