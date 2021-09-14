import { defineComponent, ref, reactive } from 'vue'

const img = require('./assets/logo.png') // eslint-disable-line

const App = defineComponent({
  setup() {
    const numberRef = ref(0)
    const state = reactive({
      name: 'william',
    })
    setInterval(() => {
      numberRef.value++
    }, 1000)

    return () => {
      const number = numberRef.value
      return (
        <div id="app">
          <img src={img} alt="Vue logo" />
          <p>{state.name + number}</p>
        </div>
      )
    }
  },
})

export default App
