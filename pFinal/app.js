const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

//configuracion para el uso peticiones post
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

//platillas que sean dinamicas
app.set('view engine', 'ejs');

//crear la conexion
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // tu usuario de MySQL
    password: '123456', // tu contraseña de MySQL
    database: 'llaveros',
    port: 3306
});


//comprobacion de la conexion de la base de datos
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the MySQL database');
    }
});

//iniciamos el server

//const hostname= '192.168.3.115';
const port = 3009;
app.listen(port,'0.0.0.0',()=>{
    console.log(`Servidor en funcionamiento desde http://192.168.100.19:${port}`);
});

//index

app.get('/', (req, res) => {
    const query = 'SELECT * FROM datos';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.send('Error');
        } else {
            results.forEach(datos => {
                datos.fechaEntrega = datos.fechaEntrega.toISOString().split('T')[0]; // Formato: YYYY-MM-DD
            });
            //console.log(results);
            res.render('index',{datos:results});
        }
    });
});



app.get('/registro',(req,res)=>{
    res.render('add');
});

//agregar usuarios

app.post('/add', (req, res) => {
    const { idPedido, codigo, modelo, precioT, completo, cliente, fechaEntrega } = req.body;
    const query = 'INSERT INTO datos (idPedido, codigo, modelo, precioT, completo, cliente, fechaEntrega) VALUES (?,?,?,?,?,?,?)';
    db.query(query, [idPedido, codigo, modelo, precioT, completo, cliente, fechaEntrega], (err) => {
        if (err) {
            console.error('Error adding datos:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});



app.get('/find/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM datos WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            res.send('Error');
        } else {
            res.render('edit', { datos: results[0] });
        }
    });
});

//editar usuario
app.post('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { idPedido, codigo, modelo, precioT, completo, cliente, fechaEntrega } = req.body;
    const query = `
        UPDATE datos
        SET 
            idPedido = ?,
            codigo = ?,
            modelo = ?,
            precioT = ?,
            completo = ?,
            cliente = ?,
            fechaEntrega = ?
        WHERE id = ?;
    `;

    // Ejecutar el query
    db.query(query, [idPedido, codigo, modelo, precioT, completo, cliente, fechaEntrega, id], (err) => {
        if (err) {
            console.error('Error updating user:', err);
            res.send('Error');
        } else {
            res.redirect('/'); // Redirige a una página de éxito
        }
    });
});

//eliminar usuario

app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM datos WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) {
            console.error('Error deleting user:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});
