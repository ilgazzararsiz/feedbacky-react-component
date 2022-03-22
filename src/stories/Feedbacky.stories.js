import React from 'react'
import axios from "axios";
import { storiesOf } from '@storybook/react'
import { Feedbacky } from '../components/Feedbacky'

axios.default.baseURL = process.env.REACT_APP_API_URL

const stories = storiesOf('App Test', module);

stories.add('App', () => {
    return(
        <Feedbacky/>
    )
})