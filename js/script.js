// User Deatils
async function fetchuserapiData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('API Failed to Fetch');
        }
        let userDetails = await response.json();
        displayuserapiData(userDetails);
    }
    catch (error) {
        console.error('Failed To get the user data');
    };
}
function displayuserapiData(userInfo) {
    const usersContainer = document.getElementById('users-container');
    userInfo.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('col-12', 'col-sm-12', 'col-md-6');
        div.innerHTML = `<div class="user-details-list rounded-2 p-3 mb-4 shadow-sm">
  <div class="row g-4 align-items-center">
    <div class="col-12 col-lg-4 text-center">
      <img src="./images/user.png" alt="User Image" class="img-fluid rounded-circle" style="width: 8rem; height: 8rem; object-fit: cover;" />
    </div>
    <div class="col-12 col-lg-8">
      <div class="user-info">
        <div class="row mb-2  text-start">
          <div class="col-3 fw-bold">User</div>
          <div class="col-1">:</div>
          <div class="col-8">${user.username}</div>
        </div>
        <div class="row mb-2 text-start">
          <div class="col-3 fw-bold">Name</div>
          <div class="col-1">:</div>
          <div class="col-8">${user.name}</div>
        </div>
        <div class="row mb-2 text-start">
          <div class="col-3 fw-bold">Email</div>
          <div class="col-1">:</div>
          <div class="col-8">${user.email}</div>
        </div>
        <div class="row mb-2 text-start">
          <div class="col-3 fw-bold">Phone</div>
          <div class="col-1">:</div>
          <div class="col-8">${user.phone}</div>
        </div>
        <div class="row mb-2 text-start">
          <div class="col-3 fw-bold">Website</div>
          <div class="col-1">:</div>
          <div class="col-8">${user.website}</div>
        </div>
        <div class="row mb-2 text-start">
          <div class="col-3 fw-bold">Company</div>
          <div class="col-1">:</div>
          <div class="col-8">${user.company.name}</div>
        </div>
        <div class="row mb-2 text-start">
          <div class="col-3 fw-bold">Address</div>
          <div class="col-1">:</div>
          <div class="col-8">${user.address.street}, ${user.address.city}</div>
        </div>
      </div>
      <div class="d-flex justify-content-end gap-2 mt-3">
        <a href="mailto:${user.email}" class="btn btn-outline-primary">Message</a>
        <a href="tel:${user.phone}" class="btn btn-outline-success">Call</a>
      </div>
    </div>
  </div>
</div>`;

        usersContainer.appendChild(div);
    })
}
// Product Details
async function fetchproductapiData() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('API Failed to Fetch');
        }
        let productData = await response.json();
        console.log(productData);
        displayproductapiData(productData);
    }
    catch (error) {
        console.error('Failed to get the product data');
    }
}
function displayproductapiData(productsInfo) {
    const productsContainer = document.getElementById('products-container');
    productsInfo.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('col-12', 'col-sm-12', 'col-md-6', 'col-lg-4');
        div.innerHTML = `
   <div class="product-details-list rounded-2 p-3 flex flex-col space-y-2">
  <div class="d-flex justify-content-center align-items-center">
    <img class="w-48 h-48 object-contain" src='${product.image}' alt='${product.title}' />
  </div>
  <h4 class="product-title">${product.title}</h4>
  <p class="text-start line-clamp-4 product-description">${product.description}</p>
  <p class="product-category rounded-full btn btn-outline-success text-start d-flex justify-content-start w-fit">${product.category}</p>
  <div class="d-flex justify-content-between w-100 gap-4">
  <p class="product-price fw-semibold">Rs. ${product.price}</p>
  <p class="product-rating fw-semibold">${product.rating.count}(${product.rating.rate})</p></div>
<div class="d-flex justify-content-end w-100 gap-4">
  <button type="button"  class="btn btn-warning add-toCart">Add to cart</button>
  <button type="button" class="btn btn-primary buy-now">Buy now</button>
</div>

</div>
`;
    productsContainer.appendChild(div);
     const addToCart = div.querySelector('.add-toCart');
  addToCart.addEventListener('click', () => {
    alert(`Added ${product.title} is cart successfully`);
  });
   const buyNow = div.querySelector('.buy-now');
  buyNow.addEventListener('click', () => {
    alert(`Buyed ${product.title} successfully`);
  });
    
    })
}