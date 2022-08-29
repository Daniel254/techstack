import ApartmentList from "components/ApartmentList";
import NewApartmentForm from "components/NewApartmentForm/NewApartmentForm";
import SearchBar from "components/SearchBar";
import { SORT_ORDER } from "constants/sortOrder";
import { useFetch } from "hooks/useFetch";
import { useState } from "react";
import { getAllApartments } from "services/apartmentsApi";
import Container from "ui/Container";

function App() {
  const [sortOrder, setSortOrder] = useState(SORT_ORDER.ASC_PRICE);
  const [apFilterByRoom, setApFilterByRoom] = useState(null);
  const {
    data,
    error,
    isLoading,
    fetchFn: refreshList,
  } = useFetch(
    () => getAllApartments({ price: sortOrder, rooms: apFilterByRoom }),
    [sortOrder, apFilterByRoom]
  );

  return (
    <Container>
      <h1>Apartment Marketplace</h1>
      <NewApartmentForm refershApartments={refreshList} />
      <ApartmentList
        apartments={data}
        error={error}
        isLoading={isLoading}
        refershApartments={refreshList}
      >
        <SearchBar
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          setApFilterByRoom={setApFilterByRoom}
        />
      </ApartmentList>
    </Container>
  );
}

export default App;
