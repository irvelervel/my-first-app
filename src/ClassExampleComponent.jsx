// questo è un componente React creato con una CLASSE
// non ci sono differenze nel funzionamento
import { Component } from 'react'
// Component è la superclasse dei Componenti a classe

class ClassExampleComponent extends Component {
  render() {
    // render() è un metodo OBBLIGATORIO nei componenti a classe!
    // dentro ritorniamo il JSX!
    return (
      <div>
        <h2 className={this.props.textColor}>Componente a CLASSE!</h2>
        {/* this.props è l'equivalente dell'oggetto propsObj che abbiamo descritto nel componente a funzione */}
      </div>
    )
  }
}

export default ClassExampleComponent
