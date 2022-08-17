import React from 'react';
import {Box, Typography} from "@mui/material";

const Header: React.FC = () => {
    return (
        <Box sx={{
            display: "block",
            width: "100%",
            m: "20px 0"
        }}>
            <Typography variant="h3" component="h3" >Gift expert</Typography>
        </Box>
    );
};

export default Header;
