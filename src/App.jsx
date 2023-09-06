import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation';
import Main from './components/Main';
import SubContent from './components/SubContent';
import Advertisement from './components/Advertisement';
import Header from './components/Header';

console.log('rendering...')

function App() {

  return (
    <>
      <div className='appDiv'>
        app.jsx
        <Header />
        <Navigation />
        <Main>
            <SubContent/>
            <SubContent/>
            <SubContent/>
            <Advertisement/>
        </Main>
      </div>
    </>
  )
}

export default App;
