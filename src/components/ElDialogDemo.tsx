import { defineComponent, ref } from 'vue'
import { ElButton, ElDialog } from 'element-plus'

export default defineComponent({
  setup(props, params) {
    console.log('ElButtonDemo setup: ', props, params)

    const dialogVisibleRef = ref(false)

    const handleClose = () => {
      dialogVisibleRef.value = false
    }

    return () => {
      console.log('>>>', dialogVisibleRef.value)

      return (
        <>
          <ElButton
            type="primary"
            onClick={() => {
              dialogVisibleRef.value = true
            }}
          >
            点击打开Dialog
          </ElButton>

          <ElDialog
            title="ElDialog弹窗"
            v-model={dialogVisibleRef.value}
            modelValue
            width="30%"
          >
            <div>弹窗内容</div>
            <slot name="footer">
              <span class="dialog-footer">
                <ElButton onClick={handleClose}>取消</ElButton>
                <ElButton type="primary" onClick={handleClose}>
                  确定
                </ElButton>
              </span>
            </slot>
          </ElDialog>
        </>
      )
    }
  },
})
