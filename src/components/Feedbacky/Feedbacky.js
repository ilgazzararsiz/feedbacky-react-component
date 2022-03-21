import React, {useState} from 'react'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import {FeedbackyModal} from '../FeedbackyModal'

import './Feedbacky.css'

export const Feedbacky = (props) => {
    const [isModalOpen, setModalIsOpen] = useState(false)

    const handleButtonClick = () => {
        setModalIsOpen(!isModalOpen)
    }

    return (
        <div className="feedbacky__container">
            <button className="feedbacky__button" type="button" onClick={handleButtonClick}>
                <ChatOutlinedIcon sx={{fontSize: 40}}/>
            </button>
            {isModalOpen && <FeedbackyModal handleClose={handleButtonClick}/>}
        </div>
    )
}