import React from 'react'
import {render} from "@testing-library/react";
import {Feedbacky} from '../components/Feedbacky'

test('Should matches Feedbacky with snapshot', () => {
    const {container} = render(<Feedbacky/>)
    expect(container.firstChild).toMatchSnapshot()
})



