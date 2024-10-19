
import { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../helpers";
import BuyNow from "../components/BuyNow";
import GetInTouch from "./GetInTouch";
import Download from "./Download";

export default function VideosSection({
    showGITOverlay,
    setShowGITOverlay,
    showCart,
    setShowCartOverlay,
    setSelectedVideo,
    showDownload,
    setShowDownload,
    selectedVideo,
    boughtVideo,
    setBoughtVideo,
    videos,
    location
}) {
    const [title, setTitle] = useState('');

    useEffect(() => {
        location && setTitle(capitalizeFirstLetter(location.replaceAll("-", " ")));
    }, [location]);

    const toggleCartOverlay = (e) => {
        e.preventDefault();
        if (!selectedVideo && e.target.id) {
            const vid = videos.find(v => v.code === e.target.id);
            setSelectedVideo(vid);
            setShowCartOverlay(true);
        }
        else {
            setSelectedVideo(null);
            setShowCartOverlay(false);
        }

    }

    const toggleBoughtOverlay = (e) => {
        e.preventDefault();
        if (!boughtVideo && e.target.id) {
            const vid = videos.find(v => v.code === e.target.id);
            setBoughtVideo(vid);
            setShowCartOverlay(false);
            setShowDownload(true);
        }
        else {
            setSelectedVideo(null);
            setBoughtVideo(null);
            setShowDownload(false);
        }

    }


    return (
        <div className="videos-section">
            {!selectedVideo && !boughtVideo && <span className="videos-title">
                {title} Green Screen video mock-ups
            </span>}
            {!boughtVideo && selectedVideo && <span className="back-link">
                <span onClick={toggleCartOverlay} className="link">{`< Back to ${selectedVideo.device}`}  </span>
            </span>}
            {boughtVideo && <span className="back-link">
                <span onClick={toggleBoughtOverlay} className="link">{`< Back to ${boughtVideo.device}`}  </span>
            </span>}
            {!selectedVideo && !boughtVideo && <div className="video-container">
                {videos.map((vid, index) => {
                    return (
                        <div key={`v-${index}`} className="video-thumb">
                            <img alt={vid.device} src={vid.thumbnail} />
                            <span id={vid.code} onClick={toggleCartOverlay} className="button buy">
                            </span>
                        </div>
                    )
                })}
            </div>}
            {showCart && selectedVideo && <div className="cart-container">
                <BuyNow video={selectedVideo} setBoughtVideo={setBoughtVideo} toggleBoughtOverlay={toggleBoughtOverlay} />
            </div>}
            {boughtVideo && <div className="cart-container">
                <Download video={boughtVideo} />
            </div>}
            {showGITOverlay &&
                <div
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowGITOverlay(!showGITOverlay);
                    }}
                    className="git-overlay"
                >
                    <GetInTouch />
                </div>
            }
        </div>
    )
}