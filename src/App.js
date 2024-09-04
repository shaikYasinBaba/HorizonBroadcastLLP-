import {useState} from 'react'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Settings from './components/Settings'

function App() {
  const [selectedMenu, setSelectedMenu] = useState('Home')
  const [language, setLanguage] = useState('English')

  const handleMenuClick = menu => {
    setSelectedMenu(menu)
  }

  const handleLanguageChange = newLanguage => {
    setLanguage(newLanguage)
  }

  return (
    <div className="App">
      <Navbar onMenuClick={handleMenuClick} selectedMenu={selectedMenu} />
      <Settings onLanguageChange={handleLanguageChange} />
      <div className="content">
        <Menu title={selectedMenu} language={language} />
      </div>
    </div>
  )
}

export default App
