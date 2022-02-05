import '../../styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <div className="container mx-auto">
      <Component {...pageProps} />
    </div>
  )
}

export default App
