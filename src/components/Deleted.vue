<template>
    <main>
        <header>
            <div class="header-container">
                <h1>Here are your deleted notes</h1>
                <router-link class = "main-page-button" to="/">Main page</router-link>
                <button class="all-buttons" @click="permanentDelete()">Delete all notes permanently</button>
            </div>
        </header>   
         <div class="cards-container">
            <div v-for="note in deletedNotes" class="card">
                <p class="main-text">
                    {{note.text}}
                </p>
                <p class="date">
                    {{note.date}}
                </p>
            </div>
        </div> 
    </main>    
</template>

<script>
export default {
    props: ["deletedNotes"],
    methods: {
        permanentDelete(){
            this.$emit("delete-permanently"); // Emit event to parent component
        },
    },
    mounted() {
        console.log(this.deletedNotes)
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
    .header-container{
        display: flex;
    }

    h1 {
        font-weight: bold;
        font-size: 60px;
    }

    .main-page-button{
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
</style>