const nftData = [
  {
    title: "Cyber Ape",
    imageURL: "https://images-platform.99static.com/tci4RTTbuvIZwpK7TK4v3yomSfc=/0x0:1961x1961/600x600/99designs-contests-attachments/132/132928/attachment_132928696",
    description: "A rare cyberpunk ape from the future blockchain.",
    price: "0.45 ETH"
  },
  {
    title: "Neon Samurai",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHurBFBBUkSRXzFZVLhGfLcWM8_1yBbDz5VQ&s",
    description: "A futuristic warrior forged in neon lights.",
    price: "0.62 ETH"
  },
  {
    title: "Meta Skull",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX04pVh0OpERzNQzPv9qY5ahkRaBKP2QkmZw&s",
    description: "A digital skull symbolizing life beyond reality.",
    price: "0.38 ETH"
  },
  {
    title: "Galactic Cat",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNfp74Eb8A8pvbGWaNNMNzDsd6Qug0m_z-jg&s",
    description: "An interstellar feline exploring distant galaxies.",
    price: "0.29 ETH"
  }
];

const grid = document.getElementById("nftGrid");
const modalOverlay = document.getElementById("modalOverlay");
const closeModalBtn = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");
const buyButton = document.getElementById("buyButton");

let purchased = false;

// Render NFTs
nftData.forEach((nft) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${nft.imageURL}" alt="${nft.title}">
    <div class="card-content">
      <h3>${nft.title}</h3>
      <span>${nft.price}</span>
    </div>
  `;

  card.addEventListener("click", () => openModal(nft));
  grid.appendChild(card);
});

function openModal(nft) {
  modalImage.src = nft.imageURL;
  modalTitle.textContent = nft.title;
  modalDescription.textContent = nft.description;
  modalPrice.textContent = nft.price;

  purchased = false;
  buyButton.textContent = "Buy";
  buyButton.classList.remove("purchased");

  modalOverlay.classList.remove("hidden");
}

closeModalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.add("hidden");
  }
});

buyButton.addEventListener("click", () => {
  if (!purchased) {
    purchased = true;
    buyButton.textContent = "Purchased";
    buyButton.classList.add("purchased");
  }
});
