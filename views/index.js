const createHomepageTemplate =()=>/*html*/`
    <html>
        <head>
            <title>Liste de Lecture</title>
            <link rel="stylesheet" href="/styles.css">
            <script src="https://unpkg.com/htmx.org@2.0.0" 
                integrity="sha384-wS5l5IKJBvK6sPTKa2WZ1js3d947pvWXbPJ1OmWfEuxLgeHcEbjUUA5i9V5ZkpCw" 
                crossorigin="anonymous"></script>
        </head>
        <body>
            <header>
                <h1>Liste de Lecture</h1>
            </header>
            <main>
                <section>
                    <h2>Les Livres</h2>
                    <div class="book-list">
                        <button hx-get="/books" hx-swap="beforeend" hx-target=".book-list">Afficher livres</button>
                    </div>
                    <div class="add-book-form">
                        <h2>Ajouter un Livre</h2>
                        <form>
                            <input 
                                type="text"
                                name="title"
                                placeholder="Titre"
                            />
                            <input 
                                type="text"
                                name="author"
                                placeholder="Auteur"
                            />
                            <button hx-post="/books" hx-target=".book-list ul" hx-swap="beforeend">Ajouter livre</button>
                        </form>
                        <!-- FORM -->
                    </div>
                    
                </section>
            </main>
            <footer>
                <p>&copy; 2021 Liste de Lecture</p>
            </footer>
        </body>
    </html>
`;

export default createHomepageTemplate;