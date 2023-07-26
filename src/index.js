import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log(`     ~ Welcome To Oraysa Date Finder Website ~
              run by Yanki Levine!`)
console.log(`
 Y     Y     A       A     K    K   O O O  V     V
  Y   Y     A A     A A    K   K    O   O  V     V
    Y      A   A   A   A   K K      O   O   V   V
    Y     A A A A A A A A  K   K    O   O    V V
    Y    A       A       A K    K   O O O     V

  L        E E E   V     V   III    N     N   E E E
  L        E       V     V    I     NN    N   E
  L        E E E    V   V     I     N N   N   E E E
  L        E         V V      I     N  N  N   E
  L L L    E E E      V      III    N   N N   E E E

`);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
