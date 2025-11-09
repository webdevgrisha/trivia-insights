import './App.css'
import { Categories } from './componnents/Categories/Categories'
import { Statistic } from './componnents/Statistic/Statistic'

function App() {
  return (
    <>
      <header>TrivialStatus</header>
      <main>
        <nav>
          <Categories />
        </nav>

        <section>
          <Statistic />
        </section>
      </main>
    </>
  )
}

export default App
