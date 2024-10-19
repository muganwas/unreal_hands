import { useState } from "react";

export default function Download({ video }) {
    const [email, setEmail] = useState();
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
    return (
        <div className="buy-now-container">
            <span className="thumbnail download-now" alt={video.code} style={{ backgroundImage: `url(${video.thumbnail})` }}></span>
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