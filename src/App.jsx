import { Router, Route } from '@solidjs/router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Offerings from './pages/Offerings'
import About from './pages/About'
import Partners from './pages/Partners'
import Contact from './pages/Contact'

function App() {
  return (
    <Router root={(props) => <Layout>{props.children}</Layout>}>
      <Route path="/" component={Home} />
      <Route path="/offerings" component={Offerings} />
      <Route path="/about" component={About} />
      <Route path="/partners" component={Partners} />
      <Route path="/contact" component={Contact} />
    </Router>
  )
}

export default App
