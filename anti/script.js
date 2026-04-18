// Mock Data for NovaTechSupply
const products = [
    {
        id: 1,
        title: "Laptop Gaming Titan X9",
        category: "Laptops",
        price: 2499.99,
        image: "images/gaming_laptop_1776488826424.png",
        description: "Equipada con la última tarjeta gráfica RTX 4090 y procesador Intel Core i9 de 14ª generación. Disfruta de un rendimiento extremo para gaming y creación de contenido en su pantalla Mini-LED de 16 pulgadas a 240Hz.",
        inStock: true
    },
    {
        id: 2,
        title: "PlayStation 5",
        category: "Consolas",
        price: 549.99,
        image: "images/ps5_console_1776488844393.png",
        description: "Experimenta tiempos de carga ultrarrápidos, inmersión más profunda con retroalimentación háptica, gatillos adaptativos y audio 3D. Juega los títulos más increíbles en asombrosa resolución 4K y 120 fps.",
        inStock: true
    },
    {
        id: 7,
        title: "Control de PS5",
        category: "Consolas",
        price: 70,
        image: "images/controlps5.webp",
        description: "Experimenta tiempos de carga ultrarrápidos, inmersión más profunda con retroalimentación háptica, gatillos adaptativos y audio 3D. Juega los títulos más increíbles en asombrosa resolución 4K y 120 fps.",
        inStock: true
    },
    {
        id: 3,
        title: "iPhone 17 Pro Max",
        category: "Smartphones",
        price: 1199.99,
        image: "images/iphone17t.png",
        description: "Forjado en titanio de grado aeroespacial. Cuenta con el potente chip A17 Pro, el sistema de cámaras más avanzado jamás visto en un iPhone y un botón de acción personalizable.",
        inStock: true,
        variants: {
            colors: [
                { name: "Naranja Cosmico", code: "#df7700ff", image: "images/iphone17n.jpg" },
                { name: "Silver", code: "#b6b3b3ff", image: "images/iphone17.jpg" },
                { name: "Azul Profundo", code: "#090125ff", image: "images/iphone17a.jpg" }
            ],
            capacities: [
                { label: "256GB", priceAdd: 0 },
                { label: "512GB", priceAdd: 200 },
                { label: "1TB", priceAdd: 400 }
            ]
        }
    },
    {
        id: 4,
        title: "DualSense Wireless Controller",
        category: "Periféricos",
        price: 69.99,
        image: "images/ps5_controller_1776489034380.png",
        description: "Siente el juego con la retroalimentación háptica inmersiva. Su diseño ergonómico y micrófono integrado lo convierten en el compañero perfecto para tu PS5.",
        inStock: true
    },
    {
        id: 5,
        title: "MacBook Pro M3 Max",
        category: "Laptops",
        price: 3499.99,
        image: "images/gaming_laptop_1776488826424.png", // Reusing for now
        description: "Poder desatado. El chip M3 Max te brinda la velocidad que necesitas para compilar código en tiempo récord, renderizar modelos 3D complejos y editar video 8K sin sudar.",
        inStock: false
    },
    {
        id: 6,
        title: "Tóner Láser Premium Negro",
        category: "Accesorios",
        price: 89.99,
        image: "images/ps5_console_1776488844393.png", // Reusing for now
        description: "Impresiones nítidas y profesionales de la primera a la última página. Rendimiento superior de hasta 5,000 páginas con calidad constante de estudio.",
        inStock: false
    },
    {
        id: 8,
        title: "Monitor Gamer 4K 144Hz",
        category: "Periféricos",
        price: 699.99,
        image: "images/gaming_laptop_1776488826424.png",
        description: "Panel IPS con tiempo de respuesta de 1ms, HDR600 y colores vibrantes para la mejor experiencia competitiva.",
        inStock: true
    },
    {
        id: 9,
        title: "Teclado Mecánico RGB",
        category: "Periféricos",
        price: 129.99,
        image: "images/ps5_controller_1776489034380.png",
        description: "Switches mecánicos táctiles, iluminación personalizable por tecla y reposamuñecas ergonómico.",
        inStock: true
    },
    {
        id: 10,
        title: "Mouse Inalámbrico Pro",
        category: "Periféricos",
        price: 89.99,
        image: "images/ps5_controller_1776489034380.png",
        description: "Sensor de alta precisión 25K DPI, peso ligero de 63g y batería de larga duración.",
        inStock: true
    },
    {
        id: 11,
        title: "Samsung Galaxy S24 Ultra",
        category: "Smartphones",
        price: 1299.99,
        image: "images/latest_smartphone_1776488994084.png",
        description: "Cámara de 200MP, S-Pen integrado y el procesador Snapdragon 8 Gen 3 más potente.",
        inStock: true
    },
    {
        id: 12,
        title: "Laptop ASUS ROG Zephyrus",
        category: "Laptops",
        price: 1899.99,
        image: "images/gaming_laptop_1776488826424.png",
        description: "Ultra delgada con RTX 4070, pantalla OLED de 14 pulgadas y diseño elegante en aluminio.",
        inStock: true
    },
    {
        id: 13,
        title: "Nintendo Switch OLED",
        category: "Consolas",
        price: 349.99,
        image: "images/ps5_console_1776488844393.png",
        description: "Pantalla OLED de 7 pulgadas, soporte ajustable y audio mejorado para modo portátil.",
        inStock: true
    },
    {
        id: 14,
        title: "AirPods Pro (2da Gen)",
        category: "Accesorios",
        price: 249.99,
        image: "images/ps5_controller_1776489034380.png",
        description: "Cancelación de ruido activa mejorada, audio adaptativo y estuche con carga USB-C.",
        inStock: true
    },
    {
        id: 15,
        title: "Tarjeta Gráfica RTX 4080 Super",
        category: "Periféricos",
        price: 1099.99,
        image: "images/gaming_laptop_1776488826424.png",
        description: "El poder definitivo para gaming en 4K y trazado de rayos en tiempo real.",
        inStock: true
    },
    {
        id: 16,
        title: "iPad Pro M4",
        category: "Smartphones", // Or Tablets if I add a category, but keeping consistent
        price: 999.99,
        image: "images/latest_smartphone_1776488994084.png",
        description: "La tablet más potente del mundo con pantalla Tandem OLED y diseño increíblemente delgado.",
        inStock: true
    },
    {
        id: 17,
        title: "Xbox Series X",
        category: "Consolas",
        price: 499.99,
        image: "images/ps5_console_1776488844393.png",
        description: "La Xbox más rápida y potente de la historia. Juega miles de títulos de cuatro generaciones.",
        inStock: true
    },
    {
        id: 18,
        title: "Silla Gamer Premium",
        category: "Accesorios",
        price: 299.99,
        image: "images/ps5_controller_1776489034380.png",
        description: "Cuero sintético de alta calidad, soporte lumbar ajustable y reclinación de 180 grados.",
        inStock: true
    },
    {
        id: 19,
        title: "Disco Duro Externo 2TB",
        category: "Accesorios",
        price: 79.99,
        image: "images/ps5_controller_1776489034380.png",
        description: "USB 3.0 ultra rápido, diseño compacto y compatible con PC, Mac y Consolas.",
        inStock: true
    },
    {
        id: 20,
        title: "GoPro Hero 12 Black",
        category: "Accesorios",
        price: 399.99,
        image: "images/ps5_controller_1776489034380.png",
        description: "Video 5.3K, estabilización HyperSmooth 6.0 y resistente al agua hasta 10 metros.",
        inStock: true
    },
    {
        id: 21,
        title: "Laptop HP Victus 16",
        category: "Laptops",
        price: 949.99,
        image: "images/gaming_laptop_1776488826424.png",
        description: "Excelente relación calidad-precio con procesador Ryzen 7 y RTX 4050.",
        inStock: true
    },
    {
        id: 22,
        title: "Apple Watch Series 9",
        category: "Smartphones",
        price: 399.99,
        image: "images/latest_smartphone_1776488994084.png",
        description: "Sensores de salud avanzados, pantalla siempre activa y el nuevo chip S9.",
        inStock: true
    },
    {
        id: 23,
        title: "Cargador Rápido 100W GaN",
        category: "Accesorios",
        price: 49.99,
        image: "images/ps5_controller_1776489034380.png",
        description: "Tres puertos USB-C, tecnología GaN para menor calor y carga súper rápida.",
        inStock: true
    },
    {
        id: 24,
        title: "Auriculares Razer BlackShark V2",
        category: "Periféricos",
        price: 99.99,
        image: "images/ps5_controller_1776489034380.png",
        description: "Audio espacial THX, micrófono cardioide y almohadillas de espuma viscoelástica.",
        inStock: true
    },
    {
        id: 25,
        title: "Webcam 4K Ultra HD",
        category: "Periféricos",
        price: 159.99,
        image: "images/ps5_controller_1776489034380.png",
        description: "Ideal para streaming y conferencias con enfoque automático y micrófonos duales.",
        inStock: true
    },
    {
        id: 26,
        title: "Steam Deck OLED 512GB",
        category: "Consolas",
        price: 549.99,
        image: "images/ps5_console_1776488844393.png",
        description: "Toda tu biblioteca de Steam en la palma de tu mano con pantalla OLED HDR.",
        inStock: true
    },
    {
        id: 27,
        title: "Tóner Color Cian Premium",
        category: "Accesorios",
        price: 95.99,
        image: "images/ps5_console_1776488844393.png",
        description: "Colores intensos y duraderos para impresiones fotográficas de alta calidad.",
        inStock: true
    }
];

