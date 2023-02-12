<template>
    <div class="forgot-pass">
        <form @submit.prevent="forgetPassword">
           <p>Enter your email and click Reset to reset your password</p>
            <div class="form-group">
                <input type="email" placeholder="Enter your email" class="form-control" v-model="user.email" />
            </div>

            <button type="submit" class="btn-block">Reset password</button>
        </form>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {   
        email: ''
      }
    };
  },
  methods: {
    forgetPassword() {
        firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
            alert('Check your registered email to reset the password!')
            this.user = {   
              email: ''
            }
        }).catch((error) => {
          alert(error)
        })
    }
  }
};
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
 .forgot-pass{
   width: 50%;
   margin: 2rem auto;
   background-color: rgb(185, 141, 227);
   border-radius: 0.8rem;
   padding: 1rem;
   font-family: Josefin Sans;
}
 
form p{
font-family: Josefin Sans;
color: white;
text-align: center;
margin-top: 1rem;
}
.form-group input{
    display: block;
    margin: 1.5rem;
    width: 90%;
    height: 2.5rem;
    border: none; 
    border-radius: 0.4rem;
    padding-left: 0.8rem;
}
.btn-block{
    margin: 0.4rem 1rem;
  background-color: rgba(75, 59, 245, 0.616);
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
  padding: 0.5rem 2rem;
  border: none;
  cursor: pointer;
}
</style>