import { render, screen } from '@testing-library/react'

function Wrapper(props) {
  return <p>{props.children}</p>
}

test('renders a paragraph', () => {
  render(<Wrapper>Hello</Wrapper>)
  expect(screen.getAllByText('Hello')).toEqual([])
})