// State
let cart = JSON.parse(sessionStorage.getItem('novatech_cart')) || [];

// Update Cart Count Display
const updateCartCount = () => {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }
};

// DOM Elements
const productGrid = document.getElementById('product-grid');

// Format price as USD
const formatPrice = (price) => {
    return new Intl.NumberFormat('es-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
};

// Render Products
const renderProducts = (searchQuery = '') => {
    if (!productGrid) return;

    productGrid.innerHTML = '';
    const query = searchQuery.toLowerCase().trim();

    // Get filter states
    const stockFilterElement = document.getElementById('filter-stock');
    const showOnlyInStock = stockFilterElement ? stockFilterElement.checked : false;

    const categoryCheckboxes = document.querySelectorAll('.category-filter');
    let selectedCategories = [];
    categoryCheckboxes.forEach(cb => {
        if (cb.checked) {
            selectedCategories.push(cb.value.toLowerCase());
        }
    });

    const filteredProducts = products.filter(product => {
        // 1. Search filter
        const matchesSearch = product.title.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query);

        // 2. Category filter
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category.toLowerCase());

        // 3. Stock filter
        const matchesStock = !showOnlyInStock || product.inStock;

        return matchesSearch && matchesCategory && matchesStock;
    });

    let finalProducts = filteredProducts;

    // Only show featured items (e.g. top 3: Laptop, PS5, iPhone) on the home page if no search query
    if (productGrid.dataset.featured === 'true' && !query) {
        finalProducts = filteredProducts.filter(p => [1, 2, 3].includes(p.id));
    }

    // Update results count if element exists
    const resultsCountElement = document.getElementById('results-count');
    if (resultsCountElement) {
        resultsCountElement.textContent = `${finalProducts.length} productos encontrados`;
    }

    if (finalProducts.length === 0) {
        productGrid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 4rem; color: var(--text-secondary);"><h3>No se encontraron productos que coincidan con tu búsqueda y filtros.</h3></div>';
        return;
    }

    finalProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = `product-card ${!product.inStock ? 'out-of-stock' : ''}`;
        // Add staggered delay for animation
        productCard.style.animationDelay = `${index * 0.15}s`;
        productCard.style.position = 'relative'; // For the out of stock badge

        const badgeHTML = !product.inStock ? '<div class="out-of-stock-badge">Sin Stock</div>' : '';
        const addToCartBtn = product.inStock ?
            `<button class="add-to-cart" onclick="addToCart(${product.id}, '${product.title}')"><i class="fa-solid fa-cart-plus"></i> Agregar al carrito</button>` :
            `<button class="add-to-cart" style="background: #ef4444; cursor: not-allowed;" disabled>Agotado</button>`;

        productCard.innerHTML = `
            ${badgeHTML}
            <a href="producto.html?id=${product.id}" style="text-decoration: none; color: inherit; display: contents;">
                <div style="overflow: hidden;">
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                </div>
            </a>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <a href="producto.html?id=${product.id}" style="text-decoration: none; color: inherit;">
                    <h3 class="product-title" style="transition: color 0.3s;" onmouseover="this.style.color='var(--primary-color)'" onmouseout="this.style.color='var(--text-primary)'">${product.title}</h3>
                </a>
                <span class="product-price">${formatPrice(product.price)}</span>
                ${addToCartBtn}
            </div>
        `;

        productGrid.appendChild(productCard);
    });
};

