import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App';
import reportWebVitals from './reportWebVitals';


function render(){
  ReactDOM.render(
    <React.StrictMode>
      <App1 />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


if(!window.__POWERED_BY_QIANKUN__){
  console.log('非qiankun模式')
  render()
} else {
  console.log('qiankun模式')
  render()

}

export async function bootstrap(){

}

export async function mount(props) {
  render()
}

export async function unmount(){
  console.log('------ unmount -------->')
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
