<template>
  <div class="register">
    <h1>Create an Account</h1>
    <input type="text" placeholder="Email" required v-model="email" />
    <input type="password" placeholder="Password" required v-model="password" />
    <button class="register-btn" @click="register">Submit</button>
  </div>
 
</template>

<script setup>
  import { ref } from 'vue'
  import firebase from 'firebase'
  import { useRouter } from 'vue-router' // import router
  const email = ref('')
  const password = ref('')
  const router = useRouter() // get a reference to our vue router
  const register = () => {
    firebase
      .auth() // get the auth api
      .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
      .then((data) => {
        console.log('Successfully registered!');
        router.push('/sign-in') // redirect to the feed
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
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
.register{
  width: 50%;
  margin: 2rem auto;
  background-color: rgb(185, 141, 227);
  border-radius: 0.8rem;
  padding: 1rem;
  font-family: Josefin Sans;
}
.register h1{
  text-align: center;
  margin-top: 1rem;
  color: white;
}
.register input{
  display: block;
  margin: 2rem 1rem;
  width: 90%;
  height: 2.5rem;
  border: none; 
  border-radius: 0.4rem;
  padding-left: 0.8rem;
}
.register input:focus{
  border: none;
}
.register-btn{
  margin: 0.6rem 1rem;
  background-color: rgba(75, 59, 245, 0.616);
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
  padding: 0.5rem 2rem;
  border: none;
  
}
</style>