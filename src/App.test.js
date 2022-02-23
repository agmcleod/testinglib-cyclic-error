import { render, screen } from '@testing-library/react'

function Wrapper(props) {
  return props.children
}

test('renders a paragraph', () => {
  render(
    <Wrapper>
      <p>Hello</p>
    </Wrapper>
  )
  expect(screen.getAllByText('Hello')).toEqual([])
})
