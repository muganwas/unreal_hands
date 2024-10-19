export default function AboutSection({ showGITOverlay, setShowGITOverlay }) {
    const toggleGITOverlay = (e) => {
        e.preventDefault();
        setShowGITOverlay(!showGITOverlay);
    }
    return (
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
                            <li>and event <span className="blue bold">match screen light leaks, and gesture timing</span> to fit your custom videos perfectly. </li>
                        </ul>
                        <p>
                            Say goodbye to Mocha tracking and tedious editing—just send us your content, and we'll handle the rest.
                            Get professional, <span className="bold">ready-to-use</span> videos in no time with our <span className="bold">24-hour delivery</span> (after finalizing all details)
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
    )
}