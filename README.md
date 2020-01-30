# README
This Repository is ToDoList by Vue.js<br>
<br>
Referenced by<br>
https://bit.ly/31826CY


## インデックス

- <a href="https://github.com/NakatsuboYusuke/dev-ToDoList#phase1-%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E3%82%92%E4%BD%9C%E6%88%90">Phase1 インスタンスを作成</a>
- <a href="https://github.com/NakatsuboYusuke/dev-ToDoList#phase2-%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%82%B8%E3%82%92%E4%BD%9C%E6%88%90">Phase2 ローカルストレージを作成</a>
- <a href="https://github.com/NakatsuboYusuke/dev-ToDoList#phase3-%E3%83%AA%E3%82%B9%E3%83%88%E3%83%87%E3%83%BC%E3%82%BF%E7%94%A8%E3%81%AEhtml%E3%82%92%E4%BD%9C%E6%88%90">Phase3 リストデータ用のHTMLを作成</a>
- <a href="https://github.com/NakatsuboYusuke/dev-ToDoList#phase4-%E3%83%AA%E3%82%B9%E3%83%88%E3%83%87%E3%83%BC%E3%82%BF%E7%94%A8%E3%81%AE%E9%85%8D%E5%88%97%E3%82%92%E4%BD%9C%E6%88%90">Phase4 リストデータ用の配列を作成</a>
- <a href="https://github.com/NakatsuboYusuke/dev-ToDoList#phase5-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%81%AE%E5%80%A4%E3%82%92%E5%8F%96%E5%BE%97">Phase5 フォームの値を取得</a>
- <a href="https://github.com/NakatsuboYusuke/dev-ToDoList#phase6-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%81%AE%E5%80%A4%E3%82%92%E3%83%AA%E3%82%B9%E3%83%88%E3%81%AB%E8%BF%BD%E5%8A%A0">Phase6 フォームの値をリストに追加</a>
- <a href="https://github.com/NakatsuboYusuke/dev-ToDoList#phase7-%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%82%B8%E3%81%B8%E3%83%AA%E3%82%B9%E3%83%88%E3%82%92%E8%87%AA%E5%8B%95%E4%BF%9D%E5%AD%98%E5%8C%96">Phase7 ストレージへリストを自動保存化</a>
- <a href="https://github.com/NakatsuboYusuke/dev-ToDoList#phase8-%E4%BF%9D%E5%AD%98%E3%81%95%E3%82%8C%E3%81%9F%E3%83%AA%E3%82%B9%E3%83%88%E3%82%92%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%82%B8%E3%81%8B%E3%82%89%E5%8F%96%E5%BE%97">Phase8 保存されたリストをストレージから取得</a>
- <a href="https://github.com/NakatsuboYusuke/dev-ToDoList#phase9-%E3%83%AA%E3%82%B9%E3%83%88%E3%81%AE%E7%8A%B6%E6%85%8B%E3%81%AE%E5%A4%89%E6%9B%B4">Phase9 リストの状態の変更</a>
- <a href="https://github.com/NakatsuboYusuke/dev-ToDoList#phase10-%E3%83%AA%E3%82%B9%E3%83%88%E3%81%8B%E3%82%89%E5%89%8A%E9%99%A4">Phase10 リストから削除</a>
- <a href="https://github.com/NakatsuboYusuke/dev-ToDoList#phase11-%E9%81%B8%E6%8A%9E%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%82%92%E4%BD%9C%E6%88%90">Phase11 選択フォームを作成</a>
- <a href="https://github.com/NakatsuboYusuke/dev-ToDoList#phase12-%E7%B5%9E%E3%82%8A%E8%BE%BC%E3%81%BF%E6%A9%9F%E8%83%BD%E3%82%92%E4%BD%9C%E6%88%90">Phase12 絞り込み機能を作成</a>
- <a href="https://github.com/NakatsuboYusuke/dev-ToDoList#phase13-%E6%96%87%E5%AD%97%E5%88%97%E3%81%AE%E5%A4%89%E6%8F%9B%E6%A9%9F%E8%83%BD%E3%82%92%E4%BD%9C%E6%88%90">Phase13 文字列の変換機能を作成</a>
- <a href="https://github.com/NakatsuboYusuke/dev-ToDoList/tree/develop#%E5%AE%8C%E6%88%90">完成</a>


## 環境
- Vue.js v2.5.16


## 構成

```
.
├── README.md
├── index.html
├── main.css
└── main.js
```

```
$ tree -L 1
```

## Phase1 インスタンスを作成

### index.html

```
<body>
  <div id="app">
  </div>
</body>
```

### main.js

```
const app = new Vue({
  el: '#app',
  data: {
  },
  methods: {
  }
})
```

## Phase2 ローカルストレージを作成
参考サイト<br>
<a href="http://www.htmq.com/webstorage/" target="_blank" rel="noopener">Web Storage API</a>

### main.js

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

## Phase3 リストデータ用のHTMLを作成

### index.html

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

## Phase4 リストデータ用の配列を作成

### index.html

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

### main.js

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

## Phase5 フォームの値を取得

### index.html

```
:<snip>
<h2>新しい作業の追加</h2>
<form class="add-form" v-on:submit.prevent="doAdd">
  コメント <input type="text" ref="comment">
  <button type="submit">追加</button>
</form>
:<snip>
```

## Phase6 フォームの値をリストに追加

### main.js

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

## Phase7 ストレージへリストを自動保存化

### main.js

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

