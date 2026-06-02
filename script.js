// Máquinas Data
const machinesData = [
  {
    name: "Modelo 10C",
    badge: "Snacks y Bebidas",
    img: "./images/modelo_10c.jpeg",
    capacidad: "360-800 und",
    dimensiones: "1985x1160x870mm",
    peso: "330kg",
    temp: "4°C - 25°C",
    pago: "Monedas y billetes S/10-20",
    extras: "60 ranuras espiral, refrigeración 520W",
  },
  {
    name: "Modelo D720",
    badge: "Café y Snacks",
    img: "./images/modelo_d720.png",
    capacidad: "360-800 und + 300 vasos",
    dimensiones: "1985x1160x870mm",
    peso: "390kg",
    temp: "4-25°C",
    pago: "Monedas y billetes",
    extras: "Expende café, capuchino, chocolate caliente.",
  },
  {
    name: "Modelo 9G",
    badge: "Ascensor",
    img: "./images/modelo_9g.png",
    capacidad: "240-540 und",
    dimensiones: "1940x1040x790mm",
    peso: "280kg",
    temp: "4-25°C",
    pago: "Monedas y billetes",
    extras: "Ideal para frágiles, frutos secos.",
  },
  {
    name: "Modelo 4N",
    badge: "Café Molido",
    img: "./images/modelo_4n.png",
    capacidad: "Tolva 1.2kg / 300 vasos",
    dimensiones: "810x500x450mm",
    peso: "90kg",
    temp: "90°C",
    pago: "Monedas",
    extras: "Pantalla táctil, granos recién molidos.",
  },
  {
    name: "Modelo 2N",
    badge: "Montaje Pared",
    img: "./images/modelo_2n.png",
    capacidad: "165 piezas",
    dimensiones: "1000x700x700mm",
    peso: "117kg",
    temp: "Ambiente",
    pago: "Monedas",
    extras: "Pantalla táctil 32'', sistema Android.",
  },
];
const grid = document.getElementById("machinesGrid");
if (grid) {
  grid.innerHTML = machinesData
    .map(
      (m) => `
            <div class="machine-card">
                <div class="machine-badge" style="margin:16px 16px 0 16px; display:inline-block;">${m.badge}</div>
                <img class="machine-img" src="${m.img}" alt="${m.name}" onerror="this.src='https://placehold.co/400x300?text=Imagen+no+disponible'">
                <div class="machine-info">
                    <h3 style="font-size:1.5rem;">${m.name}</h3>
                    <div style="margin:12px 0;"><span class="spec-tag"><i class="fas fa-box"></i> ${m.capacidad.split(" ")[0]}+</span><span class="spec-tag"><i class="fas fa-thermometer-half"></i> ${m.temp.includes("°C") ? "Refrigerada" : "Ambiente"}</span></div>
                    <ul class="spec-list">
                        <li><i class="fas fa-box"></i> Capacidad: ${m.capacidad}</li>
                        <li><i class="fas fa-ruler-combined"></i> ${m.dimensiones}</li>
                        <li><i class="fas fa-weight-hanging"></i> ${m.peso}</li>
                        <li><i class="fas fa-thermometer-half"></i> ${m.temp}</li>
                        <li><i class="fas fa-money-bill-wave"></i> ${m.pago}</li>
                        <li><i class="fas fa-microchip"></i> ${m.extras}</li>
                    </ul>
                </div>
            </div>
        `,
    )
    .join("");
}

// Hamburguesa y mobile menú interactivo (moderno, accesible)
const hamburger = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileNav");
const overlay = document.getElementById("navOverlay");
const closeMenu = () => {
  hamburger.classList.remove("active");
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
};
const openMenu = () => {
  hamburger.classList.add("active");
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
};
if (hamburger) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    if (mobileMenu.classList.contains("active")) closeMenu();
    else openMenu();
  });
}
overlay?.addEventListener("click", closeMenu);
const mobileLinks = document.querySelectorAll(".mobile-nav a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    if (targetId && targetId !== "#") {
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        closeMenu();
        setTimeout(() => {
          const headerH = document.querySelector("header").offsetHeight;
          const yOffset =
            targetEl.getBoundingClientRect().top + window.pageYOffset - headerH;
          window.scrollTo({ top: yOffset, behavior: "smooth" });
          history.pushState(null, null, targetId);
        }, 100);
      }
    }
  });
});
// contador animado
let counted = false;
const counterSpan = document.getElementById("counterMachines");
const animateCounter = () => {
  if (!counted && counterSpan && window.scrollY > 200) {
    let val = 15;
    counted = true;
    const interval = setInterval(() => {
      if (val < 18) {
        val++;
        counterSpan.innerText = val + "+";
      } else clearInterval(interval);
    }, 70);
  }
};
window.addEventListener("scroll", animateCounter);
window.addEventListener("load", animateCounter);

// Header scroll effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) header.style.background = "rgba(10,12,16,0.98)";
  else header.style.background = "rgba(10,12,16,0.92)";
});

