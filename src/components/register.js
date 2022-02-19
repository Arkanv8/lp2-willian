import './register.css';

function register() {
  return (
    <div className="register">
      <div classname="main-register">
        <div className="center">
          <div className="menu-register">
            <div className="logo">
              <h3>City Tricks</h3>
            </div>
            <div className="item-menu-register">
              <a href="#/login" target="_blank">Já tenho uma conta!</a>
            </div>
          </div>
            <div className="form-register">
              <form>
                <h2>Entrar</h2>
                <div className="items-form">
                  <input placeholder="Login" type="text" />
                  <input placeholder="Email" type="text" />
                  <input placeholder="Senha" type="text" />
                  <input placeholder="Senha novamente" type="text" />
                  <br/>
                  <input type="submit" />


                </div>
              </form>
            </div>




        </div>
      </div>
    </div>   
  );
}

export default register;
