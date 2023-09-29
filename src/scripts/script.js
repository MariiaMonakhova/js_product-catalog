let currPage = 1;
const productsPerPage = 24;
const totalProducts = 461;
const totalPages = Math.ceil(totalProducts / productsPerPage);

async function fetchProducts(page) {
  const BASE_URL = `https://voodoo-sandbox.myshopify.com/products.json?limit=${productsPerPage}&page=${page}`;
  const response = await fetch(BASE_URL);
  const data = await response.json();
  
  return data.products;
}

function createProduct(product) {
  const productCard = document.createElement('div');
  productCard.classList.add('w-72', 'h-max', 'm-4', 'rounded', 'mt-12');

  const productImage = document.createElement('img');
  productImage.classList.add(
    'w-72',
    'h-72',
    'border',
    'border-black',
    'rounded',
    'relative',
    'mb-2',
    'object-cover',
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

function getPageNumbers(pageCount, currentPage, visiblePages) {
  const pages = [];

  if (pageCount <= visiblePages) {
    for (let i = 1; i < pageCount; i++) {
      pages.push(i);
    }
  } else {
    const halfVisiblePages = Math.floor(visiblePages / 2);

    if (currentPage <= halfVisiblePages + 1) {
      for (let i = 1; i <= visiblePages - 1; i++) {
        pages.push(i);
      }

      pages.push('...');
      pages.push(pageCount);
    } else if (currentPage >= pageCount - halfVisiblePages) {
      pages.push(1);
      pages.push('...');

      for (let i = pageCount - visiblePages + 2; i <= pageCount; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push('...');
      for (let i = currentPage - halfVisiblePages + 1; i <= currentPage + halfVisiblePages - 1; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(pageCount);
    }
  }

  return pages;
}


function renderPagination() {
  const paginationContainer = document.createElement('div');
  paginationContainer.classList.add('flex', 'gap-4', 'content-center');

  const maxVisiblePages = 5;
  const pageNumbers = getPageNumbers(totalPages, currPage, maxVisiblePages);

  pageNumbers.forEach(page => {
    const pageButton = document.createElement('button');
    pageButton.textContent = page;
    pageButton.classList.add(
      'w-10',
      'h-10',
      'rounded-full',
      'border',
      'border-black',
    );

    if (currPage === page) {
      pageButton.classList.add('bg-gray-900', 'text-white');
    } else {
      pageButton.classList.remove('bg-gray-900', 'text-white');
    }

    if (page === '...') {
      pageButton.disabled = true;
      pageButton.classList.add('pointer-events-none');
    } else {
        pageButton.addEventListener('click', () => {
        currPage = page;

        fetchProducts(currPage).then(products => {
          const container = document.getElementById('products');
          container.innerHTML = '';
          products.forEach(product => {
            createProduct(product);
          });
        });
        renderPagination();
      });
    }

    paginationContainer.appendChild(pageButton);
  });

  const container = document.getElementById('pagination');
  container.innerHTML = '';
  container.appendChild(paginationContainer);
}

fetchProducts(currPage).then(products => {
  return products.forEach(product => {
    createProduct(product);
  });
}).then(() => {
  renderPagination();
});

function handleOpenCart() {
  const asideCart = document.querySelector('aside');
  asideCart.classList.remove('translate-x-full');
  asideCart.classList.remove('w-0');
  asideCart.classList.add('w-96');
}

function handleCloseCart() {
  const asideCart = document.querySelector('aside');
  asideCart.classList.add('translate-x-full');
  asideCart.classList.add('w-0');
  asideCart.classList.remove('w-96');
}

function handleOpenInfo() {
  const info = document.getElementById('info');
  const openButton = document.getElementById('more-info');
  openButton.classList.toggle('hidden');
  const closeButton = document.getElementById('less-info');
  closeButton.classList.toggle('hidden');
  
  info.classList.toggle('hidden');
}

const closeCartButton = document.getElementById('close');
const openCartButton = document.getElementById('cart');
const openInfoButton = document.getElementById('more-info');
const closeInfoButton = document.getElementById('less-info');

openCartButton.addEventListener('click', handleOpenCart);
closeCartButton.addEventListener('click', handleCloseCart);
openInfoButton.addEventListener('click', handleOpenInfo);
closeInfoButton.addEventListener('click', handleOpenInfo);
