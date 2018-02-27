import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Components/Calculator'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-responsive.min.css'

ReactDOM.render(<Calculator 
    url='http://localhost:3001/api/calculate'
/>, document.getElementById('root'));
