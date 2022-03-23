import React, {useState} from 'react'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import {FeedbackyModal} from '../FeedbackyModal'
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
                {isVisible && (<button className="feedbacky__button" type="button" onClick={handleButtonClick} style={{color: props.buttonColor}}>
                    <ChatOutlinedIcon sx={{fontSize: 40}}/>
                </button>)}
            </div>
            {isModalOpen && <FeedbackyModal handleClose={handleButtonClick} {...props}/>}
        </>
    )
}

Feedbacky.propTypes = {
    applicationId: PropTypes.string,
    buttonColor: PropTypes.string,
    fontColor: PropTypes.string,
    formButtonText: PropTypes.string,
    formButtonColor: PropTypes.string,
    formButtonTextColor: PropTypes.string,
    modalBackgroundColor: PropTypes.string,
    formTitle: PropTypes.string,
    responseTitle: PropTypes.string,
    responseTitleColor: PropTypes.string,
}

Feedbacky.defaultProps = {
    applicationId: "TEST",
    buttonColor: "#f37919",
    fontColor: "#fff",
    formButtonText: "SEND",
    formButtonColor: "#f37919",
    formButtonTextColor: "black",
    modalBackgroundColor: "white",
    formTitle: "SEND YOUR FEEDBACK",
    responseTitle: "WE HAVE GOT YOUR FEEDBACK",
    responseTitleColor: "green"
}