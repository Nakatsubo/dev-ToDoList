# README
This Repository is ToDoList by Vue.js<br>
<br>
Referenced by<br>
https://bit.ly/31826CY


## インデックス


## 環境
- Vue.js


## 構成
.
├── README.md
├── index.html
├── main.css
└── main.js

```
$ tree -L 1
```

### Phase1 インスタンスを作成

#### index.html

```
<body>
  <div id="app">
  </div>
</body>
```

#### main.js

```
const app = new Vue({
  el: '#app',
  data: {
  },
  methods: {
  }
})
```

### Phase2 ローカルストレージを作成
参考サイト<br>
<a href="http://www.htmq.com/webstorage/" target="_blank" rel="noopener">Web Storage API</a>

#### main.js

```
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
```

### Phase3 リストデータ用のHTMLを作成

#### index.html

```
<div id="app">
  <table>
    <thead>
      <tr>
        <th class="id">ID</th>
        <th class="comment">コメント</th>
        <th class="state">状態</th>
        <th class="button">-</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
</div>
```

### Phase4 リストデータ用の配列を作成

#### index.html

```
<div id="app">
  <table>
    <thead>
      <tr>
        <th class="id">ID</th>
        <th class="comment">コメント</th>
        <th class="state">状態</th>
        <th class="button">-</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in todos" v-bind:key="item.id">
        <th>{{ item.id }}</th>
        <td>{{ item.comment }}</td>
        <td class="state">
          <button>{{ item.state }}</button>
        </td>
        <td class="button">
          <button>削除</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

#### main.js

```
const app = new Vue({
  el: '#app',
  data: {
    todos: []
  },
  methods: {
  }
})
```

### Phase5 フォームの値を取得

#### index.html

```
:<snip>
<h2>新しい作業の追加</h2>
<form class="add-form" v-on:submit.prevent="doAdd">
  コメント <input type="text" ref="comment">
  <button type="submit">追加</button>
</form>
:<snip>
```

### Phase6 フォームの値をリストに追加

#### main.js

```
const app = new Vue({
  :<snip>
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
    }
  }
})
```

### Phase7 ストレージへ自動保存化

#### main.js

```
const app = new Vue({
  :<snip>
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
  :<snip>
})
```

### Phase8 保存されたリストを取得

#### main.js

```
const app = new Vue({
  :<snip>
  created: function() {
    // fetchメソッドで取得
    this.todos = todoStorage.fetch()
  },
  :<snip>
})
```

### Phase9 リストの状態の変更

#### index.html

```
:<snip>
<td class="state">
  <button v-on:click="doChangeState(item)">{{ item.state }}</button>
</td>
:<snip>
```

#### main.js

```
const app = new Vue({
  :<snip>
  methods: {
    :<snip>
    doChangeState: function(item) {
      item.state ? 0 : 1
    }
  }
})
```

### Phase10 リストから削除

#### index.html

```
:<snip>
<td class="button">
  <!-- altキーを押しながら削除 -->
  <button v-on:click.alt="doRemove(item)">削除</button>
</td>
:<snip>
```

#### main.js

```
const app = new Vue({
  :<snip>
  methods: {
    :<snip>
    doRemove: function(item) {
      // 文字列.indexOf('文字列') => 文字列からある文字列を検索する。戻り値は数値
      let index = this.todos.indexOf(item)
      console.log(index) // => 指定位置のインデックス番号を返す
      // 配列.splice(指定位置, 取り出す数) => 配列から要素の一部を置き換える
      this.todos.splice(index, 1)
    }
  }
})
```
