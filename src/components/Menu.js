import MenuItem from './MenuItem'
import menuData from '../menuData'

function Menu({title, language}) {
  const menuItemData = menuData[language][title]

  return <MenuItem title={menuItemData.title} image={menuItemData.image} />
}

export default Menu
