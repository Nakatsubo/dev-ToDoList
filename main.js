// ローカルストレージAPI
// https://jp.vuejs.org/v2/examples/todomvc.html
var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  fetch: function() {
    var todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

// インスタンスを生成
const app = new Vue({
  el: '#app',
  data: {
    todos: []
  },
  watch: {
    todos: {
      handler: function(todos) {
        // saveメソッドで保存
        todoStorage.save(todos)
      },
      // ネストしたオブジェクトも監視する
      deep: true
    }
  },
  created: function() {
    // fetchメソッドで取得
    this.todos = todoStorage.fetch()
  },
  methods: {
    doAdd: function(event, value) {
      let comment = this.$refs.comment
      if (!comment.value.length) {
        return
      }
      this.todos.push({
        id: todoStorage.uid++,
        comment: comment.value,
        state: 0
      })
      comment.value = ''
    },
    doChangeState: function(item) {
      item.state ? 0 : 1
    },
    doRemove: function(item) {
      // 文字列.indexOf('文字列') => 文字列からある文字列を検索する
      let index = this.todos.indexOf(item)
      console.log(index) // => 指定位置のインデックス番号を返す
      // 配列.splice(指定位置, 取り出す数) => 配列から要素の一部を置き換える
      this.todos.splice(index, 1)
    }
  }
})
