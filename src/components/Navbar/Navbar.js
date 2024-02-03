import './Navbar.css'

const Navbar = () => (
    <>
<nav className = "navbar">
    <div className="navbar-container">
        <div className="logo-name-container">
            <img src = "https://res.cloudinary.com/dh9tpjqbw/image/upload/v1706639210/Screenshot_2024-01-30_235452_rvowaw.png" alt = "Raftlogo" className="logo"/>
            <h1 className='logo-heading'>Raft</h1>
        </div>
          
        <ul className="nav-menu">
          <li className="nav-item home">
              Home
          </li>
          <li className="nav-item">
              Science
          </li>
          <li className="nav-item">Platform</li>
          <li className="nav-item">
              About Us
          </li>
          <li className="nav-item">
              News
          </li>
          <li className="nav-item">
            <button type="button" className="contact-btn">
                Contact Us
            </button>
          </li>
        </ul>
      </div>
</nav>
      <hr  className="hr-line"/>
</>
)
export default Navbar