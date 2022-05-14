<template>
  <div id="app">
    <router-view />
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a class="nav-link px-2 text-muted">English</a>
          </li>
          <li class="nav-item">
            <a href="https://www.flipsnack.com/BCD6A7CC5A8/dedun-manual.html" class="nav-link px-2 text-muted">Ayuda</a>
          </li>
          <li class="nav-item">
            <router-link to="/privacidad">
              <a class="nav-link px-2 text-muted">Políticas de privacidad</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/nosotros">
              <a class="nav-link px-2 text-muted">Sobre nosotros</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contactanos">
              <a class="nav-link px-2 text-muted">Contactanos</a>
            </router-link>
          </li>
        </ul>
        <p class="text-center text-muted">© 2021 Dedún, Inc</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {

}
</script>


