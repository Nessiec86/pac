import React, {Component} from 'react';
import Nav from '../Components/Nav';
import { Button } from 'react-bootstrap';
import user from '../lib/MW-service.js';


class Pac extends Component {
     
state = {
    data: '',
    text: '',
    clv: '',
    inputok: true
}



//Read user
read = (text) => {
    console.log(text)
    user.read ()
    .then((data) => { 
        this.setState({
            data,
            inputok: false
        });
        console.log(data)
    })
    .catch(error => {
        this.setState({
            status: "error",
            isLoading: false
        });
    });
    // window.location.assign('https://www.change.org/p/gobierno-de-espa%C3%B1a-los-pa%C3%B1ales-no-son-un-lujo-rebajad-su-iva-ya-rebajaivapa%C3%B1alesya');
};


change = (collective) => {
    user.change(collective)
        .then((data) => {
            this.setState({
                clv: data,
            })
            console.log(data)
        })
        .catch(error => {
            this.setState({
                status: "error",
                isLoading: false
            });
        });
}


//Input text
handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    
};



render () {  
    const { text } = this.state
    console.log(text)
    const link1 = "https://www.change.org/p/gobierno-de-espa%C3%B1a-los-pa%C3%B1ales-no-son-un-lujo-rebajad-su-iva-ya-rebajaivapa%C3%B1alesya"
    const GLU = {"collectives":["3TO"]}
    let inputok = this.state.inputok;
    console.log(inputok)
    return (
        <>
        <Nav/>
        <div>
            <input type="email"
                placeholder="Type something..." 
                id="myInput"
                name="text" 
                value={text}
                onChange={this.handleChange}/>
                <Button variant="success"className='val' onClick={() => this.handleSubmit()}>VALIDAR</Button>
            {inputok === true ?
            <div>  
                <Button id='1' onClick={() => this.read(text)}>Pañales</Button>
                <Button id='2' onClick={() => this.change(GLU)}>Higiene femenina</Button>
                <Button id='3' onClick={() => this.change(GLU)}>Alimentos sin gluten</Button>
            </div>
            :
            <div>Email incorrecto</div>
            }
        </div>
    </>
    );
}
}
export default Pac;