// Add to Cart Logic
const addToCart = (productId, title, color = null, capacity = null, priceOverride = null) => {
    // Check if an item with the same ID AND variants already exists
    const existingItem = cart.find(item =>
        item.id === productId &&
        item.color === color &&
        item.capacity === capacity
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        const product = products.find(p => p.id === productId);
        cart.push({
            id: productId,
            quantity: 1,
            color: color,
            capacity: capacity,
            price: priceOverride || product.price
        });
    }

    sessionStorage.setItem('novatech_cart', JSON.stringify(cart));
    updateCartCount();

    // Add an animation effect to the cart icon
    const cartIcon = document.querySelector('.cart i');
    cartIcon.style.transform = 'scale(1.4)';
    cartIcon.style.color = 'var(--primary-color)';

    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
        cartIcon.style.color = '';
    }, 250);

    // Show a small toast notification
    showToast(`¡${title} agregado al carrito!`);
};

const showToast = (message) => {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.style.position = 'fixed';
    toast.style.bottom = '30px';
    toast.style.right = '30px';
    toast.style.background = 'var(--accent-color)';
    toast.style.color = 'white';
    toast.style.padding = '1.2rem 2rem';
    toast.style.borderRadius = '12px';
    toast.style.boxShadow = '0 15px 30px rgba(0,0,0,0.4)';
    toast.style.zIndex = '1000';
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
    toast.style.fontWeight = '600';
    toast.innerHTML = `<i class="fa-solid fa-check-circle" style="margin-right: 8px;"></i> ${message}`;

    document.body.appendChild(toast);

    // Trigger animation
    setTimeout(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
    }, 10);

    // Remove after 3.5 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(30px)';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 400);
    }, 3500);
};

