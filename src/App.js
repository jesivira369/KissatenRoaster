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
import Tarjeta from './components/tarjeta'

function App() {
  const [roastTime, setRoastTime] = useState("");

  const CoffeeDeveloment = (minutes, seconds, develoment) => {
    let crack = minutes
    crack += (seconds/60)

    //Agregamos el procentaje de desarrollo
    crack *= 100/(100-develoment)
    console.log(crack -Math.floor(crack))
    //Separamos los minutos de los segundos
    let minutesEnd = Math.floor(crack)
    let secondsEnd = Math.round((crack - Math.floor(crack)) *60)
    return `${minutesEnd}:${secondsEnd}`
  };

  const handleSubmit = ({firstCrack, develoment}) => {

    //Cortamos la cadena para obtener los minutos y segundos y pasarlos al desarrollo
    let minutes = firstCrack.substring(0, 2)
    let seconds = firstCrack.substring(3, 5)

    const values = CoffeeDeveloment(
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
            /*firstCrack: Yup.number()
              .required("Campo obligatorio")
              .typeError("El campo debe de ser un numero"),*/
              develoment: Yup.number()
              .required("Campo obligatorio")
              .typeError("El campo debe de ser un numero")
              .min(10, "El valor minimo debe de ser 0")
              .max(80, "El valor maximo de interes debe de ser 30"),
          })}
        >
          <Form>
            <Input type="time" min="00:00" max="59:59" name="firstCrack" label="First Crack Time" />
            <Input name="develoment" type="number" label="Develoment of Roast" />
            <Button type="submit">Calcular</Button>
          </Form>
        </Formik>
        {roastTime !== "" ? <Tueste>Roast final time: {roastTime}</Tueste> : null}
      </Section>
      <img src={image} style={{marginTop: '20px'}} />
    </Container>
  );
}

export default App;
