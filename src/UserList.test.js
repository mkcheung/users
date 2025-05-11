import { render, screen, within } from '@testing-library/react'
import user from '@testing-library/user-event'
import UserList from './UserList'

function renderComponent(){
    const users = [
        { name: 'jane', email: 'jane@jane.com'},
        { name: 'sam', email: 'sam@same.com'}
    ]
    render(<UserList users={users}/>)
    return {
        users,
    }
}

test('render one row per user', () => {
    const { users } = renderComponent()

    // without use of container
    // screen.logTestingPlaygroundURL();
    const rows = within(screen.getByTestId('users')).getAllByRole('row')
    expect(rows).toHaveLength(2)

    // use of container
    // const { container } = render(<UserList users={users}/>)
    // eslint-disable-next-line
    // const rows = container.querySelectorAll('tbody tr')
    // expect(rows).toHaveLength(2)
})

test('render the email and name of each user', () => {
    const { users } = renderComponent()

    // screen.logTestingPlaygroundURL();
    for (let user of users){
        const name = screen.getByRole('cell', { name: user.name })
        const email = screen.getByRole('cell', { name: user.email })

        expect(name).toBeInTheDocument()
        expect(email).toBeInTheDocument()
    }
})