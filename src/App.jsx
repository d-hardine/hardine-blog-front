import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './pages/Home'
import Post from './pages/Post'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Tag from './pages/Tag'
import { useState, useEffect } from 'react'
import ThemeContext from './configs/ThemeContext'
import UserContext from './configs/UserContext'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  //user data state from here
  const [user, setUser] = useState(null)

  // Function to detect theme OS preference
  const getSystemPreference = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  }

  // State to hold the current theme
  const [theme, setTheme] = useState(getSystemPreference())

  // UseEffect to apply the theme and listen for OS changes
  useEffect(() => {
    // Apply the data-bs-theme attribute to the document's html element
    document.documentElement.setAttribute('data-bs-theme', theme)

    // Listen for changes in the OS color scheme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemChange = (e) => {
      // Update the theme state if the user hasn't manually overridden it
      // (a more complex implementation would involve local storage here)
      setTheme(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleSystemChange)

    // Cleanup the event listener on component unmount
    return () => mediaQuery.removeEventListener('change', handleSystemChange)
  }, [theme]) // Re-run if theme changes

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <UserContext.Provider value={{user, setUser}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/post/:postId' element={<Post />} />
          <Route path='/Tag/:tagName' element={<Tag />} />
        </Routes>
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
