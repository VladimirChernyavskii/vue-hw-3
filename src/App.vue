<script setup>
// Упражнение 1
import GreetingCard from './components/GreetingCard.vue'

const people = [
  {
    id: 1,
    name: 'Александр',
    age: 25,
    role: 'Разработчик',
  },
  {
    id: 2,
    name: 'Мария',
  },
  {
    id: 3,
    name: 'Иван',
    age: 30,
    role: 'Дизайнер',
  },
]

// Упражнение 2
import { ref, computed } from 'vue'
import CounterButton from './components/CounterButton.vue'

const apples = ref(0)
const pears = ref(0)

const total = computed(() => apples.value + pears.value)

// Упражнение 3
import InfoBox from './components/InfoBox.vue'

// Упражнение 4
import { useLocalStorage } from './composables/useLocalStorage.js'
import TodoItem from './components/TodoItem.vue'

const todos = useLocalStorage('todos', [])
const newTodo = ref('')

const remainingTodos = computed(() => {
  return todos.value.filter((todo) => !todo.done).length
})

const hasCompletedTodos = computed(() => {
  return todos.value.some((todo) => todo.done)
})

function addTodo() {
  const title = newTodo.value.trim()

  if (!title) return

  todos.value.push({
    id: Date.now(),
    title,
    done: false,
  })

  newTodo.value = ''
}

function toggleTodo(id) {
  const todo = todos.value.find((todo) => todo.id === id)

  if (todo) {
    todo.done = !todo.done
  }
}

function removeTodo(id) {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

function clearCompleted() {
  todos.value = todos.value.filter((todo) => !todo.done)
}
</script>

<template>
  <main class="page-container">
    <!-- Упражнение 1 -->
    <h2>Упражнение 1. Карточка приветствия</h2>
    <section class="cards">
      <GreetingCard
        v-for="person in people"
        :key="person.id"
        :name="person.name"
        :age="person.age"
        :role="person.role"
      />
    </section>

    <!-- Упражнение 2 -->
    <section >
      <h2>Упражнение 2. Счётчик с событием</h2>
      <div class="counters">
        <CounterButton
          label="Яблоки"
          @change="apples = $event"
        />

        <CounterButton
          label="Груши"
          :step="5"
          @change="pears = $event"
        />
      </div>
    
      <h2>Общее количество: {{ total }}</h2>
    </section>

    <!-- Упражнение 3 -->
    <section>
      <h2>Упражнение 3. Блок со слотами</h2>
      <div class="info-container">
        <!-- Первый блок: без заголовка и подвала -->
        <InfoBox>
          <p>Это основная информация о приложении.</p>
        </InfoBox>

        <!-- Второй блок: только с заголовком -->
        <InfoBox>
          <template #header>
            Новости
          </template>

          <p>Здесь будут отображаться последние новости.</p>
        </InfoBox>

        <!-- Третий блок: с заголовком и подвалом -->
        <InfoBox>
          <template #header>
            Контакты
          </template>

          <p>Свяжитесь с нами по электронной почте.</p>

          <template #footer>
            Email: example@mail.com
          </template>
        </InfoBox>
      </div>
    </section>

    <!-- Упражнение 4 -->
    <section>
      <h2>Упражнение 4. Список задач из компонентов</h2>
      <div class="todo-app">
        <h1>Список задач</h1>

        <form @submit.prevent="addTodo">
          <input
            v-model="newTodo"
            type="text"
            placeholder="Введите новую задачу"
          />

          <button type="submit">Добавить</button>
        </form>

        <p>Осталось: {{ remainingTodos }}</p>

        <div class="todo-list">
          <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @toggle="toggleTodo"
            @remove="removeTodo"
          />
        </div>

        <button
          v-if="hasCompletedTodos"
          @click="clearCompleted"
        >
          Очистить выполненные
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.page-container {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 20px;
  box-sizing: border-box;
}

.counters {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
}

.info-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  max-width: 900px;
}

.info-box {
  flex: 1;
  min-width: 220px;
}

.todo-app {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

h1 {
  text-align: center;
}

form {
  display: flex;
  gap: 8px;
}

form input {
  flex: 1;
  min-width: 0;
  padding: 10px;
}

button {
  padding: 8px 12px;
  cursor: pointer;
}

.todo-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>