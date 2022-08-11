import React from 'react'
import useEvent from '@react-hook/event'

type Item = {
  label: string
  isActive: boolean
  onClick:  () => void
}

type TabButtonProps = {
  item: Item
}

const TabButton = React.forwardRef<HTMLButtonElement, TabButtonProps>(({item}, ref) => {
  const {label, isActive, onClick} = item
  const className = React.useMemo(() => {
    const baseClasses = 'text-base py-2 w-36 rounded-lg m-0 transition-colors'
    const activeClass = 'bg-white text-teal-500'
    const inactiveClasses = 'text-gray-500 hover:bg-gray-50 focus:bg-gray-50'
    return [baseClasses, isActive ? activeClass : inactiveClasses].join(' ')
  }, [isActive])

  return (
    <button ref={ref} tabIndex={isActive ? 0 : -1} role={"tab"} aria-selected={isActive ? 'true' : 'false'} onClick={onClick} className={className}>
      {label}
    </button>
  )
})
TabButton.displayName = 'TabButton'

type Props = {
  items: Item[],
  ariaLabel: string
}

const TabSelector: React.FC<Props> = ({items, ariaLabel}) => {
  const tabButtonRefs = React.useRef<(HTMLButtonElement | null)[]>([])
  const target = React.useRef<HTMLDivElement>(null)

  useEvent(target, 'keydown', (event) => {
    if (!['ArrowRight', 'ArrowLeft'].includes(event.key)) {
      return
    }

    const currentFocusingTabIndex = tabButtonRefs.current.findIndex(tab => document.activeElement?.isEqualNode(tab))

    if (currentFocusingTabIndex < 0) {
      // ないとは思うが
      return
    }

    if (event.key === 'ArrowRight') {
      if (currentFocusingTabIndex === tabButtonRefs.current.length - 1) {
        tabButtonRefs.current[0]?.focus()
      } else {
        tabButtonRefs.current[currentFocusingTabIndex + 1]?.focus()
      }
    } else if (event.key === 'ArrowLeft')  {
      if (currentFocusingTabIndex === 0) {
        tabButtonRefs.current[tabButtonRefs.current.length - 1]?.focus()
      } else {
        tabButtonRefs.current[currentFocusingTabIndex - 1]?.focus()
      }
    }
  })

  return (
    <div ref={target} role={"tablist"} aria-label={ariaLabel} className={'flex flex-row gap-1 bg-gray-100 p-1 rounded-lg max-w-fit min-w-[96]'}>
      {items.map((item, i) => (
        <TabButton ref={(ref) => {tabButtonRefs.current[i] = ref}} key={i} item={item} />
      ))}
    </div>
  )
}

export default TabSelector
