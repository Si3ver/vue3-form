import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    msg: String,
    age: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    console.log(props)
    return () => {
      return (
        <ul class="hello">
          <li>{props.msg}</li>
          <li>{props.age}</li>
        </ul>
      )
    }
  },
})
