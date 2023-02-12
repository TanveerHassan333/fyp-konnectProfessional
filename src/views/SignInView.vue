<template>
<div class="register">
    <h1>Login to Your Account</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <p v-if="errMsg">{{ errMsg }}</p>
    <button class="register-btn" @click="signIn">Submit</button>
    <p>Forgot password? <router-link to="/forgotPass">Forgot password</router-link></p>
    <p class="have-account">Do you have an Account? <router-link to="/register">Create</router-link></p>
</div>
    
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import firebase from 'firebase'
    import { useRouter } from 'vue-router' // import router
    const email = ref('')
    const password = ref('')
    const errMsg = ref() // ERROR MESSAGE
    const router = useRouter() // get a reference to our vue router
    const signIn = () => { // we also renamed this method
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
        .then((data) => {
          console.log('Successfully logged in!');
          router.push('/') 
        })
        .catch(error => {
          switch (error.code) {
            case 'auth/invalid-email':
                errMsg.value = 'Invalid email...!!'
                break
            case 'auth/user-not-found':
                errMsg.value = 'No account with that email was found...!!'
                break
            case 'auth/wrong-password':
                errMsg.value = 'Incorrect password...!!'
                break
            default:
                errMsg.value = 'Email or password was incorrect...!!'
                break
          }
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
  cursor: pointer;
  
}
.register p{
    margin-left: 1rem;
    color: red;
    font-size: 0.90rem;
}
.have-account{
    line-height: 2.4;
}
  </style>