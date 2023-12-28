<template>
  <div>
    <FirstChild
      :message="parentMessage"
      @messageFromChild="receiveMessageFromChild"
      @messageFromChildtoChild="receiveMessageForSecondChild"
    />
    <h2 v-if="childToParentMessage">Message from First child to parent: {{ childToParentMessage }}</h2>

    <SecondChild
      :message="childToChildMessage"
    />
    <button v-if="childToChildMessage || childToParentMessage" @click="clear">clear</button>
  </div>
</template>

<script>
import FirstChild from "./FirstChild.vue";
import SecondChild from "./SecondChild.vue";


export default {
  components: {
    FirstChild,
    SecondChild
  },
  data() {
    return {
      parentMessage: "Hello from parent to First Child",
      childToParentMessage: '',
      childToChildMessage: ''
    };
  },
  methods: {
    receiveMessageFromChild(message) {
      this.childToParentMessage = message 
    },
    receiveMessageForSecondChild(message) {
      this.childToChildMessage = message 
    },
    clear() {
        this.childToParentMessage = ""
        this.childToChildMessage = ""
    }
  },
};
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

h2 {
  margin: 10px 0;
  color: #333;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #45a049;
}
</style>
