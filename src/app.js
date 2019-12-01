import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input',Input);
Vue.component('g-row',Row);
Vue.component('g-col',Col);
Vue.component('g-layout',Layout);
Vue.component('g-header',Header);
Vue.component('g-sider',Sider);
Vue.component('g-content',Content);
Vue.component('g-footer',Footer);

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: '王',
    },
    methods:{
        inputChange(info){
            console.log(info);
        }
    }
});


// //单元测试
// import chai from 'chai'
// import spies from 'chai-spies'
//
// chai.use(spies);
//
// const expect = chai.expect;
// {// 作用域隔离
//     // 测试按钮含有icon
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings'
//         }
//     });
//     vm.$mount();
//     let useElement = vm.$el.querySelector('use');
//     let href = useElement.getAttribute('xlink:href');
//     expect(href).to.eq('#i-settings');// 断言
//     vm.$el.remove();
//     vm.$destroy();
// }
// {
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings',
//             loading: true,
//         }
//     });
//     vm.$mount();
//     let useElement = vm.$el.querySelector('use');
//     let href = useElement.getAttribute('xlink:href');
//     expect(href).to.eq('#i-loading');
//     vm.$el.remove();
//     vm.$destroy();
// }
// {
//     const div = document.createElement('div');
//     document.body.appendChild(div);
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings',
//         }
//     });
//     vm.$mount(div); //不挂载到页面，就不会渲染这个svg，就没有css
//     let svg = vm.$el.querySelector('svg');
//     let order = window.getComputedStyle(svg).order;
//     expect(order).to.eq('1');
//     vm.$el.remove();
//     vm.$destroy();
// }
// {
//     const div = document.createElement('div');
//     document.body.appendChild(div);
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings',
//             iconPosition: 'right',
//         }
//     });
//     vm.$mount(div); //不挂载到页面，就不会渲染这个svg，就没有css
//     let svg = vm.$el.querySelector('svg');
//     let order = window.getComputedStyle(svg).order;
//     expect(order).to.eq('2');
//     vm.$el.remove();
//     vm.$destroy();
// }
// {
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings'
//         }
//     });
//     vm.$mount();
//     let spy = chai.spy(function () {
//     });
//     vm.$on('click', spy);
//     //希望这个函数被执行
//     let button = vm.$el;
//     button.click();
//     expect(spy).to.have.been.called();
//     vm.$el.remove();
//     vm.$destroy();
// }