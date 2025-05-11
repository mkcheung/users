import { render, screen } from '@testing-library/react'
import AccessibleName from './AccessibleName'
test('can select by accessible name', () => {
    render(<AccessibleName />)

    const submitButton = screen.getAllByRole('button')
})