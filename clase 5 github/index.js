const productos = ['carne picada', 'tomates', 'lechuga', 'queso', 'pan'];

for (let i = 0; i < productos.length; i++) {
    console.log("productos" + (i + 1) + ":" + productos[index]);
}

productos.pop();

console.log(productos);
