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
                        image="https://cdn.biihappy.com/ziiweb/default/template/62ef3cdcf106ea77bb276cc5/6bf9779158d43707a8d1d400c2da1e3d.jpg"
                        sx={{opacity: 0.8}}
                    />
                    <Typography
                        noWrap
                        variant="body1"
                        align='center'
                        sx={{
                        fontFamily: 'Arial, Helvetica, sans-serif',
                        position: 'absolute',
                        color: 'black',
                        bottom: {xs: 120, md: 200, lg: 200},
                        left: '50%',
                        transform: 'translateX(-50%)',

                        fontSize: {xs: '20px', md: '60px', lg: '120px'},
                        fontWeight: {xs: '600', md: '600', lg: '800'},


                    }} >
                        Mrs ANNA & Mr BRIAN
                        </Typography>
                    <Typography
                        noWrap
                        sx={{
                        fontFamily: 'Arial, Helvetica, sans-serif',
                        position: 'absolute',
                        color: 'black',
                        bottom: {xs: 90, md: 200, lg: 160},
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: {xs: '20px', md: '40px', lg: '200x'},
                        fontWeight: {xs: '400', md: '600', lg: '600'}
                    }} >
                        19:00 ngày 18 tháng 5 năm 2023
                    </Typography>
                </div>
            {/* </CardContent> */}
        </Card>
    );
}