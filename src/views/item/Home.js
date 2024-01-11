import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import { Card, CardMedia, CardContent } from "@mui/material";
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import zIndex from '@mui/material/styles/zIndex';


export default function Home() {
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    const jsx = `<Grid container spacing={${spacing}}>`;


    return (
        // <Card sx={{
        //     flexGrow: 1
        // }} container spacing={0}>
        //     <img component="img" src={'https://thunghiemtest.my.canva.site/images/95a69c0f9855397797cbaddcd183bc46.jpg'}
        //         style={{ backgroundColor: '#caebd3' }}
        //         sx={{
        //             height: { lg: '60vh', xs: '60vh' },
        //             width: { lg: '22vw', xs: '80vw' },
        //         }}>

        //     </img>

        // </Card>
        <Card>
            {/* <CardContent> */}
                <div style={{ position: 'relative' }} >
                    <CardMedia
                        component="img"
                        image="https://static.wixstatic.com/media/e1c78c_38c6098a3adb4746a3f7b2005fe1fc0f.jpg/v1/fill/w_640,h_872,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/e1c78c_38c6098a3adb4746a3f7b2005fe1fc0f.jpg"
                    />
                    <Typography sx={{
                        position: 'absolute',
                        color: 'black',
                        bottom: 50,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: {xs: '10px', md: '60px', lg: '400x'},
                        fontWeight: {xs: '100', md: '600', lg: '800'}

                    }} >
                        ANNA & ANCD
                        </Typography>
                    <Typography style={{
                        position: 'absolute',
                        color: 'black',
                        bottom: 10,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: {xs: '10px', md: '40px', lg: '200x'},
                        fontWeight: {xs: '100', md: '400', lg: '600'}
                    }} >19:00</Typography>
                </div>
            {/* </CardContent> */}
        </Card>
    );
}