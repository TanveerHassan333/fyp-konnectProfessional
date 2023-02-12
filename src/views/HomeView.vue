<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
<div class="hero-section">
<div class="Hero-child-one">
  <h1>Stay Curious about anything, Get in touch</h1>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
  <router-link to="/register">
    <button class="btn-register" to="/register">Get Started</button>
  </router-link>
  
</div>
<div class="Hero-child-two">
   <img src="../assets/hero-image.jpg" alt="education">
</div>
</div>
</template>


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
 .hero-section{
  width : 100%;
  height: 100vh;
  background-color: violet;
  display: flex;
  justify-content: space-around;
 }
 .Hero-child-one{
  width: 50%;
 }
 .Hero-child-one h1{
  font-size: 3rem;
  color: white;
  padding-top: 9rem;
  padding-left: 5.5rem;
 }
 .Hero-child-one p{
  color: white;
  padding-left: 5.5rem;
  font-size: 0.90rem;
  font-weight: 400;
  padding-top: 1rem;
 }
 .btn-register{
  margin: 1rem 5.5rem;
  background-color: rgba(75, 59, 245, 0.616);
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
  padding: 0.7rem 2rem;
  border: none;
  cursor: pointer;
 }
 .Hero-child-two {
  width: 50%;
 }
 .Hero-child-two img{
  width: 90%;
  height: 70%;
  object-fit: contain;
  margin-top: 5rem;
  border-radius: 10px;
 }
</style>