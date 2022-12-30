const Navbar = ({login, signIn}) => {
    
    return (
      <nav>
        <div className="navbar-container">
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