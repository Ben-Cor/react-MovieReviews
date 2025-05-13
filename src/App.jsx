import Header from './components/Header'
import Footer from './components/Footer'
import MoviesFilter from './components/MoviesFilter'

export default function App() {

  return (
    <>
      <Header />
      <main>
        <MoviesFilter />
      </main>
      <Footer />
    </>
  )
}