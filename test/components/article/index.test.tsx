import Article from '~/components/article'
import { render, screen } from '@testing-library/react'

describe('Article', () => {
  test('display time should be formatted correctly', async () => {
    const date = new Date('2021-12-10T12:02:04.000+09:00')
    render(<Article title={'test'} body={'test'} date={date} site={'example.com'} url={'https://example.com/sample'} />)

    const timeElement = await screen.findByTestId('time')
    expect(timeElement.innerText).toBe('Dec 10th, 2021')
  })
})

