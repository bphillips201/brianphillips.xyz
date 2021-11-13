import React, { useState } from 'react'
import { Theme } from '../utils/constants'

export type TThemeContext = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = React.createContext({} as TThemeContext)

export const ThemeProvider: React.FC = props => {
  const [theme, setTheme] = useState(Theme.light)

  const toggleTheme = () => {
    theme === Theme.light ? setTheme(Theme.dark) : setTheme(Theme.light)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
      {...props}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
