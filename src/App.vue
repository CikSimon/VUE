<template>
  <div class="container">
    <div>
      <header class="d-flex">
        <div class="header-div"> 
          <h1 style="font-weight: bold;">NOTES</h1>
          <button class="b1">Add note</button>
        </div>   
      </header>  
    </div>
    <div class="cards-container">
      <div class="card">
        <p class="main-text"></p>
        <p class="date"></p>
        <p class="hour"></p>
      </div>
    </div>
  </div>
</template>

<style>
  .container{
    background-color: antiquewhite;
    width: 100vw;
    height: 100vh;
    color: black;
  }
  .d-flex{
    display: flex;
  }
  .header-div{
    text-align: center;
    justify-content: center;
    display: flex;
    
  }
</style>