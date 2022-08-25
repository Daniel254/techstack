import ApartmentList from "components/ApartmentList";
import Container from "components/Container/Container";
import NewApartmentForm from "components/NewApartmentForm/NewApartmentForm";
import "./App.css";

function App() {
  return (
    <Container>
      <h1>Apartment Marketplace</h1>
      <NewApartmentForm />
      <ApartmentList />
    </Container>
  );
}

export default App;