// State for product detail variants
let selectedColor = "";
let selectedCapacity = "";
let currentBasePrice = 0;

const selectColor = (colorName, imageUrl, element) => {
    selectedColor = colorName;
    document.querySelectorAll('.color-option').forEach(el => el.classList.remove('active'));
    element.classList.add('active');

    const mainImg = document.querySelector('.product-detail-image');
    if (mainImg) {
        mainImg.style.opacity = '0';
        setTimeout(() => {
            mainImg.src = imageUrl;
            mainImg.style.opacity = '1';
        }, 200);
    }

    updateDetailPrice();
};

const selectCapacity = (capacityLabel, priceAdd, element) => {
    selectedCapacity = capacityLabel;
    currentBasePrice = element.dataset.basePrice;
    const finalPrice = parseFloat(currentBasePrice) + priceAdd;

    document.querySelectorAll('.capacity-option').forEach(el => el.classList.remove('active'));
    element.classList.add('active');

    document.querySelector('.product-detail-price').textContent = formatPrice(finalPrice);
    updateDetailPrice();
};

const updateDetailPrice = () => {
    // This is mainly handled inside the select functions now for immediate feedback
};

// Render Single Product Detail
const renderSingleProduct = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (!productId) return;

    const product = products.find(p => p.id === productId);
    if (!product) {
        document.getElementById('product-detail-container').innerHTML = '<h2 style="text-align: center; margin-top: 4rem;">Producto no encontrado</h2>';
        return;
    }

    document.title = `${product.title} - NovaTechSupply`;

    // Reset selection state
    selectedColor = product.variants ? product.variants.colors[0].name : null;
    selectedCapacity = product.variants ? product.variants.capacities[0].label : null;
    const initialPrice = product.price + (product.variants ? product.variants.capacities[0].priceAdd : 0);

    let variantHTML = '';
    if (product.variants) {
        variantHTML = `
            <div class="product-variants">
                <div class="variant-group">
                    <label>Color: <span id="selected-color-name">${selectedColor}</span></label>
                    <div class="color-options">
                        ${product.variants.colors.map((c, i) => `
                            <div class="color-option ${i === 0 ? 'active' : ''}" 
                                 style="background-color: ${c.code}" 
                                 onclick="selectColor('${c.name}', '${c.image}', this); document.getElementById('selected-color-name').textContent='${c.name}'"
                                 title="${c.name}">
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="variant-group">
                    <label>Capacidad:</label>
                    <div class="capacity-options">
                        ${product.variants.capacities.map((cap, i) => `
                            <div class="capacity-option ${i === 0 ? 'active' : ''}" 
                                 data-base-price="${product.price}"
                                 onclick="selectCapacity('${cap.label}', ${cap.priceAdd}, this)">
                                ${cap.label}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    const container = document.getElementById('product-detail-container');
    container.innerHTML = `
        <div class="product-detail">
            <div class="product-detail-image-container">
                <img src="${product.variants ? product.variants.colors[0].image : product.image}" alt="${product.title}" class="product-detail-image">
            </div>
            <div class="product-detail-info">
                <span class="product-category">${product.category}</span>
                <h1 class="product-detail-title">${product.title}</h1>
                <p class="product-detail-description">${product.description}</p>
                <div class="product-detail-price">${formatPrice(initialPrice)}</div>
                
                ${variantHTML}
                
                <div class="product-actions">
                    <button class="add-to-cart detail-btn" onclick="const p = products.find(prod => prod.id === ${product.id}); const finalP = parseFloat(document.querySelector('.product-detail-price').textContent.replace(/[^0-9.]/g, '')); addToCart(${product.id}, '${product.title}', selectedColor, selectedCapacity, finalP)">
                        <i class="fa-solid fa-cart-plus"></i> Agregar al carrito
                    </button>
                </div>
                
                <div class="product-features">
                    <div class="feature"><i class="fa-solid fa-truck-fast"></i> Envío gratis a todo el país</div>
                    <div class="feature"><i class="fa-solid fa-shield-halved"></i> Garantía oficial de 1 año</div>
                    <div class="feature"><i class="fa-solid fa-rotate-left"></i> Devolución garantizada de 30 días</div>
                </div>
            </div>
        </div>
    `;
};

// Cart Page Logic
const renderCartPage = () => {
    const container = document.getElementById('cart-items-container');
    if (!container) return;

    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 3rem; color: var(--text-secondary);">Tu carrito está vacío. <br><br><a href="catalogo.html" class="cta-button" style="text-decoration:none; display:inline-block; margin-top: 1rem;">Ir al catálogo</a></div>';
        updateOrderSummary();
        return;
    }

    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.id);
        if (!product) return;

        const variantInfo = cartItem.color || cartItem.capacity ?
            `<div class="cart-item-variant" style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--primary-color);">
                ${cartItem.color ? `Color: ${cartItem.color}` : ''} 
                ${cartItem.color && cartItem.capacity ? ' | ' : ''} 
                ${cartItem.capacity ? `Capacidad: ${cartItem.capacity}` : ''}
            </div>` : '';

        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="cart-item-img">
            <div class="cart-item-details">
                <span class="cart-item-category">CATEGORY: ${product.category}</span>
                <div class="cart-item-title">${product.title}</div>
                ${variantInfo}
                <div class="cart-item-desc">${product.description}</div>
                
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn" onclick="updateCartQuantity(${product.id}, -1, '${cartItem.color || ''}', '${cartItem.capacity || ''}')">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <span class="quantity-display">${cartItem.quantity.toString().padStart(2, '0')}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity(${product.id}, 1, '${cartItem.color || ''}', '${cartItem.capacity || ''}')">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                    <button class="remove-btn" onclick="removeCartItem(${product.id}, '${cartItem.color || ''}', '${cartItem.capacity || ''}')">
                        <i class="fa-regular fa-trash-can"></i> Remove
                    </button>
                </div>
            </div>
            <div class="cart-item-price">${formatPrice(cartItem.price * cartItem.quantity)}</div>
        `;
        container.appendChild(itemEl);
    });

    updateOrderSummary();
};

