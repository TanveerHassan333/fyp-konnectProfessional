<template>
  <div class="article-show">
    
      <div v-for="item in items" :key="item.id">
        <p>Writer : {{ item.name }}</p> 
        <p>{{ item.message }}</p> 
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import firebase from 'firebase'
import 'firebase/firestore'

export default {
  setup() {
    const items = reactive([])
    const db = firebase.firestore()

    onMounted(async () => {
      const itemsRef = db.collection('forms')
      const querySnapshot = await itemsRef.get()
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
    })

    return { items }
  },
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
.article-show{
   width: 85%;
   font-size: 0.95rem;
   font-weight: 400;
   margin: 2rem auto;
}
.article-show p{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.90rem;
    color: gray;
}
</style>