import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DashBoard from '../DashBoard'
import CssBaseline from '@mui/material/CssBaseline';

import Login from '../Login'
import News from '../News'

const App = () => {
    return (
        <BrowserRouter>
        <CssBaseline />
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/dashboard" element={<DashBoard/>}/>
                <Route path ="/news" element={<News/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App