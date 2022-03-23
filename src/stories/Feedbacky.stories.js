import React from 'react'
import axios from "axios";
import { storiesOf } from '@storybook/react'
import { Feedbacky } from '../components/Feedbacky'

axios.default.baseURL = process.env.REACT_APP_API_URL

const stories = storiesOf('App Test', module);
const props = {
    applicationId: "TEST",
    buttonColor: "#f37919",
    fontColor: "#fff",
    formButtonText: "SEND",
    formButtonColor: "#f37919",
    formButtonTextColor: "#000000",
    modalBackgroundColor: "#ffffff",
    formTitle: "SEND YOUR FEEDBACK",
    responseTitle: "WE HAVE GOT YOUR FEEDBACK",
    responseTitleColor: "#1d851d"
}

stories.add('App', () => {
    return(
        <Feedbacky {...props}/>
    )
})