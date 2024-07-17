const createBookTemplate = (book) => /*html*/`
    <li data-id="${book.id}">
    <div class="details">
        <h3>${book.title}</h3>
        <p>par ${book.author}</p>
    </div>
    <button>SUPPRIMER</button>
    </li>
    `;

export default createBookTemplate;