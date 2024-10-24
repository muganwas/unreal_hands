import { useEffect, useState } from "react";

export default function Download({ video, tId, setSelectedVideo, setShowCartOverlay, setBoughtVideo, setTid }) {
    const [email, setEmail] = useState();

    useEffect(() => {
        /** check if video was bought */
        const isBought = false;
        if (!isBought) {
            setBoughtVideo(null);
            setTid(null);
            setSelectedVideo(video);
            setShowCartOverlay(true);
        } else if (tId && isBought) {

        }
    }, [setBoughtVideo, setShowCartOverlay, setSelectedVideo, setTid, tId, video]);

    const onChange = (e) => {
        setEmail(e.target.value);
    }

    const sendEmail = () => {
        /** send email */
        console.log({ email });
    }

    const downloadVideo = async () => {
        /** download from firebase */
        console.log('downloading...');
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
        <div className="buy-now-container">
            <span className="thumbnail download-now" alt={video.code} style={{ backgroundImage: `url(${video.thumbnail})` }}>
                <video className="thumbnail buy-now" name={video.code} onMouseEnter={playVideo} onMouseLeave={pauseVideo} muted>
                    <source src={video.url} type="video/mp4" />
                </video>
            </span>
            <div className="video-info">
                <span onClick={downloadVideo} className="button download-now bold">Download file</span>
                <span className="video-title">
                    <span className="bold">Thank you!</span>
                    <span>Please click the link above to download the file</span>
                </span>
                <span className="video-meta-container">
                    <span className="bold">Please note:</span>
                    <span>We do not store any used data on our website. However, if you want to get access to purchased file later, we kindly ask you to provide your email address.
                        This is only for the purpose of sending the link, and we do not retain your email after that.</span>
                </span>
                <span className="contact-container">
                    <input onChange={onChange} className="email-input" type="text" placeholder="Your e-mail address" />
                    <span onClick={sendEmail} className="button send">Send link</span>
                </span>
            </div>
        </div>
    )
}