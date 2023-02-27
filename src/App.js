
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Search from "./components/search/Search"

const App = () => {
  return (
    <div>
      <Header />
      <Search />
   
      <Footer name="VaigaT" year={2023} />

    </div>
  )
}

export default App

