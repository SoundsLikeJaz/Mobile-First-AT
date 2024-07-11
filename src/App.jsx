import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import './App.css'
import { Loading, Navbar } from './components';

const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));
const Form = lazy(() => import('./pages/Form'));
const List = lazy(() => import('./pages/List'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/form' element={<Form />} />
            <Route path='/list' element={<List />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
