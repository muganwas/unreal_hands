// import { useState } from "react"

export default function GetInTouch() {
    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    // const [mediaFiles, setMediaFiles] = useState();
    // const [details, setDetails] = useState();
    return (
        <div className="git-form-container">
            <span>Green screen replacement service request</span>
            <span>To ensure we deliver a flawless green screen replacement service, please provide the necessary information using the form below.</span>
            <form id="git-form">
                <label htmlFor="name">
                    <span className="bold">Name</span>
                    <span className="required">*</span>:
                </label>
                <input id="name" className="git-input" />
                <label htmlFor="email">
                    <span className="bold">E-mail</span>
                    <span className="required">*</span>:
                </label>
                <input id="email" className="git-input" />
                <label htmlFor="media">
                    <span className="bold">Media files</span>
                    <span>(.jpg, .png, .mp4, .mov up to 20 Mb)</span>
                    <span className="required">*</span>:</label>
                <input id="media" type="file"></input>
                <label htmlFor="details">Let us know any specific details, like desired age, skin tone or any specific adjustments for gestures and timing:</label>
                <textarea className="git-input-area" id="details" ></textarea>
                <span>
                    <span className="required">*</span>
                    <span>- required fields.
                        After we receive your content, we’ll contact you to settle all the details. We offer 24-hour delivery once everything is confirmed!</span>
                </span>
                <span className="button git">Submit</span>
            </form>
        </div>
    )
}