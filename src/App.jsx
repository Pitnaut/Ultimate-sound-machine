import Buttons from './components/buttons'
import './App.css'

function App() {

  return (
    <div className="main-App">
      <header className="App-header">
        <h1>Ultimate Sound Machine</h1>
      </header>
      <Buttons />
      <footer className="App-footer">
        <p>Creada por <a href="https://www.linkedin.com/in/pedro-manuel-ar%C3%A9valo-gonz%C3%A1lez-140993147/" target="_blank" rel="noopener noreferrer">Pedro Arévalo</a></p>
        <p>Código en <a href="https://github.com/Pitnaut/Ultimate-sound-machine" target="_blank" rel="noopener noreferrer"> Github</a></p>
      </footer>
    </div>
  )
}

export default App