## Phase8 保存されたリストをストレージから取得

### main.js

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

## Phase9 リストの状態の変更

### index.html

```
:<snip>
<td class="state">
  <button v-on:click="doChangeState(item)">{{ item.state }}</button>
</td>
:<snip>
```

### main.js

```
const app = new Vue({
  :<snip>
  methods: {
    :<snip>
    doChangeState: function(item) {
      item.state = item.state ? 0 : 1
    }
  }
})
```

## Phase10 リストから削除

### index.html

```
:<snip>
<td class="button">
  <button v-on:click.alt="doRemove(item)">削除</button>
</td>
:<snip>
<p>※削除ボタンはaltキーを押しながらクリックして下さい</p>
```

### main.js

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

## Phase11 選択フォームを作成

### index.html

```
<label v-for="item in options">
  // v-model ディレクティブの値には、ユーザーの入力と同期させたいデータを指定する
  <input type="radio" v-model="current" v-bind:value="item.value">{{ item.label }}
</label>
```

### main.js

```
const app = new Vue({
  :<snip>
  data: {
    todos: [],
    options: [
      { value: -1, label: 'すべて' },
      { value: 0, label: '作業中' },
      { value: 1, label: '完了' }
    ],
    // 初期値
    current: -1
  },
  :<snip>
})
```

## Phase12 絞り込み機能を作成

### index.html

```
（{{ computedTodos.length }} 件を表示）
:<snip>
<!-- <tr v-for="item in todos" v-bind:key="item.id"> -->
<tr v-for="item in computedTodos" v-bind:key="item.id">
```

### main.js

```
const app = new Vue({
  :<snip>
  computed: {
    computedTodos: function() {
      // 配列.filter(コールバック関数) => コールバック関数に合格した配列を生成して返す
      return this.todos.filter(function(element) {
        return this.current < 0 ? true : this.current === element.state
      }, this)
    }
  },
  :<snip>
})
```

## Phase13 文字列の変換機能を作成

### index.html

```
<td class="{done:item.state}">
  <button v-on:click="doChangeState(item)">{{ labels[item.state] }}</button>
</td>
```

### main.js

```
const app = new Vue({
  :<snip>
  computed: {
    :<snip>
    labels: function() {
      // 配列.reduce(コールバック関数, [初期値]) => 各要素を左から右に処理して単一の値を生成する
      return this.options.reduce(function(a, b) {
        // Object.assign(target, ...source) => sourceを参照して、targetに値をコピーまたマージする
        return Object.assign(a, { [b.value] : b.label })
      }, {})
    }
  },
  :<snip>
})
```

## 完成

### index.html

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Vue.js App</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <div id="app">
    <h1>ToDoList</h1>

    <label v-for="item in options">
      <input type="radio" v-model="current" v-bind:value="item.value">{{ item.label }}
    </label>

    （{{ computedTodos.length }} 件を表示）

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
        <tr v-for="item in computedTodos" v-bind:key="item.id">
          <th>{{ item.id }}</th>
          <td>{{ item.comment }}</td>
          <td class="{done:item.state}">
            <button v-on:click="doChangeState(item)">{{ labels[item.state] }}</button>
          </td>
          <td class="button">
            <button v-on:click.alt="doRemove(item)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p>※削除ボタンはaltキーを押しながらクリックして下さい</p>

    <h2>新しい作業の追加</h2>
    <form class="add-form" v-on:submit.prevent="doAdd">
      コメント <input type="text" ref="comment">
      <button type="submit">追加</button>
    </form>

  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
  <script src="main.js"></script>
</body>
</html>
```

### main.js

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

const app = new Vue({
  el: '#app',

  data: {
    todos: [],
    options: [
      { value: -1, label: 'すべて' },
      { value: 0, label: '作業中' },
      { value: 1, label: '完了' }
    ],
    current: -1
  },

  computed: {
    computedTodos: function() {
      return this.todos.filter(function(element) {
        return this.current < 0 ? true : this.current === element.state
      }, this)
    },

    labels: function() {
      return this.options.reduce(function(a, b) {
        return Object.assign(a, { [b.value] : b.label })
      }, {})
    }
  },

  watch: {
    todos: {
      handler: function(todos) {
        todoStorage.save(todos)
      },
      deep: true
    }
  },

  created: function() {
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
      item.state = item.state ? 0 : 1
    },
    doRemove: function(item) {
      let index = this.todos.indexOf(item)
      this.todos.splice(index, 1)
    }
  }

})
```

### main.css

```
* {
  box-sizing: border-box;
}

#app {
  max-width: 640px;
  margin: 0 auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}
thead th {
  border-bottom: 2px solid #0099e4; /*#d31c4a */
  color: #0099e4;
}
th,
th {
  padding: 0 8px;
  line-height: 40px;
}
thead th.id {
  width: 50px;
}
thead th.state {
  width: 100px;
}
thead th.button {
  width: 60px;
}
tbody td.button, tbody td.state {
  text-align: center;
}
tbody tr td,
tbody tr th {
  border-bottom: 1px solid #ccc;
  transition: all 0.4s;
}
tbody tr.done td,
tbody tr.done th {
  background: #f8f8f8;
  color: #bbb;
}
tbody tr:hover td,
tbody tr:hover th {
  background: #f4fbff;
}

button {
  border: none;
  border-radius: 20px;
  line-height: 24px;
  padding: 0 8px;
  background: #0099e4;
  color: #fff;
  cursor: pointer;
}
```