const updateCartQuantity = (productId, change, color = null, capacity = null) => {
    const item = cart.find(i =>
        i.id === productId &&
        i.color === color &&
        i.capacity === capacity
    );
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i !== item);
        }
        sessionStorage.setItem('novatech_cart', JSON.stringify(cart));
        updateCartCount();
        renderCartPage();
    }
};

const removeCartItem = (productId, color = null, capacity = null) => {
    cart = cart.filter(i =>
        !(i.id === productId && i.color === color && i.capacity === capacity)
    );
    sessionStorage.setItem('novatech_cart', JSON.stringify(cart));
    updateCartCount();
    renderCartPage();
};

const updateOrderSummary = () => {
    const subtotalEl = document.getElementById('summary-subtotal');
    if (!subtotalEl) return;

    let subtotal = 0;
    cart.forEach(cartItem => {
        subtotal += (cartItem.price || 0) * cartItem.quantity;
    });

    const shipping = subtotal > 0 ? 25.00 : 0;
    const tax = subtotal * 0.05;
    const total = subtotal + shipping + tax;

    subtotalEl.textContent = formatPrice(subtotal);
    document.getElementById('summary-shipping').textContent = formatPrice(shipping);
    document.getElementById('summary-tax').textContent = formatPrice(tax);
    document.getElementById('summary-total').textContent = formatPrice(total);
};

