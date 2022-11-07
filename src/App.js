import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Game from './Pages/Game';
import Rule from './Pages/Rule';

function App(){

    return (
        <div className=''>
            <div className=''>
                <Router>
                    <Routes>
                        <Route path='/' element={<Game />} />
                        <Route path='/rule' element={<Rule />} />
                    </Routes>            
                </Router>
            </div>
            {/* Footer */}
        </div>
    )
}

export default App;
