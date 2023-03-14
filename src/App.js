import { Container } from "@mui/material";
import DetailsFillingPage from "./pages/DetailsFillingPage";


function App() {
  return (
   <Container
    sx={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',

  }}
   >

    <DetailsFillingPage/>

   </Container>
  );
}

export default App;
