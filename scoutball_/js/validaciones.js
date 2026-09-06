
(function(){
  document.querySelectorAll('[data-demo-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Demo: este botón muestra que el elemento funciona. Aún no hay lógica de compra.');
    });
  });

  function setError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg || '';
  }


  const formRegistro = document.getElementById('formRegistro');
  if (formRegistro) {
    formRegistro.addEventListener('submit', (e) => {
      e.preventDefault(); // evitamos envío por defecto para validar

      // Obtener valores
      const nombre = document.getElementById('nombre').value.trim();
      const pais = document.getElementById('pais').value.trim();
      const fechaNacimiento = document.getElementById('fechaNacimiento').value;
      const posicion = document.getElementById('posicion').value;
      const peso = document.getElementById('peso').value;
      const altura = document.getElementById('altura').value;
      const sexo = document.getElementById('sexo').value;
      const piernaHabil = document.getElementById('piernaHabil').value;
      const numeroTelefonico = document.getElementById('numeroTelefonico').value.trim();
      const direccion = document.getElementById('direccion').value.trim();
      const correoElectronico = document.getElementById('correoElectronico').value.trim();
      const password = document.getElementById('password').value;
      const confirmar = document.getElementById('confirmar').value;
      const biografia = document.getElementById('biografia').value.trim();
      const terminos = document.getElementById('terminos').checked;

      // Reset de mensajes
      setError('err-nombre', '');
      setError('err-pais', '');
      setError('err-fechaNacimiento', '');
      setError('err-posicion', '');
      setError('err-peso', '');
      setError('err-altura', '');
      setError('err-sexo', '');
      setError('err-piernaHabil', '');
      setError('err-numeroTelefonico', '');
      setError('err-direccion', '');
      setError('err-correoElectronico', '');
      setError('err-password', '');
      setError('err-confirmar', '');
      setError('err-terminos', '');
      setError('err-biografia', '');

      let ok = true;

      if (nombre.length < 3) {
        setError('err-nombre', 'Ingresa tu nombre (mínimo 3 caracteres).');
        ok = false;
      }
        if (!pais) {
        setError('err-pais', 'Selecciona o escribe tu país.');
        ok = false;
      }
      if (!fechaNacimiento) {
        setError('err-fechaNacimiento', 'Ingresa tu fecha de nacimiento.');
        ok = false;
      }

      if (!posicion) {
        setError('err-posicion', 'Selecciona tu posición.');
        ok = false;
      }
      if (!peso) {
        setError('err-peso', 'Ingresa tu peso.');
        ok = false;
      }
      if (!altura) {
        setError('err-altura', 'Ingresa tu altura.');
        ok = false;
      }
      if (!sexo) {
        setError('err-sexo', 'Selecciona tu sexo.');
        ok = false;
      }
      if (!piernaHabil) {
        setError('err-piernaHabil', 'Selecciona tu pierna hábil.');
        ok = false;
      }
      if (!numeroTelefonico) {
        setError('err-numeroTelefonico', 'Ingresa tu número telefónico.');
        ok = false;
      }
      if (!direccion) {
        setError('err-direccion', 'Ingresa tu dirección.');
        ok = false;
      }
      if (!correoElectronico.includes('@') || !correoElectronico.includes('.')) {
        setError('err-correoElectronico', 'Ingresa un correo válido (ej: nombre@dominio.com).');
        ok = false;
      }

      if (password.length < 8) {
        setError('err-password', 'La contraseña debe tener al menos 8 caracteres.');
        ok = false;
      }

      if (confirmar !== password) {
        setError('err-confirmar', 'Las contraseñas no coinciden.');
        ok = false;
      }

      if (biografia.length < 10) {
        setError('err-biografia', 'La biografía debe tener al menos 10 caracteres.');
        ok = false;
      }

      if (!terminos) {
        setError('err-terminos', 'Debes aceptar los términos y condiciones.');
        ok = false;
      }

      if (ok) {
        alert('Registro exitoso. ¡Bienvenido/a!');
        formRegistro.reset();
      }
    });
  }

  // -------- Validación Login --------
  const formLogin = document.getElementById('formLogin');
  if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();

      const correoElectronico= document.getElementById('loginEmail').value.trim();
      const pass = document.getElementById('loginPassword').value;

      setError('err-login-email', '');
      setError('err-login-password', '');

      let ok = true;
      if (!correoElectronico.includes('@') || !correoElectronico.includes('.')) {
        setError('err-login-email', 'Correo no válido.');
        ok = false;
      }
      if (pass.length < 8) {
        setError('err-login-password', 'La contraseña debe tener al menos 8 caracteres.');
        ok = false;
      }

      if (ok) {
        alert('Ingreso exitoso (demo).');
        formLogin.reset();
      }
    });
  }
})();