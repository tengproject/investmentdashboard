// import {Outlet} from 'react-router-dom'
import {useState} from 'react'
import Marketprice from '../Marketprice'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import Container from '@mui/material/Container';
// import FormControl from '@muimport { DatePicker } from '@mui/x-date-pickers/DatePicker';i/material/FormControl';
// import Box from '@mui/material/Box';

const DashBoard = () => {
    const [ticker, setTicker] = useState('');
    const [nShares, setNShares] = useState('');
    const [ccy, setCcy] = useState('');
    const [cPrice, setCPrice] = useState('');
    const [date, setDate] = useState('');
    const [bank, setBank] = useState('');
    const [transactions,setTransactions] = useState([])

    const handleTicker = (e) => {
    e.preventDefault()

    const formattedDate = dayjs(date).format('YYYY-MM-DD')

    const newTransaction = {
        ticker: ticker,
        nShares: nShares,
        ccy: ccy,
        cPrice: cPrice,
        date: formattedDate,
        bank: bank
    }

    setTransactions([...transactions, newTransaction])

    setTicker('');
    setNShares('');
    setCcy('');
    setCPrice('');
    setDate('');
    setBank('');
    };

    return (
    <Container maxWidth='lg' style={{ margin: '20px', textAlign: 'center'}}>
    <h1>Investment Dashboard</h1>
    <form onSubmit={handleTicker} style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '5px',
        }}>
        <TextField id="outlined-basic" label="Ticker" variant="outlined" value={ticker} onChange={(e)=>setTicker(e.target.value)} />

        <TextField id="outlined-basic" label="No. of shares" variant="outlined" value={nShares} onChange={(e)=>setNShares(e.target.value)}/>

        <InputLabel id="CCY">Currency</InputLabel>
        <Select
            labelId="currency"
            id="ccy"
            value={ccy}
            label="CCY"
            onChange={(e)=>setCcy(e.target.value)}
        >
            <MenuItem value="HKD">HKD</MenuItem>
            <MenuItem value="SGD">SGD</MenuItem>
            <MenuItem value="USD">USD</MenuItem>
        </Select>

        <TextField id="outlined-basic" label="Cost Price" variant="outlined" value={cPrice} onChange={(e)=>setCPrice(e.target.value)}/>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker label="Transaction Date" value={date} onChange={(selectedDate) => setDate(selectedDate)} />
            </DemoContainer>
        </LocalizationProvider>

        <InputLabel id="bank">Bank</InputLabel>
            <Select
                labelId="Bank"
                id="bank"
                value={bank}
                label="Bank"
                onChange={(e)=>setBank(e.target.value)}
            >
                <MenuItem value="Citi">Citi</MenuItem>
                <MenuItem value="UBS">UBS</MenuItem>
                <MenuItem value="CS">CS</MenuItem>
            </Select>
   
        <Button variant="text" type="submit">Buy</Button>
        </form>

        <table style={{ width: '50%', marginTop: '20px', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                <th>Ticker</th>
                <th>No. of Shares</th>
                <th>CCY</th>
                <th>Cost Price</th>
                <th>Market Price</th>
                <th>Date</th>
                <th>Bank</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction, index) => (
                    <tr key={index}>
                    <td>{transaction.ticker}</td>
                    <td>{transaction.nShares}</td>
                    <td>{transaction.ccy}</td>
                    <td>${transaction.cPrice}</td>
                    <td><Marketprice ticker={transaction.ticker} /></td>
                    <td>{transaction.date}</td>
                    <td>{transaction.bank}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </Container>
    )
}

export default DashBoard