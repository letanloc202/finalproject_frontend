import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Information from './pages/Information'
// import Register from './pages/Register'
// import Confirm from './pages/Confirm'
// import Check from './pages/Check'
// import NotFound from './pages/NotFound';

import Main from './pages/main';



function App() {

    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<Main />} />
                    {/* <Route path="/information" element={<Information />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/confirm" element={<Confirm />} />
                    <Route path="/check" element={< Check />} />
                    <Route path="*" element={< NotFound />} /> */}
                </Routes>
            </main>
        </BrowserRouter>
    )

}

export default App;