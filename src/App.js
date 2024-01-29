import './App.css'
import HeaderComponent from './HeaderComponent'
// App è un COMPONENTE REACT che ci viene già fornito
// un componente react può essere anche semplicemente una funzione che ritorna una sintassi "simil-HTML"
// per convenzione tutti i componenti React cominciano con la lettera Maiuscola (PascalCase)
// il nome di questa sintassi per scrivere HTML è "JSX"

// importiamo anche il componente a classe
import ClassExampleComponent from './ClassExampleComponent'

const firstName = 'Wendy'

const App = () => {
  return (
    <div className="App">
      <HeaderComponent nameToShow="Stefano" textColor="red" />
      <main>
        <img
          src="https://placekitten.com/300"
          className="App-logo"
          alt="logo"
        />
        <p>Ciao sono {firstName}</p>
        <ClassExampleComponent textColor="red" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HeaderComponent nameToShow="Davide" textColor="blue" />
      </main>
    </div>
  )
}
// a cosa serve questo "export"? Serve a permettere l'importazione di questo componente React
// in un altro file

export default App
