function Settings({onLanguageChange}) {
    const handleSelectChange = event => {
      onLanguageChange(event.target.value)
    }
  
    return (
      <div className="settings">
        <label htmlFor="language-select">Select Language: </label>
        <select id="language-select" onChange={handleSelectChange}>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Russian">Russian</option>
          <option value="Spanish">Spanish</option>
          <option value="Chinese">Chinese</option>
        </select>
      </div>
    )
  }
  
  export default Settings
  