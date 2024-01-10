import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import Header from "../Header";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const items = [...Array(10).keys()]
const imgz = 'https://cdn.biihappy.com/ziiweb/default/template/62ef3cdcf106ea77bb276cc5/6bf9779158d43707a8d1d400c2da1e3d.jpg'
export default function BasicStack() {
    return (
        <Box sx={{width: '100%'}}>
            <Stack spacing={2}>
                <Header></Header>
                {items.map(item => <Item key={item}>Item 1 {item}</Item>)}
                <Item>
                    <img src={imgz} alt="Girl in a jacket"/>
                </Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>

            </Stack>
        </Box>
);
}
