import { defineComponent, ref, h, reactive } from 'vue'

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
      return h('div', { id: 'app' }, [h('p', state.name + number)])
    }
  },
})

export default App
