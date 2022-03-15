const Contenedor = require('./src/classes/container.class.js');
const db = 'productos'

const datitos = new Contenedor(db);

datitos.save({
  id: 1,
  title: 'producto x',
  price: '100',
  thumbnail: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Purina%C2%AE%20Como%20elegir%20un%20nuevo%20gatito.jpg?itok=WOC5m4KQ'
});

// console.log(datitos.getAll())

// console.log(datitos.getById(8))

// console.log(datitos.deleteById(20));

datitos.deleteAll();