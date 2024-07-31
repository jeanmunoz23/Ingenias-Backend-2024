const { Sequelize, DataTypes, Op } = require("sequelize");
const { database } = require('../../config/config.js');

const sequelize = new Sequelize(
    database.DB_NAME,
    database.DB_USER,
    database.DB_PASS,
    {
        host: database.DB_HOST,
        port: database.DB_PORT,
        dialect: database.dialect
       
    }
);

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;
// incializo las tablas
db.books = require("./book.model.js")(sequelize, Sequelize, DataTypes);
db.contacts = require("./contacto.model.js")(sequelize, Sequelize, DataTypes);

// relaciones genero una tabla aux 
db.books.belongsToMany(db.contacts, {
    through: 'contact_books',
    foreignKey: 'book_id',
    otherKey: 'contact_id'
});

db.contacts.belongsToMany(db.books, {
    through: 'contact_books',
    foreignKey: 'contact_id',
    otherKey: 'book_id'
});

// Define initial data creo nuevos datos
const libros = [
    { author: "Author 1", title: "user" },
    { author: "Author 2", title: "moderator" },
    { author: "Author 3", title: "admin" }
];

const Book = db.books;
const Contact = db.contacts;
 // ----- si ya tienen los datos ignored linea 48-79
function initial() {
    // // Insert initial book data
    // Book.create({ title: "Book 1", author: "Author 1", published: true, release_date: new Date(), subject: 1 });

    // Insert initial contact data
    Contact.create({ nombre: "nombre 1", apellido: "apellido 1", telefono: "123456789" }).then(contact => {
    
    // Insert initial book data
    libros.forEach(rol => {
        Book.findOrCreate({
            where: { title: rol.title },
            defaults: {
                title: rol.title,
                author: rol.author,
            }
        }).then(([book, created]) => {
            if (created) {
                console.log('created book', book);
            }
            // Associate the contact with the book
            contact.addBook(book);
        }).catch(err => {
            console.error("Error creating book:", err);
        });
    });
    }).catch(err => {
        console.error("Error creating contact:", err);
    });

    console.log("Database is synced and initial data inserted.");
}

// Sync database and call initial function
sequelize.sync().then(() => {
    initial(); // ----- si ya tienen los datos ignored esta funcion
}).catch(err => {
    console.error("Error syncing database:", err);
});

module.exports = db;