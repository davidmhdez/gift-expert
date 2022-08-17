import React, {useState} from 'react';
import {Box, Button, InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

type Props = {
    onSearch: (search: string) => void
}

const SearchBar: React.FC<Props> = ({onSearch}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const { value } = e.target;
        setInputValue(value);
    }

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(inputValue.trim() !== ''){
            onSearch(inputValue);
            setInputValue("");
        }
    }

    return (
        <form onSubmit={handleSearch}>
            <Box display="block" width="100%">
                <TextField
                    placeholder="Buscar gifts"
                    value={inputValue}
                    size="small"
                    fullWidth
                    sx={{
                        backgroundColor: "#ffffff"
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>
                    }}
                    onChange={handleChange}
                />
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "flex-end",
                width:"100%",
                mt: "14px"
            }}>
                <Button type="submit" variant="contained">Buscar</Button>
            </Box>
        </form>
    );
};

export default SearchBar;