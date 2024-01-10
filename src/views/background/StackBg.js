import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import Header from "../Header";
import Home from "../item/Home";

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
        <Box sx={{width: '100%', backgroundColor: '#caebd3'}}>
            <Stack spacing={1}>
                <Header></Header>
                {/*{items.map(item => <Item key={item}>Item 1 {item}</Item>)}*/}
                {/*<Box sx={{width: '100%'}}>*/}
                {/*    <Item style={{marginTop: 80}}></Item>*/}
                <Home></Home>
                <Item>
                    <img src={imgz} style={{
                        width: '100%', backgroundColor: '#caebd3', opacity: '0.75'
                    }}/>
                </Item>
                <Item>
                    <img src={imgz} style={{width: '100%', backgroundColor: '#caebd3'}}/>
                </Item>
                <Item>
                    <img src={imgz} style={{width: '100%', backgroundColor: '#caebd3'}}/>
                </Item> {/*</Box>*/}

            </Stack>
        </Box>
    );
}
