document.addEventListener('DOMContentLoaded', () => {
    // --- Data Storage (Keep this exactly as provided previously) ---
    const books = [
    // ... taj Baloch 1 
         // ... Taj Baloch man e razadag ey kessa
       
         {
            id: 'a24', title: 'منء رھزادگءِ کِسّہ (دومی چاپ)', authorId: 'b18', authorName: 'تاج بلوچ',
            price: '600', edition: 'شائری', pages: 128, publicationDate: 'اکتوبر 2025',
            image: 'Images/book_Covers/taj_baloch_1.jpeg' 
        },
        
        // ... (your 22 book objects, sorted by publicationDate)
       
        {
            id: 'a23', title: 'نہ مُلک مُلکے نہ درمُلک (دومی چاپ)', authorId: 'b17', authorName: 'ساجد حسین',
            price: '800', edition: 'گچین', pages: 200, publicationDate: '2025-مئی',
            image: 'Images/book_Covers/Sajid-Hussain-2-b17.jpg' 
        },
        //Naeem Pirjan Taxi e goshtag e kessa awali chap
        {
            id: 'a22', title: 'ٹیکسیءَ گُشتگیں کِسّه (دومی چاپ)', authorId: 'b02', authorName: 'نعیم پیرجان',
            price: '400', edition: 'رجانک/آزمانک', pages: 106, publicationDate: '2025-مارچ',
            image: 'Images/book_Covers/Taxi-1-b02.jpeg'
        },
        {
            id: 'a21', title: 'نہ مُلک مُلکے نہ درمُلک', authorId: 'b17', authorName: 'ساجد حسین',
            price: '800', edition: 'گچین', pages: 200, publicationDate: '2025-فروری',
            image: 'Images/book_Covers/Sajid-Hussain-1-b17.jpg'
        },
        {
            id: 'a20', title:'سنجاپ-1', authorId: 'b02', authorName: 'نعیم پیرجان',
            price: '600', edition: 'رجانک/آزمانک', pages: 206, publicationDate: '2025-فروری',
            image: 'Images/book_Covers/Sanjaap-1-b02.jpg'
        },
        {
            id: 'a19', title: 'کِسّه کار سائیکو (دومی چاپ)', authorId: 'b16', authorName: 'شهزاد عبید',
            price: '400', edition: 'آزمانک', pages: 114, publicationDate: '2024-نومبر',
            image: 'Images/book_Covers/Kissakar-2-b16.jpg'
        },
        {
            id: 'a18', title: 'کِسّه کار سائیکو', authorId: 'b16', authorName: 'شهزاد عبید',
            price: '400', edition: 'آزمانک', pages: 114, publicationDate: '2024-اکتوبر',
            image: 'Images/book_Covers/Kissakar-1-b16.jpg'
        },
        {
            id: 'a17', title:'تهار ماه (دومی چاپ)', authorId: '[b14,b15]', authorName: 'منصور علیمرادی/محمد امیری',
            price: '600', edition: 'رجانک/گدار', pages: 244, publicationDate: '2024-مئی',
            image: 'Images/book_Covers/Tahar-mah-b15-b14.jpg'
        },

        {
            id: 'a16', title: 'نْیادانک-2', authorId: 'b04', authorName: 'عباس حسن',
            price: '600', edition: 'تاکبند', pages: 269, publicationDate: '2024-فروری',
            image:  'Images/book_Covers/Nyadank-2-b04.jpg'
        },
        {
            id: 'a15', title: 'کپودرے ءِ زهیر گار اَنت', authorId: 'b01', authorName: 'سلمان ابراهیم',
            price: '600', edition: 'شائری', pages: 128, publicationDate: '2024-فروری',
           image:  'Images/book_Covers/کپودرء زهیرگارنت-b01.jpg'
        },
        {
            id: 'a14', title: 'بلوچی ءَ کِسّهی لبزانک ءِ رجانک', authorId: 'b13', authorName: 'رحیم مهر',
            price: '1000', edition: 'پولکاری', pages: 420, publicationDate: '2024-فروری',
            image:  'Images/book_Covers/Balochi_kessai_Labzank_o_Rajank-Raheem-Mehr-b13.jpg'
        },
        {
            id: 'a13', title: 'پاس جنان اِنت دروازگ', authorId: 'b06', authorName: 'منیر مومن',
            price: '600', edition: 'شائری', pages: 111, publicationDate: '2024-فروری',
            image:  'Images/book_Covers/Pas_Janan_inth_Darwazag - Muneer Momin-b06.jpg'
        },
        {
            id: 'a12', title: 'گوناپ-2 (عربی لبزانک)', authorId: 'b01', authorName: 'سلمان ابراهیم',
            price: '800', edition: 'تاکبند', pages: 421, publicationDate: '2023-اکتوبر',
           image:  'Images/book_Covers/Gonaap_2_arabi-b01.jpg'
        },
        {
            id: 'a11', title: 'ایرمانیں شهر', authorId: 'b12', authorName: 'اے آر داد',
            price: '400', edition: 'آزمانک', pages: 124, publicationDate: '2023-اکتوبر',
            image:  'Images/book_Covers/A_R_daad-b12.jpg'
        },
        {
            id: 'a10', title: 'پیاپیں زِرنود', authorId: 'b11', authorName: 'چراغ حاجت',
            price: '500', edition: 'شائری', pages: 120, publicationDate: '2023-اگست',
            image:  'Images/book_Covers/Chirag_Haajath-b11.jpg'
        },
        {
            id: 'a09', title: 'درامد (دومی چاپ)', authorId: 'b09', authorName: 'البیر کامیو/ ڈاکٹر بیزن صبا',
            price: '350', edition: 'رجانک/گدار', pages: 112, publicationDate: '2023-جون',
           image:  'Images/book_Covers/Daramad_DrBizanSaba-b09.jpg'
        },
        {
            id: 'a08', title: 'دریا سبزیں بازارے (دومی چاپ)', authorId: 'b07', authorName: 'خالق ارمان',
            price: '500', edition: 'شائری', pages: 158, publicationDate: '2023-جون',
            image:  'Images/book_Covers/DaryaSabzEBazaarE-2-b07.jpg'
        },
        {
            id: 'a07', title: 'نْیادانک-1', authorId: 'b04', authorName: 'عباس حسن',
            price: '400', edition: 'تاکبند', pages: 201, publicationDate: '2023-فروری',
            image:  'Images/book_Covers/Neyadaank-b04.jpg'
        },
        {
            id: 'a06', title: 'سنگ صبور', authorId: 'b02', authorName: 'صادق چوبک/ نعیم پیرجان',
            price: '500', edition: 'رجانک/گدار', pages: 216, publicationDate: '2023-فروری',
            image:  'Images/book_Covers/Sang-e-saboor-b08-b02.jpg'
        },
        {
            id: 'a05', title: 'دریا سبزیں بازارے', authorId: 'b07', authorName: 'خالق ارمان',
            price: '500', edition: 'شائری', pages: 147, publicationDate: '2023-فروری',
            image:  'Images/book_Covers/daryaSabzEBazaarE-b07.jpg'
        },
        {
            id: 'a04', title: 'استال شپاد ءَ گردَنت (دومی چاپ)', authorId: 'b06', authorName: 'منیر مومن',
            price: '400', edition: 'شائری', pages: 93, publicationDate: '2022-اکتوبر',
           image:  'Images/book_Covers/astal_shepada_gardan-b06.jpg'
        },
        {
            id: 'a03', title: 'کِسّه گْوشیں دل', authorId: 'b04', authorName: 'ایڈگر ایلن پو/ عباس حسن',
            price: '300', edition: 'رجانک/آزمانک', pages: 164, publicationDate: '2022-اگست',
            image:  'Images/book_Covers/Kessa_goshen_dil-b04.jpg'
        },
        {
            id: 'a02', title: 'ٹیکسی ءَ گُشتگیں کِسّه', authorId: 'b02', authorName: 'سروش صحت/ نعیم پیرجان',
            price: '250', edition: 'رجانک/آزمانک', pages: 106, publicationDate: '2022-اپریل',
            image:  'Images/book_Covers/Taxi-2-b02.jpeg.jpg' 
        },
        {
            id: 'a01', title: 'گوناپ-1 (فارسی لبزانک)', authorId: 'b01', authorName: 'سلمان ابراهیم',
            price: '400', edition: 'تاکبند', pages: 373, publicationDate: '2022-فروری',
           image:  'Images/book_Covers/gonaap-farsi-b01.jpg'
        },
    ];

    const authors = [
        // ... (your author objects)
        {
            authorId: 'b01', name: 'سلمان ابراهیم',
            bio: '',
            image: 'images/author1.jpg'
        },
        {
            authorId: 'b02', name: 'نعیم پیرجان',
            bio: '',
            image: 'Images/Authors/naeem.jpeg'
        },
        {
            authorId: 'b04', name: 'عباس حسن',
            bio: '',
            image: 'images/author1.jpg'
        },
        {
            authorId: 'b06', name: 'منیر مومن',
            bio: '',
            image: 'images/author1.jpg'
        },
        {
            authorId: 'b07', name: 'خالق ارمان',
            bio: '',
            image: 'images/author1.jpg'
        },
        {
            authorId: 'b09', name: 'ڈاکٹر بیزن صبا',
            bio: '',
            image: 'images/author1.jpg'
        },
        {
            authorId: 'b11', name: 'چراغ حاجت',
            bio: '',
            image: 'images/author1.jpg'
        },
        {
            authorId: 'b12', name: 'اے آر داد',
            bio: '',
            image: 'images/author1.jpg'
        },
        {
            authorId: 'b13', name: 'رحیم مهر',
            bio: '',
            image: 'images/author1.jpg'
        },
        {
            authorId: 'b16', name: 'شهزاد عبید',
            bio: '',
            image: 'images/author1.jpg'
        },
        {
            authorId: 'b17', name: 'ساجد حسین',
            bio: '',
            image: 'images/author1.jpg'
        },
         {
            authorId: 'a24', authorName: 'تاج بلوچ',
            bio: '',
            image: 'images/author1.jpg'
        },
        
    ];

    // Sort books by publication date in descending order (newest first)
    books.sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate));

    // --- DOM Elements (Conditionally retrieve elements based on the current page) ---
    const currentPage = window.location.pathname.split('/').pop(); // Gets the current filename (e.g., "index.html")

    let homeLatestBooks; // Only exists on index.html
    let allBooksDisplay; // Only exists on books.html
    let authorsDisplay; // Only exists on authors.html

    // Preview Overlays and their elements
    let homeBookPreviewOverlay, homePreviewImage, closeHomePreview; // For index.html
    let booksBookPreviewOverlay, booksPreviewImage, closeBooksPreview; // For books.html
    let authorModalBookPreviewOverlay, authorModalPreviewImage, closeAuthorModalPreview; // For author modal

    // Author Books Modal elements (exists on authors.html, but also used if authors are clicked from other pages)
    const authorBooksModal = document.getElementById('author-books-modal');
    const closeAuthorBooksModal = document.getElementById('close-author-books-modal');
    const authorNameInModal = document.getElementById('author-name-in-modal');
    const authorModalBookDisplay = document.getElementById('author-modal-book-display');


    // Dynamically get elements based on current page
    if (currentPage === 'index.html' || currentPage === '') { // '' for root path
        homeLatestBooks = document.getElementById('home-latest-books');
        homeBookPreviewOverlay = document.getElementById('home-book-preview-overlay');
        homePreviewImage = document.getElementById('home-preview-image');
        closeHomePreview = document.getElementById('close-home-preview');
    } else if (currentPage === 'books.html') {
        allBooksDisplay = document.getElementById('all-books-display');
        booksBookPreviewOverlay = document.getElementById('books-book-preview-overlay');
        booksPreviewImage = document.getElementById('books-preview-image');
        closeBooksPreview = document.getElementById('close-books-preview');
    } else if (currentPage === 'authors.html') {
        authorsDisplay = document.getElementById('authors-display');
        // Author modal preview elements are also needed on authors.html
        authorModalBookPreviewOverlay = document.getElementById('author-modal-book-preview-overlay');
        authorModalPreviewImage = document.getElementById('author-modal-preview-image');
        closeAuthorModalPreview = document.getElementById('close-author-modal-preview');
    }

    // --- Helper Functions (Modify how preview is opened based on which overlay to use) ---

    // Function to create a book card for the home page (only title, author, edition, date)
    const createHomeBookCard = (book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title} Cover" data-src="${book.image}">
            <div class="book-info">
                <h3>${book.title}</h3>
                <p> نبشته کار/ رجانکار/شونکار: <span class="author-name" data-author-id="${book.authorId}">${book.authorName}</span></p>
                <p>تهر: ${book.edition}</p>
                <p>تکدیم: ${book.pages}</p>
                <p>نہاد: ${book.price}</p>
                <p>چاپ سال: ${book.publicationDate}</p>
            </div>
        `;
        const img = bookCard.querySelector('img');
        img.addEventListener('click', () => showBookPreview(book.image, homeBookPreviewOverlay, homePreviewImage));

        const authorNameSpan = bookCard.querySelector('.author-name');
        authorNameSpan.addEventListener('click', (event) => {
            event.stopPropagation();
            // Redirect to authors.html and then open modal if needed, or handle if already on authors.html
            showAuthorBooks(book.authorId, book.authorName);
        });
        return bookCard;
    };

    // Function to create a book card for the "Our Books" section (full details)
    const createFullBookCard = (book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title} Cover" data-src="${book.image}">
            <div class="book-info">
                <h3>${book.title}</h3>
                 <p> نبشته کار/ رجانکار/شونکار: <span class="author-name" data-author-id="${book.authorId}">${book.authorName}</span></p>
                <p>تهر: ${book.edition}</p>
                <p>تکدیم: ${book.pages}</p>
                <p>نہاد: ${book.price}</p>
                <p>چاپ سال: ${book.publicationDate}</p>
            </div>
        `;
        const img = bookCard.querySelector('img');
        // Use the books page overlay
        img.addEventListener('click', () => showBookPreview(book.image, booksBookPreviewOverlay, booksPreviewImage));

        const authorNameSpan = bookCard.querySelector('.author-name');
        authorNameSpan.addEventListener('click', (event) => {
            event.stopPropagation();
            // Redirect to authors.html and then open modal if needed, or handle if already on authors.html
            showAuthorBooks(book.authorId, book.authorName);
        });
        return bookCard;
    };

    // Function to display books in a given container
    const displayBooks = (container, booksArray, cardCreator) => {
        if (!container) return; // Ensure container exists on the current page
        container.innerHTML = ''; // Clear existing content
        booksArray.forEach(book => {
            container.appendChild(cardCreator(book));
        });
    };

    // --- Pagination Support ---

