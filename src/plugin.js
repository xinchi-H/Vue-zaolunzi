import Toast from './toast'

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            let Constructor = Vue.extend(Toast);
            let toast = new Constructor({
                propsData: toastOptions
            });
            toast.$slots.default = [message];
            toast.$mount();
            let toastShow = document.getElementById("toastShow");
            toastShow.appendChild(toast.$el)
        }
    }
}