// Contadores animados para la sección Nosotros
function animateCounters() {
    const yearsCounter = document.getElementById('yearsCounter');
    const clientsCounter = document.getElementById('clientsCounter');
    const machinesCounter = document.getElementById('machinesCounter');
    
    if (!yearsCounter) return;
    
    let started = false;
    
    function startCounters() {
        if (started) return;
        const section = document.querySelector('#nosotros');
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            started = true;
            
            // Años counter
            let yearsVal = 0;
            const yearsInterval = setInterval(() => {
                if (yearsVal < targets.years) {
                    yearsVal++;
                    yearsCounter.textContent = yearsVal;
                } else {
                    clearInterval(yearsInterval);
                }
            }, 100);
            
            // Clientes counter
            let clientsVal = 0;
            const clientsInterval = setInterval(() => {
                if (clientsVal < targets.clients) {
                    clientsVal += Math.ceil(targets.clients / 30);
                    if (clientsVal > targets.clients) clientsVal = targets.clients;
                    clientsCounter.textContent = clientsVal;
                } else {
                    clearInterval(clientsInterval);
                }
            }, 40);
            
            // Máquinas counter
            let machinesVal = 0;
            const machinesInterval = setInterval(() => {
                if (machinesVal < targets.machines) {
                    machinesVal++;
                    machinesCounter.textContent = machinesVal + '+';
                } else {
                    clearInterval(machinesInterval);
                }
            }, 80);
        }
    }
    
    window.addEventListener('scroll', startCounters);
    startCounters();
}

// Scroll Reveal para animaciones
function initScrollReveal() {
    const elements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    elements.forEach(el => observer.observe(el));
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    animateCounters();
    initScrollReveal();
});

// Indicadores de testimonios (efecto visual simple)
function initTestimonialIndicators() {
    const dots = document.querySelectorAll('.testi-dot');
    const cards = document.querySelectorAll('.testi-card');
    
    if (dots.length === 0) return;
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Actualizar dots
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            
            // Scroll suave al testimonio correspondiente
            if (cards[index]) {
                cards[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initTestimonialIndicators();
});

// ============================================
// CONFIGURACIÓN DE EMAILJS
// ============================================

const EMAILJS_PUBLIC_KEY = "8P-3gvjskqvoz78Al";      
const EMAILJS_SERVICE_ID = "service_j3x45se";      
const EMAILJS_TEMPLATE_ID = "template_okf1e9r";    

// Inicializar EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// ============================================
// FUNCIÓN PARA ENVIAR CORREO
// ============================================
async function enviarCotizacion(datos) {
    const params = {
        nombre: datos.nombre,
        email: datos.email,
        telefono: datos.telefono || "No especificado",
        mensaje: datos.mensaje || "Sin mensaje adicional",
        fecha: new Date().toLocaleString("es-PE", {
            timeZone: "America/Lima",
            dateStyle: "full",
            timeStyle: "short"
        })
    };

    try {
        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            params
        );
        console.log("✅ Correo enviado:", response);
        return { success: true };
    } catch (error) {
        console.error("❌ Error al enviar:", error);
        return { success: false, error: error.text || error.message };
    }
}

// ============================================
// MANEJAR EL FORMULARIO
// ============================================
const formulario = document.getElementById("contactForm");
const mensajeDiv = document.getElementById("formMessage");

if (formulario) {
    formulario.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Obtener valores
        const nombre = document.getElementById("nombreContacto")?.value.trim();
        const email = document.getElementById("emailContacto")?.value.trim();
        const telefono = document.getElementById("telefonoContacto")?.value.trim();
        const mensaje = document.getElementById("mensajeContacto")?.value.trim();

        // Validaciones
        if (!nombre) {
            mostrarMensaje("⚠️ Por favor, ingresa tu nombre completo", "error");
            return;
        }

        if (!email) {
            mostrarMensaje("⚠️ Por favor, ingresa tu correo electrónico", "error");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            mostrarMensaje("⚠️ Por favor, ingresa un correo electrónico válido", "error");
            return;
        }

        // Deshabilitar botón y mostrar loading
        const boton = formulario.querySelector('button[type="submit"]');
        const textoOriginal = boton.innerHTML;
        boton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        boton.disabled = true;

        // Enviar cotización
        const resultado = await enviarCotizacion({
            nombre: nombre,
            email: email,
            telefono: telefono,
            mensaje: mensaje
        });

        // Restaurar botón
        boton.innerHTML = textoOriginal;
        boton.disabled = false;

        // Mostrar resultado
        if (resultado.success) {
            mostrarMensaje("✅ ¡Solicitud enviada con éxito! El administrador se contactará contigo en menos de 24 horas.", "success");
            formulario.reset();
        } else {
            mostrarMensaje("❌ Hubo un error al enviar tu solicitud. Por favor, escríbenos directamente a: gamar.vendingmachine@gmail.com", "error");
        }

        // Limpiar mensaje después de 5 segundos
        setTimeout(() => {
            if (mensajeDiv) mensajeDiv.innerHTML = "";
        }, 5000);
    });
}

// Función para mostrar mensajes
function mostrarMensaje(texto, tipo) {
    if (!mensajeDiv) return;
    mensajeDiv.innerHTML = texto;
    mensajeDiv.style.color = tipo === "error" ? "#E67E22" : "#2ecc71";
    mensajeDiv.style.fontSize = "0.9rem";
    mensajeDiv.style.padding = "10px";
    mensajeDiv.style.borderRadius = "8px";
    mensajeDiv.style.background = tipo === "error" ? "rgba(230,126,34,0.1)" : "rgba(46,204,113,0.1)";
}