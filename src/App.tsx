import { defineComponent } from 'vue'
import ElDialogDemo from './components/ElDialogDemo'
import 'element-plus/dist/index.css'

const App = defineComponent({
  setup() {
    return () => {
      return (
        <div id="app">
          <ElDialogDemo />
        </div>
      )
    }
  },
})

export default App
