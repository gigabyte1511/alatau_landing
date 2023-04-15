import './App.css'
import Footer from './layouts/Footer/Footer'
import Header from './layouts/Header/Header'
import Main from './layouts/Main/Main'
import FooterImg from './Footer.png'

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Main />
        <Footer />
        <img className="image" src={FooterImg} alt="" />
      </div>
    </div>
  )
}

export default App
