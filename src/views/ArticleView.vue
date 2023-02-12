<template>
    <form @submit.prevent="handleSubmit">
        <label for="Name">
            <input type="text" placeholder="Enter your name" class="name-input" v-model="name">
        </label> <br>
        <label for="Email">
            <input type="text" placeholder="Enter your email"  class="name-input" v-model="email">
        </label> <br>
        <label for="Message">
        <textarea class="name-input" placeholder="Enter your article"  v-model="message"> 
        </textarea>
        </label> <br>
        <button class="submit">Submit Article</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import firebase from 'firebase';
import 'firebase/firestore'
const name = ref('')
const email = ref('')
const message = ref('')
const db = firebase.firestore()
 const handleSubmit = async () => {
      const data = {
        name: name.value,
          email: email.value,
          message : message.value
      };

      try {
        await db.collection('forms').add(data);
        alert('Form data submitted successfully!');
      } catch (error) {
        console.log('Error submitting form data: ', error);
      }
    };
</script>