import { defineComponent, ref, reactive } from 'vue'
import HelloWorld from './components/HelloWorld'

const img = require('./assets/logo.png') // eslint-disable-line

const App = defineComponent({
  setup() {
    const numberRef = ref(0)
    const state = reactive({
      name: 'william',
    })

    // setInterval(() => {
    //   state.name += '1'
    //   numberRef.value++
    // }, 1000)

    return () => {
      const number = numberRef.value
      console.log(state.name)
      return (
        <div id="app">
          <img src={img} alt="Vue logo" />
          <p>{state.name + number}</p>
          <input type="text" v-model={state.name} />
          <HelloWorld msg={'williamApp'} age={27} />
        </div>
      )
    }
  },
})

export default App
