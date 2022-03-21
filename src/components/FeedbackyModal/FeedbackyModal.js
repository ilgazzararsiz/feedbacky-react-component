import React from 'react'

export const FeedbackyModal = (props) => {
    const handleButtonClose = () => {
        props.handleClose()
    }
    console.log(props)
    return (
        <div className="feedbacky__modal">
            <button onClick={handleButtonClose}>X</button>
            <div>
                <h1>SEND YOUR FEEDBACK</h1>
                <form>
                    <div>
                        <label>
                            <textarea/>
                        </label>
                    </div>
                    <button>SEND</button>
                </form>
            </div>
        </div>
    )
}