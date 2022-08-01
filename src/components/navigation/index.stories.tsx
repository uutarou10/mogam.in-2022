import Navigation from ".";

export default {
  title: 'Navigation',
  component: Navigation
}

export const Primary = () => {
  return (
    <Navigation
      items={[
        {label: 'About me', linkTo: '/', isActive: true},
        {label: 'Articles', linkTo: '/', isActive: false},
        {label: 'Contact', linkTo: '/', isActive: false},
      ]}
    />
  )
}
