import React, {useState} from 'react'
import {FeedbackyModal} from '../FeedbackyModal'
import feedbackButton from "../../assets/images/feedbacky.png";
import * as PropTypes from "prop-types";


import './Feedbacky.css'

export const Feedbacky = (props) => {
    const [isModalOpen, setModalIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)

    const handleButtonClick = () => {
        setModalIsOpen(!isModalOpen)
        setIsVisible(!isVisible)
    }

    return (
        <>
            <div className="feedbacky__container">
                {isVisible && (
                    <button type="button" onClick={handleButtonClick}>
                            <img className="feedbacky__button" src={feedbackButton}/>
                    </button>
                )}
            </div>
            {isModalOpen && <FeedbackyModal handleClose={handleButtonClick} {...props}/>}
        </>
    )
}

Feedbacky.propTypes = {
    applicationId: PropTypes.string,
    fontColor: PropTypes.string,
    formButtonText: PropTypes.string,
    formButtonColor: PropTypes.string,
    formButtonTextColor: PropTypes.string,
    modalBackgroundColor: PropTypes.string,
    formTitle: PropTypes.string,
    responseTitle: PropTypes.string,
    responseTitleColor: PropTypes.string,
    feedbackyApiUrl: PropTypes.string
}

Feedbacky.defaultProps = {
    applicationId: "TEST",
    fontColor: "#fff",
    formButtonText: "SEND",
    formButtonColor: "#f37919",
    formButtonTextColor: "#000000",
    modalBackgroundColor: "#ffffff",
    formTitle: "SEND YOUR FEEDBACK",
    responseTitle: "WE HAVE GOT YOUR FEEDBACK",
    responseTitleColor: "#1d851d",
    feedbackyApiUrl: "https://feedbacky-api-go.herokuapp.com/feedback",
}