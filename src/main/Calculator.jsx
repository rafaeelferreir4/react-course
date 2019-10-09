import React, {Component} from 'react';
import './Calculadotor.css';
import Button from '../components/Button';
import Display from '../components/Display';

export default class calculator extends Component {
    clearMemory () {
        console.log('limpa');
    }
    setOperation (operation) {
        console.log(operation);
    }
    addDigit (n) {
        console.log(n);
    }

    render () {
        const addDigit = n => this.addDigit(n);
        const setOperation = operation => this.setOperation(operation);
        return (
            <div className="calculator">
                <Display value={10000}/> 
                <Button label="AC" click={() => this.clearMemory()}/>
                <Button label="/" click={setOperation}/>
                <Button label="7"/>
                <Button label="8"/>
                <Button label="9"/>
                <Button label="*" click={setOperation}/>
                <Button label="4"/>
                <Button label="5"/>
                <Button label="6"/>
                <Button label="-" click={setOperation}/>
                <Button label="1"/>
                <Button label="2"/>
                <Button label="3"/>
                <Button label="+" click={setOperation}/>
                <Button label="0"/>
                <Button label="."/>
                <Button label="=" click={setOperation}/>
            </div>
        )
    }
}