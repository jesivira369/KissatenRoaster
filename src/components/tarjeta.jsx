import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import imagen from './kissaten-imagen.png';

const Tarjeta = () => {

    const [time, setTime] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [porcentage, setPorcentage] = useState(20);
    const [crackTime, setcrackTime] = useState(0);
    const [finalMinutes, setFinalMinutes] = useState();
    const [finalSeconds, setFinalSeconds] = useState();

    const changeTime = () => {
        setMinutes(Math.floor(time));
        let decimals = (time - Math.floor(time)) * 100;
        setSeconds(decimals.toFixed(0));
        setPorcentage(porcentage);

        let stringMinutes = minutes.toString();
        let stringSeconds = (seconds*100/60).toString();
        let crackTimeString = `${stringMinutes}.${stringSeconds}`;
        let crackTimeNumber = parseFloat(crackTimeString);
        setcrackTime(crackTimeNumber);


    }

    /*const ToDecimals = () => {
        let stringMinutes = minutes.toString();
        let stringSeconds = (seconds*100/60).toString();
        let crackTimeString = `${stringMinutes}.${stringSeconds}`;
        let crackTimeNumber = parseFloat(crackTimeString);
        setcrackTime(crackTimeNumber);

    }*/
    
    const roastDeveloment = () => {

        console.log(crackTime);
        let roastFinal = (crackTime / ((100-porcentage)/100));
        console.log(roastFinal);
        setFinalMinutes(Math.floor(roastFinal));
        let decimals = (((((roastFinal - Math.floor(roastFinal))*100).toFixed(0))) * 60/100).toFixed(0)
        setFinalSeconds(decimals);

    }

    const clear = () => {
        setFinalMinutes(0);
        setFinalSeconds(0);
        setPorcentage(0);
    }



    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>Kissaten Tostador</Card.Title>
                <Card.Text>
                    This is a small aplication for roast coffee, here you enter the time of the first crack as well as the percentage of desired development. 
                    Please enjoy your roasting day.
            </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>First Crack Time <input type="number" placeholder="Example 10.55" onChange={(e) => { setTime(e.target.value) }} /> </ListGroupItem>
                <ListGroupItem>Porcentage of development <input type="number" placeholder="Example 25" value={porcentage} onChange={(e) => { setPorcentage(e.target.value) }} /> % </ListGroupItem>
                <ListGroupItem>Drop Time {finalMinutes} Min {finalSeconds} Seg </ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Button variant="primary" onClick={changeTime}> Set Roast </Button> {' '}
                <Button variant="success" onClick={roastDeveloment} > Start Roast </Button> {' '}
                <Button variant="danger" onClick={clear} > Clear </Button>
            </Card.Body>
        </Card>

    );
}

export default Tarjeta;