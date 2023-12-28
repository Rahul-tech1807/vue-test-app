<template>
  <div id="app">
    <div v-if="!userForms">
    <button @click="isUsers = !isUsers">{{ text }}</button>
    <div v-if="isUsers" class="users-list"> 
      <UsersList />
    </div>
    <div v-else>
      <ParentComponent />
    </div>

    </div>
    <div v-else>
      <button @click="userForms = !userForms">{{ userFormsText }}</button>
      <UserForms />
    </div>
  </div>
</template>

<script>
import UsersList from './components/UsersList.vue'
import ParentComponent from './components/ParentComponent.vue'
import UserForms from './components/UserForms.vue'



export default {
  name: 'App',
  components: {
    UsersList,
    ParentComponent,
    UserForms
  },
  data() {
    return {
      isUsers: false, 
      userForms: true
    }
  },
  computed: {
    text() {
      return this.isUsers ? 'Click here to test parent child feature' : 'Click here to test user list component'
    },
    userFormsText() {
      return this.userForms ? 'Click here to test parent child feature' : 'Click here to test form component'
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #34495e;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #4e6a85;
}

.users-list, .parent-component {
  margin-top: 20px;
}

.parent-component {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}
</style>

