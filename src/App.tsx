const Meubotao = (props : any) => {
    return (
        <button>{props.titulo}</button>
    );
}

const App = () => {
    return (
      <div>
        <h1>Bem vindo ao mundo React</h1>
        <button>eu sou um botão html</button>


        <Meubotao titulo="um" />
        <Meubotao titulo="dois" />
        <Meubotao titulo="tres" />
      </div>


    );
  }
  export default App;