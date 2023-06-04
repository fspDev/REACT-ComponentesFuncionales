import './App.css';
import Container from '@mui/material/Container';
import FormSignUp from './Components/FormSignUp';
import Typography from '@mui/material/Typography';

function App() {

  const handleSubmit = (valores) => {
    console.log("APPJS: ",valores)
  }

  return (
    <Container component="section" maxWidth="sm">
      <Typography variant="h3" align="center">Formulario de Registro</Typography>
      <FormSignUp handleSubmit={handleSubmit}/>
    </Container>
  );
}

export default App;
