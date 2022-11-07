import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Game from './Pages/Game';
import Prize from './Pages/Prize';

function App(){

    return (
        <div className=''>
            <div className=''>
                <Router>
                    <Routes>
                        <Route path='/' element={<Game />} />
                        <Route path='/prize' element={<Prize />} />
                    </Routes>            
                </Router>
            </div>
            {/* Footer */}
        </div>
    )
}

export default App;
