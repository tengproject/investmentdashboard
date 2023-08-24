import { useState, useEffect } from 'react';

const STOCK_DATA_API_KEY = process.env.STOCK_DATA_API_KEY

const Marketprice = ({ ticker }) => {
    const [marketPrice, setMarketPrice] = useState(null);

    useEffect(() => {
        const fetchMarketPrice = async () => {
            try {
                // const response = await fetch(`YOUR_API_URL_HERE/${ticker}`);
                const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${STOCK_DATA_API_KEY}`);
                const data = await response.json();
                console.log(data)
                setMarketPrice(data['Global Quote']['05. price']);
            } catch (error) {
                console.error('Error fetching market price:', error);
                setMarketPrice(null);
            }
        };

        fetchMarketPrice();
    }, [ticker]);

         return <>{marketPrice !== null ? `$${marketPrice}` : 'N/A'}</>;
    };


    export default Marketprice

    // const MarketPrice = ({ ticker }) => {
    //     const [marketPrice, setMarketPrice] = useState(null);
    
    //     useEffect(() => {
    //         const fetchMarketPrice = async () => {
    //             try {
    //                 const response = await fetch(`https://api.stockdata.org/v1/data/quote?symbols=${ticker}&api_token=API_KEY`);
    //                 const data = await response.json();
                    
    //                 if (response.ok && data.data && data.data.length > 0) {
    //                     const price = data.data[0].price; // Accessing price under data object
    //                     setMarketPrice(price);
    //                 } else {
    //                     console.error('API request error:', data);
    //                     setMarketPrice(null);
    //                 }
    //             } catch (error) {
    //                 console.error('Error fetching market price:', error);
    //                 setMarketPrice(null);
    //             }
    //         };
    
    //         fetchMarketPrice();
    //     }, [ticker]);
    
    //     return <>{marketPrice !== null ? `$${marketPrice.toFixed(2)}` : 'N/A'}</>;
    // };
    
    // export default MarketPrice;
