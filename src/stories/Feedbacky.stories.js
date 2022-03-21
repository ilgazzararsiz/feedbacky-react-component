import React from 'react'
import { storiesOf } from '@storybook/react'

import { Feedbacky } from '../components/Feedbacky'

const stories = storiesOf('App Test', module);

stories.add('App', () => {
    return(
        <Feedbacky/>
    )
})