// Checkout Functions
const checkoutWhatsApp = () => {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    const clientNameInput = document.getElementById('client-name');
    const clientName = clientNameInput && clientNameInput.value.trim() !== '' ? clientNameInput.value.trim() : '';

    let subtotal = 0;
    let message = clientName ? `Hola NovaTechSupply, soy ${clientName} y me gustaría realizar el siguiente pedido:\n\n` : `Hola NovaTechSupply, me gustaría realizar el siguiente pedido:\n\n`;

    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.id);
        if (product) {
            let itemDesc = product.title;
            if (cartItem.color || cartItem.capacity) {
                itemDesc += ` (${cartItem.color || ''} ${cartItem.capacity || ''})`;
            }
            message += `- ${cartItem.quantity}x ${itemDesc} (${formatPrice(cartItem.price)})\n`;
            subtotal += cartItem.price * cartItem.quantity;
        }
    });

    const shipping = 25.00;
    const tax = subtotal * 0.05;
    const total = subtotal + shipping + tax;

    message += `\nSubtotal: ${formatPrice(subtotal)}\n`;
    message += `Envío (Express): ${formatPrice(shipping)}\n`;
    message += `Impuestos (5%): ${formatPrice(tax)}\n`;
    message += `*Total a Pagar: ${formatPrice(total)}*\n\n`;
    message += "¿Cuáles son los pasos a seguir para el pago?";

    const phoneNumber = "1234567890"; // Dummy number
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};

