import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
    }
});


//单元测试
import chai from 'chai'

const expect = chai.expect;
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    });
    button.$mount();
    let useElement = button.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-settings');
    button.$el.remove();
    button.$destroy();
}
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true,
        }
    });
    button.$mount();
    let useElement = button.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-loading');
    button.$el.remove();
    button.$destroy();
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings',
        }
    });
    button.$mount(div); //不挂载到页面，就不会渲染这个svg，就没有css
    let svg = button.$el.querySelector('svg');
    let order = window.getComputedStyle(svg).order;
    expect(order).to.eq('1');
    button.$el.remove();
    button.$destroy();
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right',
        }
    });
    button.$mount(div); //不挂载到页面，就不会渲染这个svg，就没有css
    let svg = button.$el.querySelector('svg');
    let order = window.getComputedStyle(svg).order;
    expect(order).to.eq('2');
    button.$el.remove();
    button.$destroy();
}