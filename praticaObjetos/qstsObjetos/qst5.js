const dispositivos = [
    {
        nome: "Smartphone",
        status: "ativo",
    },
    {
        nome: "Tablet",
        status: "inativo",
    },
    {
        nome: "Laptop",
        status: "ativo",
    }
]

for (const dispositivo of dispositivos) {
    console.log(`Dispositivo: ${dispositivo.nome} | Status: ${dispositivo.status}`);
}