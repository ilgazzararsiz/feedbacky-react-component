import React, {useState} from 'react'
import closeButton from '../../assets/images/close.png'
import {feedback} from '../../services/service'

import './FeedbackyModal.css'

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
            let applicationId = props.applicationId
            let baseUrl = props.feedbackyApiUrl
            try {
                const response = await feedback.update({
                    baseUrl,
                    feedbackContent,
                    applicationId
                })
                if (response.status === 201) {
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
                                <img src={closeButton} className="close__button-image"/>
                            </button>
                        </div>
                        <div className="form__popup" style={{background: props.modalBackgroundColor}}>
                            {!isShowResponse ? (
                                <>
                                    <div className="form__title">
                                        <h1>{props.formTitle}</h1>
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
                                        <button className="send__button" type="submit" disabled={disableButton} style={{
                                            background: props.formButtonColor,
                                            color: props.formButtonTextColor
                                        }}>{props.formButtonText}</button>
                                    </form>
                                </>
                            ) : (<div className="response__title">
                                <h1>{props.responseTitle}</h1>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}