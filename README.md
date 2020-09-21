# FX Price Ticket

*FX Price Ticke __real time__!*

## Installation

### Mock API Install

- Inside *__resources__* folder run the follow command on terminal:

```bash
npm install
```

- Then run the application with command:

```bash
npm start
```

### Price Ticket API Install

- Inside the main folder run the follow command on terminal:

```bash
npm install
```

- Then run the application with command:

```bash
npm start
```

## Usage

Open the [localhost](http://localhost:3333/) URL with 3333 port.

- You will see that:
![Página Inicial](https://github.com/lucasluizss/FX.PriceTicket/blob/master/public/assets/Screenshot_1.png?raw=true)

- You can test by running the follow script on console:

```javascript
const addPrice = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const currencies = ['BRA/USD', 'GBP/USD', 'EUR/USD'];

    const randomCurrency = Math.floor(Math.random() * currencies.length)
    const randomCurrencyValue = () => Math.round(((Math.random() * 6) + 1) * 20) / 20;

    const raw = JSON.stringify({
      "instrument": currencies[randomCurrency],
      "bid": randomCurrencyValue(),
      "ask": randomCurrencyValue(),
      "date": new Date() 
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3333/v1/prices", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

let minutes = 2;
let dateNow = new Date();
let stopDate = new Date(dateNow.getTime() + minutes * 60000);

const interval = setInterval(() => {
    if (new Date() > stopDate) {
        clearInterval(interval);
    }
    
    addPrice();
}, 700);

```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
