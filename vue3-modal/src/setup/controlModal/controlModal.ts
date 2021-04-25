import { inject, provide, ref, watchEffect } from 'vue';
import { ModalName } from './interface';
// 控制弹窗

/**
 * 控制关闭弹窗
 * @param modelName 相对应的弹窗组件名
 * @returns 
 */
export function closeModal(modelName: keyof ModalName) {
    // 控制弹窗 flag
    const visible = ref<boolean>(false);
    const show = inject(modelName, ref<boolean>(false))
    watchEffect(() => {
        visible.value = show.value
    })
    /**
     * 取消弹窗
     */
    function cancel() {
        visible.value = false;
        show.value = false
    }
    /**
     * 带有回调函数关闭弹窗
     * @param callback 
     */
    function handleOk(callback: Function) {
        cancel();
        callback && callback()
    }
    return { visible, cancel, handleOk }
}

/**
 * 控制打开弹窗
 * @param modelName 相对应的弹窗组件名
 * @returns openAction 打开弹窗方法
 */
export function openModal(modelName: keyof ModalName) {
    const name = ref<boolean>(false)
    provide(modelName, name);
    /**
     * 打开弹窗
     * @param value 弹窗名
     */
    function openAction() {
        name.value = true;
    }
    return { openAction }
}

export type { ModalName };
