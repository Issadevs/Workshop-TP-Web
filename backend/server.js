const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Config de la connexion MySQL
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tpweb'
};

const connection = mysql.createConnection(dbConfig);

// Connexion à la bdd MySQL
connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL:', error);
        // En cas d'erreur d'authentification, mettre à jour authentification ou client MySQL
        return;
    }
    console.log('Connected to MySQL');
});

// Route pour obtenir les produits
app.get('/products', (req, res) => {
    const query = 'SELECT * FROM products';
    connection.query(query, (error, results) => {
        if (error) {
            res.status(500).send(error);
            return;
        }
        res.json(results);
    });
});

// Lancement du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
