let currPage = 1;
const productsPerPage = 24;
const totalProducts = 461;
const totalPages = Math.ceil(totalProducts / productsPerPage);

async function fetchProducts(page) {
  const BASE_URL = `https://voodoo-sandbox.myshopify.com/products.json?limit=${productsPerPage}&page=${page}`;
  const response = await fetch(BASE_URL);
  const data = await response.json();
  console.log(data.products[3]);
  
  return data.products;
}

function createProduct(product) {
  const productCard = document.createElement('div');
  productCard.classList.add('w-60', 'h-80', 'm-4', 'rounded', 'mt-12');

  const productImage = document.createElement('img');
  productImage.classList.add(
    'w-auto',
    'h-max',
    'border',
    'border-black',
    'rounded',
    'relative',
    'mb-2'
  );
  productImage.setAttribute('alt', 'Product Image');
  if (product.images.length > 0) {
    productImage.setAttribute('src', product.images[0].src);
  } else {
    productImage.setAttribute(
      'src',
      'https://cdn.shopify.com/s/files/1/0690/0075/7529/products/5196c9302b12ec8d50d0e700e2865c2a.png?v=1694603298',
    );
  }

  const productSource = document.createElement('div');
  productSource.classList.add('bg-black', 'text-sm', 'font-space', 'text-white', 'uppercase', 'absolute', 'm-3', 'rounded', 'block', 'p-2', 'z-10');
  productSource.textContent = 'Used';

  const firstLine = document.createElement('div');
  firstLine.classList.add('flex', 'justify-between');

  const productName = document.createElement('p');
  productName.classList.add('font-bold', 'text-black', 'text-sm', 'capitalize');
  productName.textContent = product.title;

  const productCondition = document.createElement('p');
  productCondition.classList.add('text-sm', 'font-bold', 'text-black');
  productCondition.textContent = 'Condition';

  const secondLine = document.createElement('div');
  secondLine.classList.add('flex', 'justify-between');

  const productPrice = document.createElement('p');
  productPrice.classList.add('font-bold', 'text-black', 'text-sm');
  productPrice.textContent = product.variants[0].price;

  const productDescription = document.createElement('p');
  productDescription.classList.add('text-sm', 'text-black');
  productDescription.textContent = 'Slightly used';

  const addToCartButton = document.createElement('button');
  addToCartButton.classList.add('bg-black', 'text-white', 'w-full', 'my-4', 'p-4');
  addToCartButton.textContent = 'Add to cart';

  firstLine.appendChild(productName, productCondition);
  firstLine.appendChild(productCondition);

  secondLine.appendChild(productPrice, productDescription);
  secondLine.appendChild(productDescription);

  productCard.appendChild(productSource);
  productCard.appendChild(productImage);
  productCard.appendChild(firstLine);
  productCard.appendChild(secondLine);
  productCard.appendChild(addToCartButton);
  
  const container = document.getElementById('products');
  container.appendChild(productCard);
}

function renderPagination() {
  const paginationContainer = document.createElement('div');
  paginationContainer.classList.add('flex', 'gap-4', 'mt-4');

  const maxVisiblePages = 5;

  for (let page = 1; page <= totalPages; page++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = page;
    pageButton.classList.add(
      'w-10',
      'h-10',
      'rounded-full',
      'border',
      'border-black',
    );
  }
  const container = document.getElementById('products');
  container.appendChild(paginationContainer);
}

fetchProducts(currPage).then(products => {
  return products.forEach(product => {
    createProduct(product);
  })
});

// renderPagination();

function handleOpenCart() {
  const asideCart = document.querySelector('aside');
  asideCart.classList.remove('translate-x-full');
}

function handleCloseCart() {
  const asideCart = document.querySelector('aside');
  asideCart.classList.add('translate-x-full');
}

function handleOpenInfo() {
  const info = document.getElementById('info');
  info.classList.toggle('hidden');
}

const closeCartButton = document.getElementById('close');
const openCartButton = document.getElementById('cart');
const openInfoButton = document.getElementById('more-info');

openCartButton.addEventListener('click', handleOpenCart);
closeCartButton.addEventListener('click', handleCloseCart);
openInfoButton.addEventListener('click', handleOpenInfo);