import React from 'react';
import {
    Box, 
    Stack, 
    Typography,
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup,
    OutlinedInput,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import { MetaMaskconnector } from '../../utils/web3Config';
import { Alchemy, Network } from 'alchemy-sdk';

const config = {
    apiKey: "DXKD8MZtAEoT508AiPj0rEocvhcwjy5P",
    network: Network.ETH_GOERLI,
}

export default function Home () {
    const { active, activate, account, error } = useWeb3React();
    const [type, setType] = React.useState('manual');
    const [manual, setManual] = React.useState('');
    const [nfts, setNfts] = React.useState([]);
    const alchemy = new Alchemy(config);

    const handleType = (e)=> {
        setType(e.target.value);
    }

    const handleConnectMetaMask = React.useCallback(() => {
        const { ethereum }  = window;
        if (!ethereum) {
            alert('error');
            return;
        }
        activate(MetaMaskconnector);
    }, [active])

    const handleManual = (e) => {
        setManual(e.target.value);
    }

    const getWithManual = async () => {
        const data = await getNfts(manual);
        setNfts(data);
    }

    const getWithConnect = async () => {
        const data = await getNfts(account);
        setNfts(data);
    }

    const getNfts = async (address) => {
        const nfts = await alchemy.nft.getNftsForOwner(address);
        console.log(nfts.ownedNfts)
        return nfts.ownedNfts;
    }
    return (
        <Box>
            <Stack gap={4}>
                <Stack 
                    flexDirection="row" 
                    justifyContent="center"
                    sx={{
                        pt: 4
                    }}
                >
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Wallet Input Type</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="manual"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel 
                                value="manual" 
                                control={<Radio />} 
                                label="Manual Input" 
                                onClick={handleType}
                            />
                            <FormControlLabel 
                                value="connect" 
                                control={<Radio />} 
                                label="Connect Wallet" 
                                onClick={handleType}
                            />
                        </RadioGroup>
                    </FormControl>
                </Stack>
                {type == 'manual'
                ?
                    <Stack
                        flexDirection="row"
                        justifyContent="center"
                        gap={4}
                    >
                        <OutlinedInput 
                            placeholder="Please input wallet address"
                            size="small"
                            onChange={handleManual}
                            value={manual}
                        />
                        <Button
                            variant="contained"
                            size="small"
                            onClick={getWithManual}
                        >Load</Button>
                    </Stack>
                :
                    <Stack
                        flexDirection="row"
                        justifyContent="center"
                        gap={4}
                    >
                        {account 
                        ? 
                            <>
                                <OutlinedInput 
                                    disabled
                                    size="small"
                                    value={account}
                                />
                                <Button
                                    variant="contained"
                                    size="small"
                                    onClick={getWithConnect}
                                >Load</Button>
                            </>
                        :
                            <Button
                                variant="contained"
                                size="small"
                                onClick={handleConnectMetaMask}
                            >Connect Wallet</Button>
                    }
                    </Stack>
                }
                <TableContainer sx={{ p: 4 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>No</TableCell>
                                <TableCell>Collection Name</TableCell>
                                <TableCell align="right">Collect Address</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Image</TableCell>
                                <TableCell align="right">Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {nfts.map((row, key) => (
                            <TableRow
                                key={key}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{key + 1}</TableCell>
                                <TableCell component="th" scope="row">
                                    {row.contract.name}
                                </TableCell>
                                <TableCell align="right">{row.contract.address}</TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">
                                    <Box component="img" src={row.tokenUri.gateway} sx={{ height: 48, width: 48 }} />
                                </TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </Box>
    )
}

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];