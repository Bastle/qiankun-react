import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route  } from "react-router-dom";
import { observer, MobXProviderContext } from 'mobx-react'
import actions from './shared/actions';
import { action } from 'mobx';



const useStores = () => {
  return React.useContext(MobXProviderContext);
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const App1 =  observer(() => {
  const [date, setDate] = useState('loading')
  const ctx = useStores()
  const changeDate = () => {
    actions.setGlobalState({date: new Date().toString()})
  }
  useEffect(() => {
    actions.offGlobalStateChange()
    actions.onGlobalStateChange((state, prevState) => {
      console.log('子应用观察者1:', state)
      setDate(state.date || '--')
    })
    return () => {
      actions.offGlobalStateChange()
    }
  }, [])
  return (
    <BrowserRouter basename='react'>
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      <Route path="/" exact render={() => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {ctx?.store?.todo?.myCount}
        </a>
        <button onClick={() => {
            ctx.store.todo.addCount()
          }}>+1</button>
          <button onClick={changeDate}> setDate </button>
          <p>{date}</p>
      </header>
    </div>
  )}></Route>
      <Route path="/about" exact render={() => <div>关于</div>}></Route>
    </BrowserRouter>
  )
})

// export default App;
export default App1;
