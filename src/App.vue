<!-- tutorial 2:17:43 -->

<script setup>
  import {ref} from 'vue'

  let showModal = ref(false)
  let newNote = ref("")
  let notes = ref([])
  let addNote = () =>{
    notes.value.push({
      text: newNote.value,
      date: new Date()
    })
    showModal.value = false
    newNote.value = ""
  }
</script>

<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model="newNote" name="note" id="note" cols="30" rows="10"></textarea>
        <button class="addNote-button" @click="addNote">Add note</button>
        <button class="close-button" @click="showModal = false">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>
          Notes
        </h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <div v-for="note in notes" class="card">
          <p class="main-text">
            {{ note.text }}
          </p>
          <p class="date">
            {{ note.date }}
          </p>
        </div> 
      </div>  
    </div>
  </main>
</template>

<style scoped>
  main{
    height: 100vh;
    width: 100vw;
    background-color: antiquewhite;
    color: black;
  }

  header{
    display: flex;
    margin-left: 5vw;
  }
  h1{
    font-weight: bold;
    font-size: 60px;
  }
  header button{
    border: none;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: black;
    border-radius: 100%;
    color: antiquewhite;
    font-size: 20px;
    margin-left: 20vw;
    margin-top: 25px;
  }
  .card{
    width: 200px;
    height: 200px;
    background-color: cadetblue;
    border-radius: 20px;
    color: black;
    padding: 10px;
    border-color: antiquewhite;
    margin-right: 5px;
    margin-top: 5px;
  }
  .cards-container{
    display: flex;
    flex-wrap: wrap;
    font-weight: bold;
    margin-left: 5vw;
  }
  .overlay{
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.77);
    z-index: 10;
    text-align: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }
  .modal{
    width: 400px;
    height: 250px;
    background-color: antiquewhite;
    border-radius: 10px;
    position: relative;
    text-align: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    margin-top: 10vh;
  }
  .addNote-button{
    background-color: blueviolet;
    width: 90%;
    cursor: pointer;
  }
  .close-button{
    background-color: red;
    width: 90%;
    cursor: pointer;
    margin-top: 2px;
  }
</style>


