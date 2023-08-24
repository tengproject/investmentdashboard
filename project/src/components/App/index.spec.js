import {render, screen} from '@testing-library/react'

import App from './'

test('Render App', () => {
    render(<App/>)
    const element = screen.getByTestId('Teng Portfolio Dashboard')
    expect(element).toBeInTheDocument

})