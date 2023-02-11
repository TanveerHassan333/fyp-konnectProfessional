<template>
  <div class="container">
    <nav>
      <router-link to="/">
        <img class="logo" src="./assets/Capture.JPG" alt="logo">
      </router-link>
      <div class="navbar">
        <router-link to="/"> Home </router-link> 
      <router-link to="/feed"> Feed </router-link> 
      <span v-if="isLoggedIn">
        <button @click="signOut">Logout</button>
      </span>
      <span v-else>
        <router-link class="register" to="/register"> Register </router-link> 
        <router-link class="register" to="/sign-in"> Login </router-link>
      </span>
      </div> 
    </nav>
    <router-view />
  </div>
</template>

<script setup>
  import { ref, watchEffect } from 'vue' // used for conditional rendering
  import firebase from 'firebase'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const isLoggedIn = ref(true)
  // runs after firebase is initialized
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        isLoggedIn.value = true // if we have a user
      } else {
        isLoggedIn.value = false // if we do not
      }
  })
  const signOut = () => {
    firebase.auth().signOut()
    router.push('/')
  }
</script>
 <style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&display=swap');
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
 html{
  font-family: 'Josefin Sans', sans-serif;
  font-size: 15px;
 }
.container{
  width: 85%;
  margin: 0 auto;
}
.logo{
  width: 7rem;
  height: 5rem;
  object-fit: contain;
}
nav{
  display: flex;
  justify-content: space-between;
}
.navbar{
  display: flex;
  justify-content: space-around;
  font-family: Josefin Sans;
  font-size: 1rem;
  font-weight: 600;
  color: rgba(167, 86, 244, 0.804);
}
.navbar a{
  text-decoration: none;
  margin: 1rem 1.5rem;
}
 .navbar span .register{
  margin: 1rem 1.5rem;
}
</style>
