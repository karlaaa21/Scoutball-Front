(function () {
    function setError(id, mensaje) {
        const elemento = document.getElementById(id);

        if (elemento) {
            elemento.textContent = mensaje || "";
        }
    }

    const formRegistro = document.getElementById("formRegistro");

    if (formRegistro) {
        formRegistro.addEventListener("submit", (evento) => {
            evento.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const pais = document.getElementById("pais").value.trim();
            const fechaNacimiento = document.getElementById("fechaNacimiento").value;
            const posicion = document.getElementById("posicion").value.trim();
            const peso = document.getElementById("peso").value.trim();
            const altura = document.getElementById("altura").value.trim();
            const sexo = document.getElementById("sexo").value.trim();
            const piernaHabil = document.getElementById("piernaHabil").value.trim();
            const numeroTelefonico = document.getElementById("numeroTelefonico").value.trim();
            const direccion = document.getElementById("direccion").value.trim();
            const correoElectronico = document.getElementById("correoElectronico").value.trim();
            const password = document.getElementById("password").value;
            const confirmar = document.getElementById("confirmar").value;
            const biografia = document.getElementById("biografia").value.trim();
            const terminos = document.getElementById("terminos").checked;

            setError("err-nombre", "");
            setError("err-pais", "");
            setError("err-fechaNacimiento", "");
            setError("err-posicion", "");
            setError("err-peso", "");
            setError("err-altura", "");
            setError("err-sexo", "");
            setError("err-piernaHabil", "");
            setError("err-numeroTelefonico", "");
            setError("err-direccion", "");
            setError("err-correoElectronico", "");
            setError("err-password", "");
            setError("err-confirmar", "");
            setError("err-biografia", "");
            setError("err-terminos", "");

            let ok = true;

            if (nombre.length < 3) {
                setError("err-nombre", "Ingresa tu nombre (mínimo 3 caracteres).");
                ok = false;
            }

            if (!pais) {
                setError("err-pais", "Selecciona o escribe tu país.");
                ok = false;
            }

            if (!fechaNacimiento) {
                setError("err-fechaNacimiento", "Ingresa tu fecha de nacimiento.");
                ok = false;
            }

            if (!posicion) {
                setError("err-posicion", "Ingresa tu posición.");
                ok = false;
            }

            if (!peso) {
                setError("err-peso", "Ingresa tu peso.");
                ok = false;
            }

            if (!altura) {
                setError("err-altura", "Ingresa tu altura.");
                ok = false;
            }

            if (!sexo) {
                setError("err-sexo", "Ingresa tu sexo.");
                ok = false;
            }

            if (!piernaHabil) {
                setError("err-piernaHabil", "Ingresa tu pierna hábil.");
                ok = false;
            }

            if (numeroTelefonico.replace(/\D/g, "").length < 9) {
                setError("err-numeroTelefonico", "Ingresa un teléfono válido de al menos 9 dígitos.");
                ok = false;
            }

            if (!direccion) {
                setError("err-direccion", "Ingresa tu dirección.");
                ok = false;
            }

            if (!correoElectronico.includes("@") || !correoElectronico.includes(".")) {
                setError("err-correoElectronico", "Ingresa un correo válido.");
                ok = false;
            }

            if (password.length < 8) {
                setError("err-password", "La contraseña debe tener al menos 8 caracteres.");
                ok = false;
            }

            if (confirmar !== password) {
                setError("err-confirmar", "Las contraseñas no coinciden.");
                ok = false;
            }

            if (biografia.length < 10) {
                setError("err-biografia", "La biografía debe tener al menos 10 caracteres.");
                ok = false;
            }

            if (!terminos) {
                setError("err-terminos", "Debes aceptar los términos y condiciones.");
                ok = false;
            }

            if (ok) {
                alert("Registro exitoso. ¡Bienvenido/a!");
                formRegistro.reset();
            }
        });
    }

    const formLogin = document.getElementById("formLogin");

    if (formLogin) {
        formLogin.addEventListener("submit", (evento) => {
            evento.preventDefault();

            const correo = document.getElementById("loginEmail").value.trim();
            const password = document.getElementById("loginPassword").value;

            setError("err-login-email", "");
            setError("err-login-password", "");

            let ok = true;

            if (!correo.includes("@") || !correo.includes(".")) {
                setError("err-login-email", "Correo no válido.");
                ok = false;
            }

            if (password.length < 8) {
                setError("err-login-password", "La contraseña debe tener al menos 8 caracteres.");
                ok = false;
            }

            if (ok) {
                alert("Ingreso exitoso.");
                formLogin.reset();
            }
        });
    }

    function abrirFormularioPostulacion(equipo) {
        const modal = document.createElement("div");
        modal.className = "modal";

        modal.innerHTML = `
            <div class="modal-contenido">
                <button class="cerrar-modal" type="button" aria-label="Cerrar formulario">×</button>
                <p class="etiqueta">POSTULACIÓN DEPORTIVA</p>
                <h2>Postular a ${equipo.nombre}</h2>
                <div class="datos-contacto">
                    <strong>Equipo:</strong> ${equipo.nombre}<br>
                    <strong>Correo:</strong> ${equipo.correo}<br>
                    <strong>Teléfono:</strong> ${equipo.numero_tlf}
                </div>
                <form class="formulario-modal" novalidate>
                    <div class="campo-modal">
                        <label for="nombrePostulante">Nombre completo</label>
                        <input id="nombrePostulante" type="text">
                        <small class="error" id="err-postulante-nombre"></small>
                    </div>
                    <div class="campo-modal">
                        <label for="correoPostulante">Correo electrónico</label>
                        <input id="correoPostulante" type="email">
                        <small class="error" id="err-postulante-correo"></small>
                    </div>
                    <div class="campo-modal">
                        <label for="telefonoPostulante">Número telefónico</label>
                        <input id="telefonoPostulante" type="tel">
                        <small class="error" id="err-postulante-telefono"></small>
                    </div>
                    <div class="campo-modal">
                        <label for="posicionPostulante">Posición</label>
                        <input id="posicionPostulante" type="text" placeholder="Ej: Delantero centro">
                        <small class="error" id="err-postulante-posicion"></small>
                    </div>
                    <div class="campo-modal">
                        <label for="mensajePostulante">Sobre mí</label>
                        <textarea id="mensajePostulante" placeholder="Cuéntale al equipo sobre tu experiencia..."></textarea>
                        <small class="error" id="err-postulante-mensaje"></small>
                    </div>
                    <button class="btn" type="submit">Enviar postulación</button>
                    <p class="mensaje-formulario"></p>
                </form>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector(".cerrar-modal").addEventListener("click", () => {
            modal.remove();
        });

        const formulario = modal.querySelector(".formulario-modal");

        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();

            const nombre = document.getElementById("nombrePostulante").value.trim();
            const correo = document.getElementById("correoPostulante").value.trim();
            const telefono = document.getElementById("telefonoPostulante").value.trim();
            const posicion = document.getElementById("posicionPostulante").value.trim();
            const mensaje = document.getElementById("mensajePostulante").value.trim();

            setError("err-postulante-nombre", "");
            setError("err-postulante-correo", "");
            setError("err-postulante-telefono", "");
            setError("err-postulante-posicion", "");
            setError("err-postulante-mensaje", "");

            let ok = true;

            if (nombre.length < 3) {
                setError("err-postulante-nombre", "Ingresa tu nombre completo.");
                ok = false;
            }

            if (!correo.includes("@") || !correo.includes(".")) {
                setError("err-postulante-correo", "Ingresa un correo válido.");
                ok = false;
            }

            if (telefono.replace(/\D/g, "").length < 9) {
                setError("err-postulante-telefono", "Ingresa un teléfono válido de al menos 9 dígitos.");
                ok = false;
            }

            if (!posicion) {
                setError("err-postulante-posicion", "Ingresa tu posición.");
                ok = false;
            }

            if (mensaje.length < 10) {
                setError("err-postulante-mensaje", "Escribe un mensaje de al menos 10 caracteres.");
                ok = false;
            }

            if (!ok) {
                return;
            }

            modal.querySelector(".mensaje-formulario").textContent = "¡Postulación enviada correctamente!";
            formulario.reset();
        });
    }

    function abrirFormularioContacto(datos) {
        const modal = document.createElement("div");
        modal.className = "modal";

        modal.innerHTML = `
            <div class="modal-contenido">
                <button class="cerrar-modal" type="button" aria-label="Cerrar formulario">×</button>
                <p class="etiqueta">CONTACTO DE JUGADOR</p>
                <h2>Contactar a ${datos.nombre}</h2>
                <div class="datos-contacto">
                    <strong>Representante:</strong> ${datos.representante}<br>
                    <strong>Correo:</strong> ${datos.correo}<br>
                    <strong>Teléfono:</strong> ${datos.telefono}
                </div>
                <form class="formulario-modal" novalidate>
                    <div class="campo-modal">
                        <label for="nombreInteresado">Nombre completo</label>
                        <input id="nombreInteresado" type="text">
                        <small class="error" id="err-interesado-nombre"></small>
                    </div>
                    <div class="campo-modal">
                        <label for="correoInteresado">Correo electrónico</label>
                        <input id="correoInteresado" type="email">
                        <small class="error" id="err-interesado-correo"></small>
                    </div>
                    <div class="campo-modal">
                        <label for="telefonoInteresado">Teléfono</label>
                        <input id="telefonoInteresado" type="tel">
                        <small class="error" id="err-interesado-telefono"></small>
                    </div>
                    <div class="campo-modal">
                        <label for="mensajeInteresado">Mensaje</label>
                        <textarea id="mensajeInteresado" placeholder="Escribe tu mensaje aquí..."></textarea>
                        <small class="error" id="err-interesado-mensaje"></small>
                    </div>
                    <button class="btn" type="submit">Enviar mensaje</button>
                    <p class="mensaje-formulario"></p>
                </form>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector(".cerrar-modal").addEventListener("click", () => {
            modal.remove();
        });

        const formulario = modal.querySelector(".formulario-modal");

        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();

            const nombre = document.getElementById("nombreInteresado").value.trim();
            const correo = document.getElementById("correoInteresado").value.trim();
            const telefono = document.getElementById("telefonoInteresado").value.trim();
            const mensaje = document.getElementById("mensajeInteresado").value.trim();

            setError("err-interesado-nombre", "");
            setError("err-interesado-correo", "");
            setError("err-interesado-telefono", "");
            setError("err-interesado-mensaje", "");

            let ok = true;

            if (nombre.length < 3) {
                setError("err-interesado-nombre", "Ingresa tu nombre completo.");
                ok = false;
            }

            if (!correo.includes("@") || !correo.includes(".")) {
                setError("err-interesado-correo", "Ingresa un correo válido.");
                ok = false;
            }

            if (telefono.replace(/\D/g, "").length < 9) {
                setError("err-interesado-telefono", "Ingresa un teléfono válido de al menos 9 dígitos.");
                ok = false;
            }

            if (mensaje.length < 10) {
                setError("err-interesado-mensaje", "Escribe un mensaje de al menos 10 caracteres.");
                ok = false;
            }

            if (!ok) {
                return;
            }

            modal.querySelector(".mensaje-formulario").textContent = "¡Mensaje enviado! El representante se pondrá en contacto contigo.";
            formulario.reset();
        });
    }

    document.querySelectorAll("[data-contactar]").forEach((boton) => {
        boton.addEventListener("click", () => {
            abrirFormularioContacto(boton.dataset);
        });
    });

    document.querySelectorAll("[data-postular]").forEach((boton) => {
        boton.addEventListener("click", () => {
            const equipoData = document.getElementById("nombre-perfil") ? {
                nombre: document.getElementById("nombre-perfil").textContent,
                correo: document.getElementById("correo-equipo") ? document.getElementById("correo-equipo").textContent : boton.dataset.correo,
                numero_tlf: document.getElementById("telefono-equipo") ? document.getElementById("telefono-equipo").textContent : boton.dataset.telefono
            } : {
                nombre: boton.dataset.nombre,
                correo: boton.dataset.correo,
                numero_tlf: boton.dataset.telefono
            };

            abrirFormularioPostulacion(equipoData);
        });
    });

    document.querySelectorAll("[data-ver-necesidad]").forEach((boton) => {
        boton.addEventListener("click", () => {
            const nombreEquipo = document.getElementById("nombre-perfil") 
                ? document.getElementById("nombre-perfil").textContent 
                : boton.dataset.nombre;

            const necesidadesEquipos = {
                "Real Madrid": "Buscamos un delantero centro contundente con experiencia internacional para asegurar la cuota goleadora en competiciones europeas.",
                "Paris Saint-Germain": "El cuerpo técnico requiere un extremo desequilibrante y veloz capaz de romper líneas defensivas por la banda derecha.",
                "Paris Saint Germain": "El cuerpo técnico requiere un extremo desequilibrante y veloz capaz de romper líneas defensivas por la banda derecha.",
                "Colo-Colo": "Necesitamos reforzar el mediocampo con un volante mixto de alta recuperación, buen despliegue físico y llegada al área.",
                "Colo Colo": "Necesitamos reforzar el mediocampo con un volante mixto de alta recuperación, buen despliegue físico y llegada al área.",
                "Andorra FC": "El club prioriza la incorporación de un lateral izquierdo con proyección ofensiva y rigor táctico para el esquema defensivo.",
                "Ronin FC": "Buscamos un defensa central ordenado, con buena lectura de juego y liderazgo para mantener la solidez en la zaga.",
                "Ronin Fc": "Buscamos un defensa central ordenado, con buena lectura de juego y liderazgo para mantener la solidez en la zaga."
            };

            const necesidadActual = necesidadesEquipos[nombreEquipo] || "El club busca talentos competitivos para reforzar el plantel actual.";

            const modal = document.createElement("div");
            modal.className = "modal";

            modal.innerHTML = `
                <div class="modal-contenido">
                    <button class="cerrar-modal" type="button" aria-label="Cerrar ventana">×</button>
                    <p class="etiqueta">PERFIL REQUERIDO</p>
                    <h2>${nombreEquipo}</h2>
                    <div class="datos-contacto">
                        <p>${necesidadActual}</p>
                    </div>
                    <button class="btn cerrar-btn" type="button">Cerrar</button>
                </div>
            `;

            document.body.appendChild(modal);

            modal.querySelector(".cerrar-modal").addEventListener("click", () => {
                modal.remove();
            });

            modal.querySelector(".cerrar-btn").addEventListener("click", () => {
                modal.remove();
            });
        });
    });
    const formEquipo = document.getElementById('formEquipo');
  if (formEquipo) {
    formEquipo.addEventListener('submit', (evento) => {
      evento.preventDefault();
      const nombre = document.getElementById('nombreEquipo').value.trim();
      const ubicacion = document.getElementById('ubicacionEquipo').value.trim();
      const pais = document.getElementById('paisEquipo').value.trim();
      const liga = document.getElementById('ligaEquipo').value.trim();
      const tecnico = document.getElementById('tecnicoEquipo').value.trim();
      const titulos = document.getElementById('titulosEquipo').value.trim();
      const correo = document.getElementById('correoEquipo').value.trim();
      const telefono = document.getElementById('telefonoEquipo').value.trim();
      const errores = ['nombre-equipo', 'ubicacion-equipo', 'pais-equipo', 'liga-equipo', 'tecnico-equipo', 'titulos-equipo', 'correo-equipo', 'telefono-equipo'];
      errores.forEach((error) => setError(`err-${error}`, ''));
      document.getElementById('mensaje-equipo').textContent = '';

      let ok = true;
      if (nombre.length < 3) { setError('err-nombre-equipo', 'Ingresa un nombre de al menos 3 caracteres.'); ok = false; }
      if (!ubicacion) { setError('err-ubicacion-equipo', 'Ingresa la ciudad o ubicación del equipo.'); ok = false; }
      if (!pais) { setError('err-pais-equipo', 'Ingresa el país del equipo.'); ok = false; }
      if (!liga) { setError('err-liga-equipo', 'Ingresa la liga en que participa el equipo.'); ok = false; }
      if (tecnico.length < 3) { setError('err-tecnico-equipo', 'Ingresa el nombre del director técnico.'); ok = false; }
      if (titulos && (!Number.isInteger(Number(titulos)) || Number(titulos) < 0)) { setError('err-titulos-equipo', 'Ingresa un número de títulos válido.'); ok = false; }
      if (!correo.includes('@') || !correo.includes('.')) { setError('err-correo-equipo', 'Ingresa un correo válido (ej: club@correo.cl).'); ok = false; }
      if (telefono.replace(/\D/g, '').length < 9) { setError('err-telefono-equipo', 'Ingresa un teléfono válido de al menos 9 dígitos.'); ok = false; }

      if (ok) {
        document.getElementById('mensaje-equipo').textContent = '¡Equipo creado correctamente! Tu ficha está lista para revisión.';
        formEquipo.reset();
      }
    });
  }
})();