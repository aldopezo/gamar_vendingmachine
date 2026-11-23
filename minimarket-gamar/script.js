const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // efecto de scroll suave
    const footerYear = document.querySelector('footer p:first-of-type');
    if(footerYear) {
    }
    console.log("Landing Page Gamar - Lista");

// carrusel de clientes
// Datos de clientes
const clients = [
    { name: "Compañía Minera Antapaccay", image: "images/antapacay.webp" },
    { name: "Compañía minera Quechua S.A", image: "images/quechua.webp" },
    { name: "Ferreyros S.A.A", image: "images/ferrreyros.webp" },
    { name: "Newrest Perú S.A.C", image: "images/newrest.webp" },
    { name: "Tomocorp S.A.C", image: "images/tomocorp.webp" },
    { name: "Exsa S.A.", image: "images/exsa.webp" },
    { name: "Tramsdicas S.R.L", image: "images/tramsdicas.webp" },
    { name: "Municipalidad provincial de Espinar", image: "images/muniespinar.webp" },
    { name: "Estación de Servicios San Jose", image: "images/sanjose01.webp" }
];

// Duplicar clientes para efecto infinito
const duplicatedClients = [...clients, ...clients];

// Función para crear las cards
function createClientCards() {
    const track = document.getElementById('clientTrack');
    track.innerHTML = '';
    
    duplicatedClients.forEach(client => {
        const card = document.createElement('div');
        card.className = 'client-card';
        card.innerHTML = `
            <img src="${client.image}" alt="${client.name}" onerror="this.src='https://placehold.co/200x100/f5f5f5/C1272D?text=Logo'">
            <p>${client.name}</p>
        `;
        track.appendChild(card);
    });
}

// Inicializar
createClientCards();

// Grupo empresarial
document.querySelectorAll('.grupo-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const url = btn.getAttribute('data-url');
            if (url) window.location.href = url;
        });
    });