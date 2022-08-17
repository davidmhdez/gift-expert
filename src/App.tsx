import {Container} from "@mui/material";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import useGifts from "./hooks/useGifts";
import GiftList from "./components/GiftList";

function App() {
    const { isLoading, gifts, getGifts, searchTerm } = useGifts();
    return (
        <Container>
            <Header/>
            <SearchBar onSearch={getGifts}/>
            <GiftList
                gifts={gifts}
                isLoading={isLoading}
                searchTerm={searchTerm}
            />
        </Container>
    )
}

export default App
