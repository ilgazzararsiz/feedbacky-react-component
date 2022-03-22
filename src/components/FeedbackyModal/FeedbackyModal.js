import React, {useState} from 'react'
import axios from "axios";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {StatusCodes} from "http-status-codes";
import {feedback} from '../../services/service'

import './FeedbackyModal.css'
import * as http from "http";

export const FeedbackyModal = (props) => {
    const [isShowResponse, setIsShowResponse] = useState(false)
    const [feedbackContent, setFeedbackContent] = useState('')
    const [disableButton, setDisableButton] = useState(false)

    const handleButtonClose = () => {
        props.handleClose()
    }

    const handleChange = (event) => {
        setFeedbackContent(event.target.value)
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        setDisableButton(true)
        if (feedbackContent.length >= 3) {
            try {
                const response = await feedback.update({
                    feedbackContent
                })
                if (response.status === StatusCodes.CREATED) {
                    setIsShowResponse(true)
                    setDisableButton(false)
                }
            } catch (e) {
                alert(e)
            }
        }
    }

    return (
        <div className="feedbacky__popup">
            <div className="feedbacky__popup-modal">
                <div className="feedbacky__modal">
                    <div className="feedbacky__modal-content">
                        <div className="close__button">
                            <button onClick={handleButtonClose}>
                                <CloseOutlinedIcon/>
                            </button>
                        </div>
                        <div className="form__popup">
                            {!isShowResponse ? (
                                <>
                                    <div className="form__title">
                                        <h1>SEND YOUR FEEDBACK</h1>
                                    </div>
                                    <form className="form" onSubmit={handleFormSubmit}>
                                        <div>
                                            <label>
                                                <textarea
                                                    name="feedbackContent"
                                                    id="feedbackContent"
                                                    required
                                                    className="textarea"
                                                    onChange={handleChange}
                                                    value={feedbackContent}
                                                    maxLength={2000}/>
                                            </label>
                                        </div>
                                        <button className="send__button" type="submit" disabled={disableButton}>SEND</button>
                                    </form>
                                </>
                            ) : (<div className="response__title">
                                <h1>WE'VE GOT <br/>YOUR FEEDBACK</h1>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}