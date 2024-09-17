<script>
  export default {
    data() {
      return {
        name: 'Joe Doe',
        status: 'pending',
        tasks: ['Task 1', 'Task 2', 'Task 3'],
        url: 'https://google.com',
      }
    },
    methods: {
      toggleStatus(){
        if (this.status === 'active') {
          this.status = 'pending'
        }else if (this.status === 'pending') {
          this.status = 'inactive'
        }else{
          this.status = 'active'
        }
      }
    }
  }
</script>


<template>
  <h1>{{ name }}</h1>
  <br>
  <p v-if="status === 'active'">User is Active</p>
  <p v-else-if="status === 'pending' ">User is Pending</p>
  <p v-else>User is Inactive</p>
  <br>
  <ul>
    <li v-for = 'task in tasks' >{{ task }}</li> 
  </ul>
  <br>
  <a :href="url">Google</a>
  <button @click="toggleStatus">Toggle</button>
</template>

