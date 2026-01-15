const gasPriceInput = document.getElementById("gasPrice");
const gasLimitInput = document.getElementById("gasLimit");
const ethPriceInput = document.getElementById("ethPrice");
const output = document.getElementById("output");
const themeToggle = document.getElementById("themeToggle");

// Fetch ETH price from CoinGecko
async function fetchEthPrice() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
    );
    const data = await response.json();
    ethPriceInput.value = data.ethereum.usd;
  } catch {
    ethPriceInput.placeholder = "Failed to fetch price";
  }
}

fetchEthPrice();

function setGasLimit(value) {
  gasLimitInput.value = value;
}

function calculateFee() {
  const gasPrice = Number(gasPriceInput.value);
  const gasLimit = Number(gasLimitInput.value);
  const ethPrice = Number(ethPriceInput.value);

  if (!gasPrice || !gasLimit || !ethPrice) {
    output.textContent = "Please fill in all fields.";
    return;
  }

  const costEth = (gasPrice * gasLimit) / 1_000_000_000;
  const costUsd = costEth * ethPrice;

  output.innerHTML = `
    ${costEth.toFixed(6)} ETH<br>
    $${costUsd.toFixed(2)} USD
  `;
}

// Dark mode toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});
