import './Navbar.css'

function Navbar({onMenuClick, selectedMenu}) {
  const menuItems = ['Home', 'Movies', 'TV Shows', 'Sports', 'Live']

  return (
    <nav className="navbar">
      {menuItems.map(item => (
        <button
          key={item}
          className={`nav-button ${selectedMenu === item ? 'active' : ''}`}
          type="button"
          onClick={() => onMenuClick(item)}
        >
          {item}
        </button>
      ))}
    </nav>
  )
}

export default Navbar
