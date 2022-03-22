import React, {useState} from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import './FeedbackyModal.css'

export const FeedbackyModal = (props) => {
    const [isShowResponse, setIsShowResponse] = useState(false)

    const handleButtonClose = () => {
        props.handleClose()
    }

    const handleFormSubmit = () => {
        setIsShowResponse(true)
    }

    console.log(props)
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
                                                <textarea className="textarea"/>
                                            </label>
                                        </div>
                                        <button className="send__button" type="submit">SEND</button>
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