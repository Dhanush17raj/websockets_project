let wsc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

let stockPriceElementc = document.getElementById('stock-pricec');

let lastPricec = null;

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);

    let price = parseFloat(stockObject.p).toFixed(2);
    
    stockPriceElement.innerText = price
    stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';
    lastPrice= price
}