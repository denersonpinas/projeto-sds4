import DataTable from "components/datatable";
import Footer from "components/footer";
import NavBar from "components/navbar";

function App() {
  return (
    // FRAGMENT => Utilizado para podermos colocar dois /// elementos juntos dentro do import, já que o return // so aceita um. 
    //
    <>
      <NavBar/>
      <div className="container">
        <h1 className="text-primary">Olá, Mundo!</h1>
        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
