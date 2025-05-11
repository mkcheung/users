import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import UserForm from './UserForm'

test('it shows two inputs and a button', () => {
    // render the component 
    render(<UserForm />)
    // Manipulate the component or find an element in it
    const inputs = screen.getAllByRole('textbox')
    const button = screen.getByRole('button')
    // Make an assertion
    // what we expect it to do
    expect(inputs).toHaveLength(2)
    expect(button).toBeInTheDocument(1)
})

test('it calls onUserAdd when the form is submitted', () => {
    const mock = jest.fn()
    
    render(<UserForm onUserAdd={mock}/>)

    const nameInput = screen.getByRole('textbox', {
        name:/name/i
    })

    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    })

    user.click(nameInput)
    user.keyboard('jane')

    user.click(emailInput)
    user.keyboard('jane@jane.com')

    const button = screen.getByRole('button')
    user.click(button)
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith({name: 'jane', email:'jane@jane.com'})
})

test('empties the two inputs when form is submitted', () => {
    render(<UserForm onUserAdd={}/>)

    const nameInput = screen.getByRole('textbox', { name: /name/i })
    const emailInput = screen.getByRole('textbox', { name: /email/i })

    user.click(nameInput)
    user.keyboard('jane')
    user.click(emailInput)
    user.keyboard('jane@jane.com')

    user.click(button)
    expect(nameInput).toHaveValue('')
    expect(emailInput).toHaveValue('')
})