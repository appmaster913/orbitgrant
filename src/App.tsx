import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { CandidateSupport } from './components/CandidateSupport'
import { PrivateNetwork } from './components/PrivateNetwork'
import { Qualifications } from './components/Qualifications'
import { HowItWorks } from './components/HowItWorks'
import { WhyUs } from './components/WhyUs'
import { ForCoaches } from './components/ForCoaches'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { JoinCta } from './components/JoinCta'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <CandidateSupport />
        <PrivateNetwork />
        <Qualifications />
        <HowItWorks />
        <WhyUs />
        <ForCoaches />
        <Testimonials />
        <Contact />
        <JoinCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
