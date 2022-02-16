import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins Top10</h1>
      <h2>{loading ? "Loading..." : null}</h2>
      <ul>
        {coins
          .filter((coin) => coin.rank <= 50 && coin.rank > 0)
          .map((coin, index) => {
            return (
              <li key={index}>
                {coin.name}({coin.symbol}) price:${coin.quotes.USD.price}
                (USD)
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
