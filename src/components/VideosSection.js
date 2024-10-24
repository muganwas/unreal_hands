
import { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../helpers";
import BuyNow from "../components/BuyNow";
import GetInTouch from "./GetInTouch";
import Download from "./Download";
import Loader from "../images/loading.gif";

export default function VideosSection({
    showGITOverlay,
    setShowGITOverlay,
    showCart,
    setShowCartOverlay,
    setSelectedVideo,
    showDownload,
    isLoading,
    setShowDownload,
    selectedVideo,
    boughtVideo,
    setBoughtVideo,
    videos,
    location
}) {
    const [title, setTitle] = useState('');
    const [tId, setTid] = useState();

    useEffect(() => {
        location && setTitle(capitalizeFirstLetter(location.replaceAll("-", " ")));
    }, [location]);

    const toggleCartOverlay = (e) => {
        e.preventDefault();
        const name = e.target.getAttribute('name');
        if (!selectedVideo && name) {
            const vid = videos.find(v => v.code === name);
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

    const playVideo = (e) => {
        try {
            const vid = e.target;
            vid.play();
        } catch (e) {
            console.log('play error ', e.message);
        }
    }

    const pauseVideo = (e) => {
        try {
            const vid = e.target;
            vid.pause();
        } catch (e) {
            console.log('pause error ', e.message);
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
                        <div
                            name={vid.code}
                            onClick={toggleCartOverlay}
                            key={`v-${index}`}
                            className="video-thumb button"
                            style={{ backgroundImage: `url(${vid.thumbnail})`, width: 504, height: 285 }}
                        >
                            <video name={vid.code} onMouseEnter={playVideo} onMouseLeave={pauseVideo} muted style={{ width: 504, height: 285 }} id={`video-${index}`}>
                                <source src={vid.url} type="video/mp4" />
                            </video>
                            <span name={vid.code} className="button buy"></span>
                        </div>
                    )
                })}
            </div>}
            {isLoading && <span className="loading"><img alt="videos loading" src={Loader} /></span>}
            {showCart && selectedVideo && <div className="cart-container">
                <BuyNow video={selectedVideo} setTid={setTid} setBoughtVideo={setBoughtVideo} toggleBoughtOverlay={toggleBoughtOverlay} />
            </div>}
            {showDownload && tId && boughtVideo && <div className="cart-container">
                <Download tId={tId} setTid={setTid} setBoughtVideo={setBoughtVideo} setShowCartOverlay={setShowCartOverlay} setSelectedVideo={setSelectedVideo} video={boughtVideo} />
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