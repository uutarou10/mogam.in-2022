import TabSelector from "~/components/tabSelector";
import { render, screen, fireEvent } from '@testing-library/react'

describe('TabSelector', () => {
  test('should be able to switch tabs using arrow keys', async () => {
    render(
      <TabSelector
        items={[
          {label: 'Item1', onClick: () => {}, isActive: true},
          {label: 'Item2', onClick: () => {}, isActive: false},
        ]}
        ariaLabel={'sample'}
      />
    )

    const activeItem = await screen.findByText('Item1')
    activeItem.focus()

    fireEvent.keyDown(document.activeElement!, {key: 'ArrowRight'})
    expect(document.activeElement).not.toBeNull()
    expect(document.activeElement?.innerHTML).toEqual('Item2')

    fireEvent.keyDown(document.activeElement!, {key: 'ArrowRight'})
    expect(document.activeElement).not.toBeNull()
    expect(document.activeElement?.innerHTML).toEqual('Item1')

    fireEvent.keyDown(document.activeElement!, {key: 'ArrowLeft'})
    expect(document.activeElement).not.toBeNull()
    expect(document.activeElement?.innerHTML).toEqual('Item2')

    fireEvent.keyDown(document.activeElement!, {key: 'ArrowLeft'})
    expect(document.activeElement).not.toBeNull()
    expect(document.activeElement?.innerHTML).toEqual('Item1')
  })
})
