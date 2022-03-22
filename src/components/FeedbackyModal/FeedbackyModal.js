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
        <div className="feedbacky__modal">
            <button className="close__button" onClick={handleButtonClose}>
                <CloseOutlinedIcon/>
            </button>
            <div>
                <h1>SEND YOUR FEEDBACK</h1>
                {!isShowResponse ? (
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <label>
                                <textarea/>
                            </label>
                        </div>
                        <button className="send__button" type="submit">SEND</button>
                    </form>
                ) : (<div>
                    <h1>WE'VE GOT YOUR FEEDBACK</h1>
                </div>)}
            </div>
        </div>
    )
}