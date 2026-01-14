const books = [
    // Best Sellers & Finance
    {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        price: "150 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
    },
    {
        id: 2,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: "120 DH",
        category: "Finance",
        img: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg"
    },
    {
        id: 3,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        price: "180 DH",
        category: "Finance",
        img: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg"
    },
    {
        id: 4,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: "100 DH",
        category: "Fiction",
        img: "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg"
    },
    {
        id: 5,
        title: "Deep Work",
        author: "Cal Newport",
        price: "140 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg"
    },
    {
        id: 6,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        price: "110 DH",
        category: "Finance",
        img: "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg"
    },
    // New Self-Help Collection
    {
        id: 7,
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        price: "160 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9780743269513-L.jpg"
    },
    {
        id: 8,
        title: "Can't Hurt Me",
        author: "David Goggins",
        price: "170 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9781544512280-L.jpg"
    },
    {
        id: 9,
        title: "How to Win Friends & Influence People",
        author: "Dale Carnegie",
        price: "130 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg"
    },
    {
        id: 10,
        title: "The Power of Now",
        author: "Eckhart Tolle",
        price: "140 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg"
    },
    {
        id: 11,
        title: "Mindset: The New Psychology of Success",
        author: "Carol S. Dweck",
        price: "150 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9780345472328-L.jpg"
    },
    {
        id: 12,
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        price: "140 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg"
    },
    {
        id: 13,
        title: "12 Rules for Life",
        author: "Jordan B. Peterson",
        price: "180 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9780345816023-L.jpg"
    },
    {
        id: 14,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        price: "190 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9780374275631-L.jpg"
    },
    {
        id: 15,
        title: "Man's Search for Meaning",
        author: "Viktor E. Frankl",
        price: "120 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9780807014295-L.jpg"
    },
    {
        id: 16,
        title: "The 48 Laws of Power",
        author: "Robert Greene",
        price: "200 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9780140280197-L.jpg"
    },
    {
        id: 17,
        title: "Ego Is the Enemy",
        author: "Ryan Holiday",
        price: "140 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9781591847816-L.jpg"
    },
    {
        id: 18,
        title: "Grit",
        author: "Angela Duckworth",
        price: "160 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9781501111105-L.jpg"
    },
    {
        id: 19,
        title: "The 5 AM Club",
        author: "Robin Sharma",
        price: "150 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9781443456623-L.jpg"
    },
    {
        id: 20,
        title: "Start with Why",
        author: "Simon Sinek",
        price: "150 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9781591846444-L.jpg"
    },
    {
        id: 21,
        title: "Limitless",
        author: "Jim Kwik",
        price: "170 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9781401958237-L.jpg"
    },
    {
        id: 22,
        title: "Make Your Bed",
        author: "William H. McRaven",
        price: "100 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9781455570249-L.jpg"
    },
    {
        id: 23,
        title: "You Are a Badass",
        author: "Jen Sincero",
        price: "130 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9780762447695-L.jpg"
    },
    {
        id: 24,
        title: "Daring Greatly",
        author: "Brené Brown",
        price: "140 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9781592408412-L.jpg"
    },
    {
        id: 25,
        title: "Essentialism",
        author: "Greg McKeown",
        price: "140 DH",
        category: "Self-Help",
        img: "https://covers.openlibrary.org/b/isbn/9780804137386-L.jpg"
    }
];

const container = document.getElementById('books-grid');
const myPhoneNumber = "212761650250"; 

function renderBooks(filter = 'all') {
    container.innerHTML = '';
    
    const filteredBooks = filter === 'all' 
        ? books 
        : books.filter(book => book.category === filter);

    filteredBooks.forEach(book => {
        const message = `Hello! I am interested in buying the PDF version of *${book.title}*. Is it available?`;
        const encodedMessage = encodeURIComponent(message);
        const finalLink = `https://wa.me/${myPhoneNumber}?text=${encodedMessage}`;

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
                    <a href="${finalLink}" target="_blank" class="buy-btn btn-whatsapp">
                        <i class="fab fa-whatsapp"></i> Order on WhatsApp
                    </a>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

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

renderBooks();