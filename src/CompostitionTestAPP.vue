<script setup>

  import {ref, onMounted} from 'vue';
      const name = ref('Joe Doe');
      const status = ref('active');
      const tasks = ref(['Task 1', 'Task 2', 'Task 3']);
      const newTask = ref('')
      
      const toggleStatus = () => {
        if (status.value === 'active') {
          status.value = 'pending'
        }else if (status.value === 'pending') {
          status.value = 'inactive'
        }else{
          status.value = 'active'
        }
      }

      const addTask = () => {
        if (newTask.value.trim() !== '') {
          tasks.value.push(newTask.value);
          newTask.value = '';
        }
      }

      const deleteTask = (index) => {
        tasks.value.splice(index, 1);
      }

      onMounted(async() => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos');
          const data = await response.json();
          tasks.value = data.map(task => task.title);
        } catch (error) {
          console.error(error);
        }
      })
</script>


<template>
  <h1>{{ name }}</h1>
  <br>
  <p v-if="status === 'active'">User is Active</p>
  <p v-else-if="status === 'pending' ">User is Pending</p>
  <p v-else>User is Inactive</p>
  <br>
  <form @submit.prevent="addTask">
    <label for="newTask">Add Task: </label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Add</button>
  </form>
  <br>
  <h3>Tasks</h3>
  <br>
  <ul>
    <li v-for = '(task, index) in tasks' :key="task" >
      <span>
        {{ task }}
      </span>
      <button @click="deleteTask(index)">Delete</button>
    </li> 
  </ul>
  <br>
  <button @click="toggleStatus">Toggle</button>
</template>