const downloadPDF = () => {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    const clientNameInput = document.getElementById('client-name');
    const clientName = clientNameInput && clientNameInput.value.trim() !== '' ? clientNameInput.value.toUpperCase() : 'VALIOSO CLIENTE';

    let subtotal = 0;
    let rowsHTML = '';

    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.id);
        if (product) {
            const rowTotal = cartItem.price * cartItem.quantity;
            subtotal += rowTotal;
            let itemDesc = product.title;
            if (cartItem.color || cartItem.capacity) {
                itemDesc += `<br><small style="color:#666">${cartItem.color || ''} | ${cartItem.capacity || ''}</small>`;
            }
            rowsHTML += `
                <tr>
                    <td>${cartItem.quantity}x ${itemDesc}</td>
                    <td>${product.category}</td>
                    <td>${formatPrice(rowTotal)}</td>
                </tr>
            `;
        }
    });

    const shipping = 25.00;
    const tax = subtotal * 0.05;
    const total = subtotal + shipping + tax;

    // Add extra rows for shipping and tax
    rowsHTML += `
        <tr>
            <td>Envío (Express)</td>
            <td>-</td>
            <td>${formatPrice(shipping)}</td>
        </tr>
        <tr>
            <td>Impuestos (5%)</td>
            <td>-</td>
            <td>${formatPrice(tax)}</td>
        </tr>
    `;

    const today = new Date();
    const dateString = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    const quoteNumber = Math.floor(1000 + Math.random() * 9000);

    const printSection = document.getElementById('print-section');
    if (!printSection) return;

    printSection.innerHTML = `
        <div class="quote-header">
            <div class="quote-logo">
                <i class="fa-solid fa-microchip"></i> NovaTechSupply
            </div>
            <div class="quote-company-info">
                <p>Caracas, Venezuela</p>
                <p>WhatsApp: +58 424-2333194</p>
            </div>
        </div>
        
        <hr class="quote-divider">
        
        <div class="quote-meta">
            <div class="quote-meta-col">
                <div class="quote-meta-row">
                    <span class="quote-meta-label">CLIENTE:</span>
                    <span>${clientName}</span>
                </div>
            </div>
            <div class="quote-meta-col">
                <div class="quote-meta-row">
                    <span class="quote-meta-label">COTIZACIÓN:</span>
                    <span>#${quoteNumber}</span>
                </div>
                <div class="quote-meta-row">
                    <span class="quote-meta-label">FECHA:</span>
                    <span>${dateString}</span>
                </div>
            </div>
        </div>
        
        <table class="quote-table">
            <thead>
                <tr>
                    <th>PRODUCTO</th>
                    <th>DETALLE / VERSIÓN</th>
                    <th>SUBTOTAL</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHTML}
            </tbody>
        </table>
        
        <div class="quote-total">
            TOTAL A PAGAR: &nbsp;&nbsp;${formatPrice(total)}
        </div>
    `;

    setTimeout(() => {
        window.print();
    }, 100);
};

// Setup global cart icon click
const setupCartIconRedirect = () => {
    const cartIcons = document.querySelectorAll('.cart');
    cartIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            window.location.href = 'carrito.html';
        });
    });
};

// Setup Search
const setupSearch = () => {
    const searchInputs = document.querySelectorAll('.search-bar input');
    const searchButtons = document.querySelectorAll('.search-bar button');

    const executeSearch = (query) => {
        const trimmedQuery = query.trim();
        if (!trimmedQuery && !window.location.pathname.includes('catalogo.html')) return;

        // If we are not on the catalog page or index page, redirect to catalog with query
        // Actually, the easiest approach for all pages is redirect to catalogo.html with search param
        if (!window.location.pathname.includes('catalogo.html')) {
            window.location.href = `catalogo.html?search=${encodeURIComponent(trimmedQuery)}`;
        } else {
            // Update URL without reloading
            const newUrl = new URL(window.location.href);
            if (trimmedQuery) {
                newUrl.searchParams.set('search', trimmedQuery);
            } else {
                newUrl.searchParams.delete('search');
            }
            window.history.pushState({}, '', newUrl);
            renderProducts(trimmedQuery);
        }
    };

    searchInputs.forEach((input, index) => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                executeSearch(e.target.value);
            }
        });

        // Live search if we have a product grid on the page
        input.addEventListener('input', (e) => {
            if (document.getElementById('product-grid')) {
                const query = e.target.value.trim();
                const newUrl = new URL(window.location.href);
                if (query) {
                    newUrl.searchParams.set('search', query);
                } else {
                    newUrl.searchParams.delete('search');
                }
                window.history.replaceState({}, '', newUrl);
                renderProducts(query);
            }
        });

        // Setup button click
        if (searchButtons[index]) {
            searchButtons[index].addEventListener('click', () => {
                executeSearch(input.value);
            });
        }
    });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    setupCartIconRedirect();
    setupSearch();

    if (document.getElementById('product-grid')) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchParam = urlParams.get('search') || '';

        // Set the search input value if param exists
        const searchInputs = document.querySelectorAll('.search-bar input');
        searchInputs.forEach(input => {
            input.value = searchParam;
        });

        renderProducts(searchParam);
    }

    if (document.getElementById('product-detail-container')) {
        renderSingleProduct();
    }
    if (document.getElementById('cart-items-container')) {
        renderCartPage();
    }
});
