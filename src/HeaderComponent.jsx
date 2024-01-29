// come creo un componente React?
// possiamo creare un componente React con una funzione che ritorna del JSX

const HeaderComponent = function () {
  return (
    <header>
      {/* questo è un React Fragment */}
      <div>
        {/* un componente React può contenere solamente UN elemento JSX "padre" */}
        <h1>Ciao questa è la nostra prima App React!</h1>
      </div>
      <div>
        <h2>Stefano</h2>
      </div>
    </header>
  )
}

export default HeaderComponent
