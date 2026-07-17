// Uch tildagi ma'lumotlar bazasi
const translations = {
    uz: {
        heroTitle: "Kelajak Taomlari",
        all: "Barchasi",
        food: "Fast Food",
        drinks: "Ichimliklar",
        order: "Buyurtma",
        items: [
            { id: 1, category: 'fastfood', name: 'Kiber Burger', desc: 'Maxsus ko\'k pishloq va suvli kotlet bilan', price: '35 000 so\'m', emoji: '🍔' },
            { id: 2, category: 'drinks', name: 'Neon Kola', desc: 'Muzdek va tetiklashtiruvchi klassik ta\'m', price: '12 000 so\'m', emoji: '🥤' },
            { id: 3, category: 'fastfood', name: 'Kosmo Fri', desc: 'Yashirin ziravorlar bilan qovurilgan kartoshka', price: '18 000 so\'m', emoji: '🍟' },
            { id: 4, category: 'drinks', name: 'Elektro Klubnika', desc: 'Gazlangan qulupnayli mualliflik kokteyli', price: '20 000 so\'m', emoji: '🍹' },
            { id: 5, category: 'fastfood', name: 'Megasandvich', desc: 'Uch qavatli tovuqli dabdaba', price: '30 000 so\'m', emoji: '🥪' },
            { id: 6, category: 'drinks', name: 'Fanta Enerji', desc: 'Apelsinli yorqin energiya oqimi', price: '12 000 so\'m', emoji: '🍊' }
        ]
    },
    ru: {
        heroTitle: "Еда Будущего",
        all: "Все",
        food: "Фаст Фуд",
        drinks: "Напитки",
        order: "Заказать",
        items: [
            { id: 1, category: 'fastfood', name: 'Кибер Бургер', desc: 'С особым голубым сыром и сочной котлетой', price: '35 000 сум', emoji: '🍔' },
            { id: 2, category: 'drinks', name: 'Неон Кола', desc: 'Ледяной и освежающий классический вкус', price: '12 000 сум', emoji: '🥤' },
            { id: 3, category: 'fastfood', name: 'Космо Фри', desc: 'Хрустящий картофель с секретными специями', price: '18 000 сум', emoji: '🍟' },
            { id: 4, category: 'drinks', name: 'Электро Клубника', desc: 'Газированный авторский коктейль из клубники', price: '20 000 сум', emoji: '🍹' },
            { id: 5, category: 'fastfood', name: 'Мегасендвич', desc: 'Трехслойное куриное наслаждение', price: '30 000 сум', emoji: '🥪' },
            { id: 6, category: 'drinks', name: 'Фанта Энерджи', desc: 'Яркий заряд апельсиновой энергии', price: '12 000 сум', emoji: '🍊' }
        ]
    },
    en: {
        heroTitle: "Future Foods",
        all: "All",
        food: "Fast Food",
        drinks: "Drinks",
        order: "Order",
        items: [
            { id: 1, category: 'fastfood', name: 'Cyber Burger', desc: 'With special blue cheese and juicy patty', price: '35 000 som', emoji: '🍔' },
            { id: 2, category: 'drinks', name: 'Neon Cola', desc: 'Ice-cold and refreshing classic taste', price: '12 000 som', emoji: '🥤' },
            { id: 3, category: 'fastfood', name: 'Cosmo Fries', desc: 'Crispy potatoes with secret spices', price: '18 000 som', emoji: '🍟' },
            { id: 4, category: 'drinks', name: 'Electro Strawberry', desc: 'Sparkling signature strawberry cocktail', price: '20 000 som', emoji: '🍹' },
            { id: 5, category: 'fastfood', name: 'Megasandwich', desc: 'Three-layer chicken luxury', price: '30 000 som', emoji: '🥪' },
            { id: 6, category: 'drinks', name: 'Fanta Energy', desc: 'Bright burst of orange energy', price: '12 000 som', emoji: '🍊' }
        ]
    }
};

let currentLang = 'uz';
let currentCategory = 'all';

// Sayt birinchi marta yuklanganda ishga tushadi
window.onload = () => {
    renderMenu();
};

// Tilni o'zgartirish funksiyasi
function changeLanguage(lang) {
    currentLang = lang;
    
    // Tugmalardagi aktiv klassni yangilash
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    
    // Bosilgan tugmaga aktiv klass berish
    if(event && event.target) {
        event.target.classList.add('active');
    }

    // Matnlarni tarjima qilish
    document.getElementById('hero-title').innerText = translations[lang].heroTitle;
    document.getElementById('cat-all').innerText = translations[lang].all;
    document.getElementById('cat-food').innerText = translations[lang].food;
    document.getElementById('cat-drinks').innerText = translations[lang].drinks;

    renderMenu();
}

// Kategoriyani saralash
function filterMenu(category, button) {
    currentCategory = category;
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    renderMenu();
}

// Menyuni ekranga chiqarish
function renderMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';

    const langData = translations[currentLang];
    const filteredItems = currentCategory === 'all' 
        ? langData.items 
        : langData.items.filter(item => item.category === currentCategory);

    filteredItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-image-holder">${item.emoji}</div>
            <div class="card-body">
                <div class="card-title">${item.name}</div>
                <div class="card-desc">${item.desc}</div>
                <div class="card-footer">
                    <div class="price">${item.price}</div>
                    <button class="order-btn">${langData.order}</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}