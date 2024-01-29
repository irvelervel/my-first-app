// come creo un componente React?
// possiamo creare un componente React con una funzione che ritorna del JSX

const HeaderComponent = function (propsObj) {
  // le props nei componenti a funzione le trovate sul parametro della funzione stessa
  console.log('il valore di propsObj è', propsObj)
  return (
    <header>
      {/* questo è un React Fragment */}
      <div>
        {/* un componente React può contenere solamente UN elemento JSX "padre" */}
        <h1 className={propsObj.textColor}>
          Ciao questa è la nostra prima App React!
        </h1>
      </div>
      <div>
        <h2 style={{ color: propsObj.textColor }}>{propsObj.nameToShow}</h2>
      </div>
    </header>
  )
}

export default HeaderComponent
