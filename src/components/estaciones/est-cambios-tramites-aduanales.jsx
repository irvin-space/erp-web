import React from 'react';
import Typography from '@mui/material/Typography';
import { Input } from '@mui/material';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DownCircleOutlined } from '@ant-design/icons';


import FirstComponent from '../componentesBase/FirstComponent';
import ComponenteLista from '../componentesBase/ComponenteLista';
import RowRadioButtonsGroup from '../componentesBase/RowRadioButon';
import DataTable from '../componentesBase/DataTable';
import DataTable2 from '../componentesBase/DataTable2';

//Iconos
import { SearchOutlined } from '@ant-design/icons';
import { fontSize } from '@mui/system';

const EstCambiosTramitesAduanales = () => {
    return (
        <div>
            <Typography variant='h2'>Modificacion de Tramites Aduanales</Typography>

            <Divider sx={{ my: 2 }} />
            
            <Box component="form" className='base' >
                <Stack direction='row' spacing={2}>
                    <TextField id="standard-basic" label="Tramite aduana" variant="standard" /> <SearchOutlined />
                    <FirstComponent />
                </Stack>

                <Stack direction='row' spacing={2}>
                    <ComponenteLista titulo="Sucursal" />
                    <TextField id="outlined-number" label="Precintos" type="number" />
                    <TextField placeholder="0.00" id="outlined-start-adornment" slotProps={{ input: { startAdornment: '$' } }} />
                </Stack>

                <br />

                <Stack direction='row' spacing={2}>
                    <Stack sx={{ backgroundColor: "orange", width: "50%" }} direction='column'>
                        <Typography variant='h4'>Pedimento</Typography>
                        <Stack direction='row' spacing={2}>
                            <RowRadioButtonsGroup titulo="Tipo" valor1="Importación" valor2="Exportación" />

                            <ComponenteLista titulo="Clave" />
                        </Stack>
                        <Stack direction='row' spacing={2}>
                            <TextField id="standard-basic" label="Numero de pedimento" variant="standard" />
                            <RowRadioButtonsGroup titulo="" valor1="Con Cargo" valor2="Sin Cargo" />
                        </Stack>
                    </Stack>

                    <Stack sx={{ backgroundColor: "blue", width: "50%" }} direction='column'>
                        <Typography variant='h4'>Cliente</Typography>
                        <Stack direction='row' spacing={2}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Pedimento"
                                multiline
                                maxRows={2}
                                variant="standard"
                            />
                            <SearchOutlined />
                        </Stack>
                        <Stack direction='row' spacing={2}>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Facturación"
                                multiline
                                maxRows={2}
                                variant="standard"
                            />
                            <SearchOutlined />
                        </Stack>
                    </Stack>
                </Stack>
                <br />

                <Stack direction='row' spacing={2}>
                    <Stack sx={{ backgroundColor: "gray", width: "50%" }}>
                        <RowRadioButtonsGroup titulo="Tipo de Pago" valor1="Financiado" valor2="Anticipo" valor3="Trasferencia de Cliente" />
                        <RowRadioButtonsGroup titulo="Forma de Pago" valor1="Transferencia de Cuenta" valor2="Cheque" />
                    </Stack>

                    <Stack sx={{ backgroundColor: "gray", width: "50%" }}>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Impuesto"
                            variant="standard"
                        />
                        <ComponenteLista titulo="Chequera" />
                    </Stack>


                </Stack>
            </Box>

            <br />

            <Box>
                <Typography variant='h4'>Ingresos Agencia Aduanal</Typography>
                <DataTable></DataTable>
            </Box>

            <br />
            <Box>
                <Typography variant='h4'>Gastos por Cuenta del Cliente</Typography>
                <DataTable></DataTable>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Stack direction='row'>
                <Box sx={{ display: "flex",  justifyContent: "space-between", width:"100%" }}>
                    <Box>
                        <Button variant="contained">Iniciar</Button>
                        <Button variant="contained" disabled>Guardar</Button>
                        <Button variant="contained" color='secondary'>Cancelar</Button>
                    </Box>
                    <Box>
                        <Button variant="contained">Imprimir</Button>
                    </Box>
                </Box>

            </Stack>
        </div>
    );
}

export default EstCambiosTramitesAduanales;