// Function to render paginated books
function paginateBooks(booksArray, booksPerPage, currentPage, container, cardCreator, paginationContainer) {
    const totalPages = Math.ceil(booksArray.length / booksPerPage);
    const start = (currentPage - 1) * booksPerPage;
    const end = start + booksPerPage;
    const booksToShow = booksArray.slice(start, end);

    displayBooks(container, booksToShow, cardCreator);
    renderPagination(totalPages, currentPage, paginationContainer, (page) => {
        paginateBooks(booksArray, booksPerPage, page, container, cardCreator, paginationContainer);
    });
}

// Function to render pagination buttons
function renderPagination(totalPages, currentPage, container, onPageClick) {
    container.innerHTML = ''; // Clear old buttons

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.classList.add('pagination-button');
        if (i === currentPage) btn.classList.add('active');
        btn.addEventListener('click', () => onPageClick(i));
        container.appendChild(btn);
    }
}


    // Function to show book cover preview
    const showBookPreview = (imageSrc, overlayElement, imageElement) => {
        if (!overlayElement || !imageElement) return; // Ensure elements exist
        imageElement.src = imageSrc;
        overlayElement.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    // Function to hide book cover preview
    const hideBookPreview = (overlayElement) => {
        if (!overlayElement) return; // Ensure element exists
        overlayElement.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    };

    // Function to create an author card
    const createAuthorCard = (author) => {
        const authorCard = document.createElement('div');
        authorCard.classList.add('author-card');
        authorCard.innerHTML = `
            <img src="${author.image}" alt="${author.name} Photo">
            <h3>${author.name}</h3>
            <p>${author.bio}</p>
            <button class="view-books-button" data-author-id="${author.authorId}" data-author-name="${author.name}"> ءِ چاپ ءُ شنگ بیتگیں کتاب</button>
        `;
        const viewBooksButton = authorCard.querySelector('.view-books-button');
        viewBooksButton.addEventListener('click', () => showAuthorBooks(author.authorId, author.name));
        return authorCard;
    };

    // Function to show books by a specific author in a modal
    const showAuthorBooks = (authorId, authorName) => {
        // If not on authors.html, redirect there and then open modal
        if (currentPage !== 'authors.html') {
            localStorage.setItem('openAuthorModal', JSON.stringify({ authorId, authorName }));
            window.location.href = 'authors.html';
            return; // Stop further execution here
        }

        if (!authorBooksModal || !authorNameInModal || !authorModalBookDisplay) return; // Ensure elements exist

        authorNameInModal.textContent = authorName;
        const authorBooks = books.filter(book => book.authorId === authorId);
        const authorPagination = document.getElementById('author-pagination');
paginateBooks(authorBooks, 6, 1, authorModalBookDisplay, (book) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
        <img src="${book.image}" alt="${book.title} Cover">
        <div class="book-info">
            <h3>${book.title}</h3>
            <p>تهر: ${book.edition}</p>
            <p>تکدیم: ${book.pages}</p>
            <p>نہاد: ${book.price}</p>
            <p>چاپ سال: ${book.publicationDate}</p>
        </div>
    `;
    const img = bookCard.querySelector('img');
    img.addEventListener('click', () =>
        showBookPreview(book.image, authorModalBookPreviewOverlay, authorModalPreviewImage));
    return bookCard;
}, authorPagination);

        authorBooksModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };


    // Function to hide author books modal
    const hideAuthorBooksModal = () => {
        if (!authorBooksModal) return; // Ensure element exists
        authorBooksModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        localStorage.removeItem('openAuthorModal'); // Clear stored state
    };

    // --- Initial Content Loading based on Page ---

    if (currentPage === 'index.html' || currentPage === '') {
        const homePagination = document.getElementById('home-pagination');
        paginateBooks(books, 6, 1, homeLatestBooks, createHomeBookCard, homePagination);
        

        // Event listeners specific to index.html
        if (closeHomePreview) closeHomePreview.addEventListener('click', () => hideBookPreview(homeBookPreviewOverlay));
        if (homeBookPreviewOverlay) homeBookPreviewOverlay.addEventListener('click', (e) => {
            if (e.target === homeBookPreviewOverlay) hideBookPreview(homeBookPreviewOverlay);
        });

    } else if (currentPage === 'books.html') {
        const booksPagination = document.getElementById('books-pagination');
paginateBooks(books, 6, 1, allBooksDisplay, createFullBookCard, booksPagination);

        // Event listeners specific to books.html
        if (closeBooksPreview) closeBooksPreview.addEventListener('click', () => hideBookPreview(booksBookPreviewOverlay));
        if (booksBookPreviewOverlay) booksBookPreviewOverlay.addEventListener('click', (e) => {
            if (e.target === booksBookPreviewOverlay) hideBookPreview(booksBookPreviewOverlay);
        });

    } else if (currentPage === 'authors.html') {
        authors.forEach(author => {
            if (authorsDisplay) authorsDisplay.appendChild(createAuthorCard(author));
        });

        // Check if an author modal needs to be opened from a previous page
        const storedModalData = localStorage.getItem('openAuthorModal');
        if (storedModalData) {
            const { authorId, authorName } = JSON.parse(storedModalData);
            showAuthorBooks(authorId, authorName); // Directly open modal
        }

        // Event listeners specific to authors.html for the modal
        if (closeAuthorBooksModal) closeAuthorBooksModal.addEventListener('click', hideAuthorBooksModal);
        if (authorBooksModal) authorBooksModal.addEventListener('click', (e) => {
            if (e.target === authorBooksModal) hideAuthorBooksModal();
        });
        if (closeAuthorModalPreview) closeAuthorModalPreview.addEventListener('click', () => hideBookPreview(authorModalBookPreviewOverlay));
        if (authorModalBookPreviewOverlay) authorModalBookPreviewOverlay.addEventListener('click', (e) => {
            if (e.target === authorModalBookPreviewOverlay) hideBookPreview(authorModalBookPreviewOverlay);
        });
    }

    // --- Global Event Listeners (Keyboard 'Escape' to close modals/previews) ---
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (homeBookPreviewOverlay && homeBookPreviewOverlay.classList.contains('active')) hideBookPreview(homeBookPreviewOverlay);
            if (booksBookPreviewOverlay && booksBookPreviewOverlay.classList.contains('active')) hideBookPreview(booksBookPreviewOverlay);
            if (authorModalBookPreviewOverlay && authorModalBookPreviewOverlay.classList.contains('active')) hideBookPreview(authorModalBookPreviewOverlay);
            if (authorBooksModal && authorBooksModal.classList.contains('active')) hideAuthorBooksModal();
        }
    });

    // --- Smooth scrolling for navigation (now just standard link behavior for .html files) ---
    // The main-nav and footer-nav links will just change pages directly since they point to .html files.
    // However, if you click on a button within the same page (e.g., "View all books" on home),
    // we still want smooth scrolling to the books.html section. This part needs to be removed
    // for cross-page links and handled only for in-page anchors IF you had them.
    // For now, since links point to .html files, standard browser navigation will apply.

    // If you add any *internal* anchors within a page later, you'd re-introduce smooth scrolling for *those* specific links.
    // For example, if books.html had internal sections, you'd add smooth scrolling for those links.
    // But for navigation between index.html, books.html, authors.html, etc., standard hrefs are fine.
});
