<template>
  <div class="container">
    <input type="text" v-model="search" placeholder="Search users...">
    <button @click="filterUsers">Search</button>
    <ul>
      <li v-for="user in paginatedUsers" :key="user.id">
        {{ user.name }}
      </li>
    </ul>

    <div class="pagination">
      <button 
        v-for="page in totalPages" 
        :key="page" 
        :class="{ active: page === currentPage }"
        @click="currentPage = page">
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'UserList',
  data() {
    return {
      search: '',
      currentPage: 1,
      itemsPerPage: 3,
    };
  },
  computed: {
    ...mapState(['users']),
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredUsers.slice(start, end);
    },
    filteredUsers() {
      return this.users.filter(user => 
        user.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    totalPages() {
      return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
    }
  },
  methods: {
    filterUsers() {
      this.$store.dispatch('fetchUsers');
    }
  },
  created() {
    this.filterUsers();
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

input[type="text"] {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 60%;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  border: none;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #45a049;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f2f2f2;
  margin-top: 5px;
  padding: 10px;
  border-radius: 4px;
  width: 60%;
  text-align: left;
}

li:hover {
  background-color: #e6e6e6;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  padding: 5px 10px;
  margin: 0 5px; /* Spacing between buttons */
  border: 1px solid #ddd;
  background-color: #f8f8f8; /* Button background color */
  color: #333; /* Button text color */
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.pagination button:hover {
  background-color: #e0e0e0;
}

.pagination button.active {
  background-color: #007bff;
  color: white; /* Active button text color */
}
</style>
