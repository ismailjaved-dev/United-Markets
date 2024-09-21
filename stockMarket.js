function displayTheData(stockSymbol) {
  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("There was a problem fetching the data:", error);
    }
  }

  let svgPlus = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
<path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>`;
  let svgMinus = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>`;

  function editStockValue(className, dataC) {
    document.querySelectorAll(className).forEach((f) => {
      f.textContent = `$${dataC}`;
    });
  }

  function editStockChange(className, dataD) {
    document.querySelectorAll(className).forEach((f) => {
      if (dataD.toString()[0] == "-") {
        f.innerHTML = `${svgMinus}${dataD}`;
        f.classList.add("stock-minus");
      } else {
        f.innerHTML = `${svgPlus}+${dataD}`;
        f.classList.add("stock-plus");
      }
    });
  }

  const apiKey = "co9rmqhr01qgj7bndmu0co9rmqhr01qgj7bndmug";

  fetchData(
    `https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=${apiKey}`
  )
    .then((data) => {
      if (data.c != undefined || data.c != null) {
        sessionStorage.setItem(`${stockSymbol}c`, data.c);
        sessionStorage.setItem(`${stockSymbol}d`, data.d);

        editStockValue(`.value-${stockSymbol}`, data.c);
        editStockChange(`.change-${stockSymbol}`, data.d);
      }
    })
    .catch((error) => {
      let valueC = sessionStorage.getItem(`${stockSymbol}c`);
      let valueD = sessionStorage.getItem(`${stockSymbol}d`);

      editStockValue(`.value-${stockSymbol}`, valueC);
      editStockChange(`.change-${stockSymbol}`, valueD);
    });
}

displayTheData("TSLA");
displayTheData("META");
displayTheData("GOOG");
displayTheData("AMZN");
displayTheData("MSFT");
displayTheData("AAPL");
displayTheData("UBER");
displayTheData("AMD");
displayTheData("NVDA");
displayTheData("NFLX");
