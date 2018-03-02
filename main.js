
Vue.component('task-list', {

  // Have to wrap <task> in <div> beacuse of v-for ---> Render function should return a single root node.
  template:
      `<div>

        <task v-for="task in tasks">{{ task.description }}</task>

      </div>`,

  data() {
    return {
      tasks: [
        { description: 'Go to the store', completed: false },
        { description: 'Finish chores', completed: true },
        { description: 'Make dinner', completed: true },
        { description: 'Clean room', completed: false },
        { description: 'Make donation', completed: true },
        { description: 'Go to bed', completed: false }
      ]
    }
  }

});

Vue.component('task', {

  template: '<li><slot></slot></li>'

});

Vue.component('message-component', {

    // Have to be specific as to what is being passed through (ie title, body)
    props: ['title', 'body'],

    data() {

      return {

        isVisisble: true

      };
    },

    template:`

      <article class="message" v-show="isVisisble">

        <div class="message-header">

          {{ title }}

          <button class="delete" aria-label="delete" @click="isVisisble = false"></button>

        </div>

        <div class="message-body">

            {{ body }}

        </div>

      </article>

    `,

});



Vue.component('modal-component', {

  template: `
      <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <slot></slot>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close-modal')"></button>
      </div>

  `

});

Vue.component('tabs', {

  template: `
    <div>
      <div class="tabs">
        <ul>
          <li v-for="tab in tabs" :class="{'is-active': tab.selected }">
            <a href='#'> {{ tab.name }} </a>
          </li>
        </ul>
      </div>

      <div class="tabs-details">
        <slot></slot>
      </div>
    </div>
  `,

  data() {
    return { tabs: [] };
  },

  created() {
    this.tabs = this.$children;
  }

});


Vue.component('tab', {

  props: {
    name: {required: true},
    selected: {default: false}
  },

  template: `
    <div><slot></slot></div>
  `

});


new Vue({
  el: '#root',

  data: {
    showModal: false
  }

});
