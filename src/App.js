import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import Section from "./components/Section";
import Tueste from "./components/Tueste";
import Title from "./components/Title";
import image from './components/kissaten-imagen.png'
import CancelButton from "./components/CancelButton";

const App = () => {
  const [roastTime, setRoastTime] = useState("");

  const CoffeeDevelopment = (minutes, seconds, development) => {
    if (typeof minutes !== 'number' || typeof seconds !== 'number' || typeof development !== 'number') {
      throw new Error("All parameters should be numbers");
    }
    if (minutes < 0 || seconds < 0 || seconds >= 60 || development < 0 || development >= 100) {
      throw new Error("Invalid parameter values");
    }
  
    let totalMinutes = minutes + (seconds / 60);
    let adjustedMinutes = totalMinutes * 100 / (100 - development);
  
    let minutesEnd = Math.floor(adjustedMinutes);
    let secondsEnd = Math.round((adjustedMinutes - minutesEnd) * 60);
  
    let formattedSecondsEnd = secondsEnd.toString().padStart(2, '0');
  
    return `${minutesEnd}:${formattedSecondsEnd}`;
  };

  const handleSubmit = ({ firstCrack, develoment }) => {

    let minutes = firstCrack.substring(0, 2)
    let seconds = firstCrack.substring(3, 5)

    const values = CoffeeDevelopment(
      Number(minutes),
      Number(seconds),
      develoment
    )
    setRoastTime(values)
  };

  return (
    <Container>
      <Title>Kissaten Roaster App</Title>
      <Section>
      <Formik
          initialValues={{
            firstCrack: "",
            develoment: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            firstCrack: Yup.string()
              .required("Campo obligatorio")
              .matches(/^([0-5][0-9]):([0-5][0-9])$/, "Debe estar en formato MM:SS"),
            develoment: Yup.number()
              .required("Campo obligatorio")
              .typeError("El campo debe de ser un número")
              .min(10, "El valor mínimo debe de ser 10")
              .max(30, "El valor máximo de interés debe de ser 30"),
          })}
        >
          {({ resetForm }) => (
            <Form>
              <Input
                type="text"
                mask="99:99"
                name="firstCrack"
                label="First Crack Time (MM:SS)"
              />
              <Input
                name="develoment"
                type="number"
                label="Develoment of Roast (minutes)"
              />
              <CancelButton type="button" onClick={resetForm}>Cancelar</CancelButton>
              <Button type="submit">Calcular</Button>
            </Form>
          )}
        </Formik>
        {roastTime !== "" ? <Tueste>Roast final time: {roastTime}</Tueste> : null}
      </Section>
      <img alt="" src={image} style={{ marginTop: '20px' }} />
    </Container>
  );
}

export default App;
