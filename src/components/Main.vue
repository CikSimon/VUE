<!-- tutorial 2:17:43
nastudovat co je arrow function
nepouzivat script setup


sspravit button na deleted !!!!! "deleted permanently" - pouzi emit(naucit sa)
 

vuex 
pinea

axios requesty
 -->

<template>
    <main>
        <div>
            <div v-if="showModal" class="overlay">
                <div class="modal">
                    <textarea v-model="newNote" name="note" id="note" cols="30" rows="10"></textarea>
                    <button class="add-note-button" @click="addNote()">Add note</button>
                    <button class="close-button" @click="showModal = false">Close</button>
                </div>
            </div>
            <div class="container">
                <header>
                    <h1>
                        Notes
                    </h1>
                    <button class="plus-button" @click="showModal = true">+</button>
                    <button class="all-buttons" @click="deleteNotes()">Delete all notes</button>
                    <button class="all-buttons" @click="restoreNotes()">Restore all notes</button>
                    <router-link to="./deleted" class="all-buttons">Deleted page</router-link>
                </header>
                <div class="cards-container">
                    <div v-for="note in notes" class="card">
                        <p class="main-text">
                            {{ note.text }}
                        </p>
                        <p class="date">
                            {{ note.date}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div id="test-axios">
            <h2>{{ posts.id }} {{ posts.title }}</h2>
            <p>{{ posts.boddy }}</p>
        </div>
        <Deleted :deletedNotes="deletedNotes" @delete-permanently="deleteAllPermanently" />
        
    </main>
</template>

<script>
import axios from 'axios'
import Deleted from "../components/Deleted.vue"
export default {
    data() {
        return {
            showModal: false,
            newNote: "",
            notes: [],
            deletedNotes: [],
            posts: []
        }
    },
    methods: {
        addNote() {
            this.notes.push({
                text: this.newNote,
                date: new Date().toLocaleDateString()
            });
            this.showModal = false;
            this.newNote = "";
        },
        deleteNotes() {
            this.deletedNotes.push(...this.notes)
            this.notes = []
        },
        restoreNotes() {
            this.notes.push(...this.deletedNotes)
            this.deletedNotes = []
        },
        deleteAllPermanently() {
            this.deletedNotes = [];
        }
    },
    components: {
        Deleted
    },
    mounted() {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => this.posts = response.data)
    },
}
</script>

<style scoped>
main {
    height: 100vh;
    width: 100vw;
    background-color: white;
    color: black;
}

header {
    display: flex;
    margin-left: 5vw;
}

h1 {
    font-weight: bold;
    font-size: 60px;
}

.plus-button {
    border: none;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: black;
    border-radius: 100%;
    color: white;
    font-size: 20px;
    margin-left: 10vw;
    margin-top: 25px;
}

.all-buttons {
    border: none;
    cursor: pointer;
    background-color: black;
    border-radius: 10%;
    color: white;
    font-size: 20px;
    margin-left: 2vw;
    margin-top: 25px;
    height: 50px;
    padding: 5px;
    text-decoration: none;
}

.card {
    width: 200px;
    height: 200px;
    background-color: cadetblue;
    border-radius: 20px;
    color: black;
    padding: 10px;
    border-color: white;
    margin-right: 5px;
    margin-top: 5px;
}

.cards-container {
    display: flex;
    flex-wrap: wrap;
    font-weight: bold;
    margin-left: 5vw;
}

.overlay {
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

.modal {
    width: 400px;
    height: 250px;
    background-color: white;
    border-radius: 10px;
    position: relative;
    text-align: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    margin-top: 10vh;
}

.add-note-button {
    background-color: rgb(72, 134, 204);
    width: 90%;
    cursor: pointer;
}

.close-button {
    background-color: red;
    width: 90%;
    cursor: pointer;
    margin-top: 2px;
}</style>


