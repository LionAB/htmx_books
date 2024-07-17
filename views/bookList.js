import BOOKS_DATA from "../data/data.js";
import createBookTemplate from "./book.js";
const createBookListTemplate = () => /*html*/ `
    <ul>
        ${BOOKS_DATA.map((book) => createBookTemplate(book)).join('')}
    </ul>`
;

export default createBookListTemplate;