import React, {useState} from 'react'

import Header from './components/Header'
import Routes from './components/Routes'
import Footer from './components/Footer'
require('dotenv').config()

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false)    

    return (
        <div className={darkTheme ? 'dark' : ''}>
            <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen"> 
                <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <Routes />
                <Footer />
            </div>
        </div>
    )
}

export default App
