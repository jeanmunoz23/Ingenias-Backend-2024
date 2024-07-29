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
// Ensure your associations are correctly set up
db.books = require("./book.model.js")(sequelize, Sequelize, DataTypes);
db.contacts = require("./contacto.model.js")(sequelize, Sequelize, DataTypes);

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

// Define initial data
const libros = [
    { author: "Author", title: "user" },
    { author: "Author", title: "moderator" },
    { author: "Author 3", title: "admin" }
];

const Book = db.books;
const Contact = db.contacts;

function initial() {
    // Insert initial book data
    Book.create({ title: "Book 1", author: "Author 1", published: true, release_date: new Date(), subject: 1 });

    // Insert initial contact data
    Contact.create({ nombre: "nombre 1", apellido: "apellido 1", telefono: "123456789" }).then(contact => {
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
    initial();
}).catch(err => {
    console.error("Error syncing database:", err);
});

module.exports = db;