const meubotao = (props : any) => {
    return (
        <button>{props.titulo}</button>
    );
}

const App = () => {
    return (
      <div>
        <h1>Bem vindo ao mundo React</h1>
        <button>eu sou um botão html</button>


        <meubotao titulo="um"/>
        <meubotao titulo="dois"/>
        <meubotao titulo="tres"/>
      </div>


    );
  }

  export default App;