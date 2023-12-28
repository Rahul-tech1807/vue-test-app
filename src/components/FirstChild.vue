<template>
    <div class="container">
      <h1>{{ message }}</h1>
      <button @click="sendMessageToParent">Send Message to Parent From First child</button>
      <button @click="sendMessageToSecondChild">Send Message to second child From First child</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['message'],
    methods: {
    sendMessageToParent() {
      this.$emit('messageFromChild', 'Hello from First child');
    },
    sendMessageToSecondChild() {
      this.$emit('messageFromChildtoChild', 'Hello from First child to second child');
    }
  }
  };
  </script>
  <style scoped>
  .container {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  h1 {
    color: #2c3e50;
  }
  
  button {
    margin-top: 10px;
    padding: 10px 20px;
    border: none;
    background-color: #3498db;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  </style>
  
  