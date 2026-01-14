// 1. بيانات الكتب (تم دمج رقم هاتفك 212761650250 في جميع الروابط)
const books = [
    {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        price: "150 DH",
        category: "Self-Help",
        img: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
        whatsappLink: "https://wa.me/212761650250?text=Salam,%20bghit%20nchri%20kitab%20Atomic%20Habits%20PDF"
    },
    {
        id: 2,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: "120 DH",
        category: "Finance",
        img: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
        whatsappLink: "https://wa.me/212761650250?text=Salam,%20bghit%20nchri%20kitab%20Rich%20Dad%20Poor%20Dad%20PDF"
    },
    {
        id: 3,
        title: "Clean Code",
        author: "Robert C. Martin",
        price: "350 DH",
        category: "Tech",
        img: "https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UF1000,1000_QL80_.jpg",
        whatsappLink: "https://wa.me/212761650250?text=Salam,%20bghit%20nchri%20kitab%20Clean%20Code%20PDF"
    },
    {
        id: 4,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        price: "180 DH",
        category: "Finance",
        img: "https://m.media-amazon.com/images/I/71TRUbcZikL._AC_UF1000,1000_QL80_.jpg",
        whatsappLink: "https://wa.me/212761650250?text=Salam,%20bghit%20nchri%20kitab%20The%20Psychology%20of%20Money%20PDF"
    },
    {
        id: 5,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: "100 DH",
        category: "Fiction",
        img: "https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",
        whatsappLink: "https://wa.me/212761650250?text=Salam,%20bghit%20nchri%20kitab%20The%20Alchemist%20PDF"
    },
    {
        id: 6,
        title: "Deep Work",
        author: "Cal Newport",
        price: "140 DH",
        category: "Self-Help",
        img: "https://m.media-amazon.com/images/I/71SL8d+fBGL._AC_UF1000,1000_QL80_.jpg",
        whatsappLink: "https://wa.me/212761650250?text=Salam,%20bghit%20nchri%20kitab%20Deep%20Work%20PDF"
    },
    {
        id: 7,
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        price: "200 DH",
        category: "Tech",
        img: "https://m.media-amazon.com/images/I/7185e68f3iL._AC_UF1000,1000_QL80_.jpg",
        whatsappLink: "https://wa.me/212761650250?text=Salam,%20bghit%20nchri%20kitab%20JS%20Good%20Parts%20PDF"
    },
    {
        id: 8,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        price: "110 DH",
        category: "Finance",
        img: "https://m.media-amazon.com/images/I/71UypkUjStL._AC_UF1000,1000_QL80_.jpg",
        whatsappLink: "https://wa.me/212761650250?text=Salam,%20bghit%20nchri%20kitab%20Think%20and%20Grow%20Rich%20PDF"
    }
];

// 2. دالة عرض الكتب
const container = document.getElementById('books-grid');

function renderBooks(filter = 'all') {
    container.innerHTML = '';
    
    const filteredBooks = filter === 'all' 
        ? books 
        : books.filter(book => book.category === filter);

    filteredBooks.forEach(book => {
        const card = `
            <div class="book-card">
                <img src="${book.img}" alt="${book.title}" class="book-img">
                <div class="card-body">
                    <span class="category-tag">${book.category}</span>
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">By ${book.author}</p>
                </div>
                <div class="card-footer">
                    <span class="price">${book.price}</span>
                    <a href="${book.whatsappLink}" target="_blank" class="buy-btn btn-whatsapp">
                        <i class="fab fa-whatsapp"></i> اطلب عبر واتساب
                    </a>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// 3. تفعيل الفلاتر
function filterBooks(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.includes(category) || (category === 'all' && btn.innerText === 'All')) {
            btn.classList.add('active');
        }
    });
    renderBooks(category);
}

// تشغيل الموقع
renderBooks();