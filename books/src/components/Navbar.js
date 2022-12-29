const Navbar = ({login, signIn}) => {
    
    return (
      <nav>
        <div className="App-header">
          <h1>Boktips</h1>
          {
            !login && <button className="login-btn" onClick={signIn}>Logga in</button>
          }
          {
            login && <p>Ditt Namn</p>
          }
        </div>
      </nav>
    )
  }
  
  export default Navbar