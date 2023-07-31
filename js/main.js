const routes = {
    "/": "/index.html",
    "/about": "/pages/about.html",
    "/exploration": "/pages/exploration.html",
    404: "/pages/404.html",
}


function route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);
    
    handle()
}

function handle() {
    const {pathname} = window.location;
    const route = routes[pathname] || routes[404];

    console.log ("Antes do fetch");
    
    fetch(route) // api para pegar a rota
        .then(data => data.text()) // vá buscar essa rota, quando concluir, execute uma função q transforma os dados em texto //
        .then(html => {
            document.querySelector('#app').innerHTML = html // por ultimo, esta função irá mostrar o html dentro da div escolhida // 
            console.log (route);
        })
        

        handle()
        
}