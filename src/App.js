import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div classname="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3>City Tricks</h3>
            </div>
            <div className="item-menu">
              <a href="/register">Crie sua conta!</a>
            </div>
          </div>
            <div className="form">
              <form>
                <h2>Entrar</h2>
                <div className="items-form">
                  <input placeholder="Login" type="text" />
                  <input placeholder="Senha" type="text" />
                  <br/>
                  <input type="submit" />


                </div>
              </form>
            </div>




        </div>
      </div>
     <div className="conteudo">
       <div className="center">
        <div className="conteudo-single">
            <h3>Venha!</h3>
            <br/>
            <p>
              O City Tricks é um site perfeito para viajantes descobrirem mais sobre locais que planejam visitar e comentar por já passaram! :)
            </p>
        </div>
       </div>
     </div>



    </div>   
  );
}

export default App;
