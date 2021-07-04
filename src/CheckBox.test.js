import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import CheckBox from './CheckBox'

test("Selecting CheckBox", () => {
    const { getByLabelText } = render(<CheckBox />)
    const checkBox = getByLabelText(/not checked/)
    fireEvent.click(checkBox)
    expect(checkBox.checked).toEqual(true)
})