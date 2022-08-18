import React from 'react';
import Gift from "../entities/Gift";
import {Box, CircularProgress, ImageList, Typography} from "@mui/material";
import GiftImage from "./GiftImage";

type Props = {
    gifts: Gift[]
    isLoading: boolean
    searchTerm: string
}

const GiftList: React.FC<Props> = ({gifts, searchTerm, isLoading}) => {
    return (
        <Box>
            <Typography variant="h5" component="h5">{searchTerm}</Typography>
            {isLoading
                &&
                <CircularProgress
                    sx={{
                        m: "0 auto"
                    }}
                />
            }
            {searchTerm && gifts.length > 0 && !isLoading
                    ?   <ImageList>
                            {gifts.map(gift => <GiftImage key={gift.id} gift={gift}/>)}
                        </ImageList>
                    :   null
            }
        </Box>
    );
};

export default GiftList;