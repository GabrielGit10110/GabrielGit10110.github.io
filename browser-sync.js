// browser-sync.js
module.exports = {
    server: {
        baseDir: "./" // Pasta base para servir os arquivos
    },
    files: ["**/*.html", "**/*.css", "**/*.js"],
    // Para proxy:
    // proxy: "http://localhost:8000",
    // server: false, // Desative o servidor próprio se estiver usando proxy
    port: 3000, // Porta onde o BrowserSync será executado
    ui: {
        port: 3001 // Porta para a interface de usuário do BrowserSync
    },
    open: "external", // Abre no navegador padrão ao iniciar
    notify: true // Mostra notificações no navegador (por exemplo, "Connected to BrowserSync")
};
