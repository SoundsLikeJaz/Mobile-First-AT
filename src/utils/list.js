const list = [
    { id: 1, name: 'Escova', preco: 10.00 },
    { id: 2, name: 'Pente', preco: 5.00},
    { id: 3, name: 'Shampoo', preco: 15.00},
    { id: 4, name: 'Condicionador', preco: 20.00},
    { id: 5, name: 'Creme de cabelo', preco: 25.00},
    { id: 6, name: 'Secador', preco: 100.00},
    { id: 7, name: 'Prancha', preco: 150.00},
    { id: 8, name: 'Tinta', preco: 30.00},
    { id: 9, name: 'Creme de barbear', preco: 10.00}
];

function create( nome, preco ) {
    const id = list.length + 1;
    list.push({ id: id, name: nome, preco: preco });
}

export { list, create }