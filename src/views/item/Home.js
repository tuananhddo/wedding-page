import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import {Card} from "@mui/material";
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode';

export default function Home() {
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    const jsx = `<Grid container spacing={${spacing}}>`;

    return (
        <Card sx={{flexGrow: 1}} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={spacing}>
                    {[0, 1, 2].map((value) => (
                        <Grid key={value} item>
                            {/*<Paper*/}
                            {/*    sx={{*/}
                            {/*        height: 462,*/}
                            {/*        width: 320,*/}
                            {/*        backgroundColor: (theme) =>*/}
                            {/*            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',*/}
                            {/*    }}*/}
                            {/*/>*/}
                            <img src={'https://thunghiemtest.my.canva.site/images/95a69c0f9855397797cbaddcd183bc46.jpg'}
                                 style={{backgroundColor: '#caebd3'}}
                                 height={462} width={320}
                            />

                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{p: 2}}>
                    <Grid container>
                        <Grid item>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">spacing</FormLabel>
                                <RadioGroup
                                    name="spacing"
                                    aria-label="spacing"
                                    value={spacing.toString()}
                                    onChange={handleChange}
                                    row
                                >
                                    {[0, 0.5, 1, 2, 3, 4, 8, 12,22].map((value) => (
                                        <FormControlLabel
                                            key={value}
                                            value={value.toString()}
                                            control={<Radio/>}
                                            label={value.toString()}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Paper>
                {/*<HighlightedCode code={jsx} language="jsx"/>*/}
            </Grid>
        </Card>
    );
}