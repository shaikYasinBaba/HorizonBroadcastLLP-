import './MenuItem.css'

function MenuItem({title, image}) {
  return (
    <div className="menu-item">
      <div className="image-container">
        <img src={image} alt={title} className="menu-image" />
        <div className="overlay">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  )
}

export default MenuItem
