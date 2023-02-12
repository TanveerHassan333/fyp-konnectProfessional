<template>
  <div class="container">
    <nav>
      <router-link to="/">
        <img class="logo" src="./assets/Capture.JPG" alt="logo">
      </router-link>
      <div class="navbar">
        <router-link to="/"> Home </router-link> 
      <router-link to="/feed"> Feed </router-link> 
      <span class="login-btn" v-if="isLoggedIn">
        <router-link to="/article">
          Articles
        </router-link>
        <router-link to="/articleShow">
          Show Article
        </router-link>
        <button class="logout" @click="signOut">Logout</button>
      </span>
      <span class="register-btn" v-else>
        <router-link to="/register"> Register </router-link> 
        <router-link to="/sign-in"> Login </router-link>
      </span>
      </div> 
    </nav> 
  </div>
  <router-view />
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
 <style>
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
  margin-top: 1rem;
}
.navbar a{
  text-decoration: none;
  margin: 1rem 1.5rem;
}
.navbar a:hover{
  border-bottom: 2px solid rgba(167, 86, 244, 0.804);
}
.register-btn{
  margin: 1rem 1.5rem;
}
.login-btn{
  margin: 0.5rem 0.8rem;
  color: rgba(167, 86, 244, 0.804);
  text-decoration: none;
}
.logout{
  background-color: rgba(167, 86, 244, 0.804);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-family: Josefin Sans;
  font-size: 1rem;
  font-weight: 600;
}
</style>
