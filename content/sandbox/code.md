---
title: '程式碼渲染示例'
title_en: 'Code Render'
slug: 'cod-render'
aliases: []
description: ''
created_at: 2023-02-01 
published_at: 2023-02-01 
updated_at: 
tags: []
---

# Code Higihting Style Test

```javascript
console.log('Hello, JavaScript')
```

```ts
console.log 'Hello, TypeScript'
```

```vue
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```

```ruby
puts "Hello, Ruby"
```

```mermaid
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
```
