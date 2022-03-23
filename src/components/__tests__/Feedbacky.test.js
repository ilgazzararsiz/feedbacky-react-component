import React from 'react'
import {render} from "@testing-library/react";
import {Feedbacky} from '../Feedbacky'
import {FeedbackyModal} from '../FeedbackyModal'

test('Should matches Feedbacky with snapshot', () => {
    const {container} = render(<Feedbacky/>)
    expect(container.firstChild).toMatchSnapshot()
})

test('Should matches FeedbackyModal with snapshot', () => {
    const {container} = render(<Feedbacky/>)
    expect(container.firstChild).toMatchSnapshot()
})



