import React from 'react';
import Gift from "../entities/Gift";
import {ImageListItem} from "@mui/material";

type Props = {
    gift: Gift
}

const GiftImage: React.FC<Props> = ({gift}) => {
    return (
        <ImageListItem key={gift.id}>
            <img
                src={gift.url}
                alt={gift.title}
            />
        </ImageListItem>
    );
};

export default GiftImage;
