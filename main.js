


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


new Vue({
  el: '#root'

});
