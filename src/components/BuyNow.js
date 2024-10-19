export default function BuyNow({ video, setBoughtVideo, toggleBoughtOverlay }) {
    const buyVideo = async (e) => {
        setBoughtVideo(video);
        toggleBoughtOverlay(e);
    }
    return (
        <div className="buy-now-container">
            <span className="thumbnail buy-now" alt={video.code} style={{ backgroundImage: `url(${video.thumbnail})` }}></span>
            <div className="video-info">
                <span className="video-title bold">
                    {video.title}
                </span>
                <span className="video-keywords">
                    <span className="video-keywords-title">Video Keywords</span>
                    <span className="video-keywords-text">
                        {video?.keywords?.map((kw, i) => <span key={i}>{kw}</span>)}
                    </span>
                </span>
                <span className="video-meta-container">
                    <span className="video-meta">
                        <span className="bold">Frame rate: </span>
                        <span>{video.framerate}</span>
                    </span>
                    <span className="video-meta">
                        <span className="bold">Codec: </span>
                        <span>{video.codec}</span>
                    </span>
                </span>
                <span className="price-container">
                    <fieldset className="resolution-type">
                        {video?.resolution?.map(r =>
                            <span key={r.id} className="radio">
                                <span className="res-info">
                                    <input type="radio" id={r.id} name="resolution" value={r.type} />
                                    <label htmlFor={r.id}>{r.type}</label>
                                </span>
                                <span className="price bold">{r.price}</span>
                            </span>)}
                    </fieldset>
                </span>
                <span id={video.code} onClick={buyVideo} className="button buy-now bold">Buy Now</span>
                <span className="legend">Don't see what you're looking for? Just <a className="link blue" href="mailto:someemail@example.com" >email us</a> and we will do our best to get the exact footage you need.</span>
            </div>
        </div>
    )
}