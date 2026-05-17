import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { Solution } from './components/Solution'
import { HowItWorks } from './components/HowItWorks'
import { Services } from './components/Services'
import { ValueProposition } from './components/ValueProposition'
import { ForCoaches } from './components/ForCoaches'
import { Contact } from './components/Contact'
import { JoinCta } from './components/JoinCta'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Services />
        <ValueProposition />
        <ForCoaches />
        <Contact />
        <JoinCta />
      </main>
      <Footer />
    </>
  )
}

export default App
