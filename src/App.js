
import { Container } from "@mui/material";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
       <Container
    sx={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',

  }}
   >
      <Form />

   </Container>
      
    </>
  );
}

export default App;
