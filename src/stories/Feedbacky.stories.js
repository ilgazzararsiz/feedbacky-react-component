import React from 'react'
import {storiesOf} from '@storybook/react'
import {Feedbacky} from '../components/Feedbacky'

const stories = storiesOf('App Test', module);
const props = {
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

stories.add('App', () => {
    return (
        <Feedbacky {...props}/>
    )
})