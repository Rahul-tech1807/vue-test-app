<template>
  <form @submit.prevent="handleSubmit">
    <div v-for="block in formBlocks" :key="block.token">
      <label :for="block.token">{{ block.props.title }}</label>
      <input
        v-if="block.type === 'text'"
        :type="block.type"
        :id="block.token"
        :placeholder="block.props.placeholder"
        v-model="formData[block.token]"
        :required="block.props.required"
      />
      <input
        v-if="block.type === 'checkbox'"
        :type="block.type"
        :id="block.token"
        v-model="formData[block.token]"
      />
      <input
        v-if="block.type === 'date'"
        :type="block.type"
        :id="block.token"
        :placeholder="block.props.placeholder"
        v-model="formData[block.token]"
        :required="formData['IS_PERSON_MINOR']"
      />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "DynamicForm",
  data() {
    return {
      formData: {},
      formBlocks: [
        {
          token: "PERSON_NAME",
          type: "text",
          props: {
            title: "Enter your name",
            required: true,
            placeholder: "e.g. John Doe",
          },
        },
        {
          token: "IS_PERSON_MINOR",
          type: "checkbox",
          props: {
            title: "Is the current person a minor?",
            default: false,
          },
        },
        {
          token: "PERSON_DOB",
          type: "date",
          props: {
            title: "Enter your DOB",
            required: "IS_PERSON_MINOR",
            placeholder: "e.g. 01/01/2000",
          },
        },
      ],
    };
  },
  methods: {
    handleSubmit() {
      let isValid = true;
      this.formBlocks.forEach((block) => {
        if (block.props.required && !this.formData[block.token]) {
          isValid = false;
          alert(`Please fill out the ${block.props.title}`);
        }
      });

      if (
        isValid &&
        this.formData["IS_PERSON_MINOR"] &&
        !this.formData["PERSON_DOB"]
      ) {
        alert("Please enter your DOB");
        isValid = false;
      }

      if (isValid) {
        console.log("Form data:", this.formData);
      }
    },
  },
  created() {
    this.formBlocks.forEach((block) => {
      this.$set(this.formData, block.token, block.props.default || "");
    });
  },
};
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="date"] {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 250px;
}

input[type="checkbox"] {
  margin-top: 5px;
}

button {
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #45a049;
}
</style>
