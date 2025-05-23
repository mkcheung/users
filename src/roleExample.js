import { render, screen } from '@testing-library/react'

function RoleExample() {
    return (
        <div>
            <a href="/">Link</a>
            <button>Button</button>
            <footer>Contentinfo</footer>
            <h1>Heading</h1>
            <header>Banner</header>
            <img alt="description" /> Img
            <input type="checkbox" /> Checkbox
            <input type="number" /> Number
            <input type="radio" /> Radio
            <input type="text" /> Textbox
            <li>Listitem</li>
            <ul>Listgroup</ul>
        </div>
    )
}

export default RoleExample