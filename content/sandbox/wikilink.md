---
title: 'Wiki Link 渲染示例'
title_en: 'Wiki Link Render'
slug: 'wiki-link-render'
aliases: []
description: ''
created_at: 2023-02-01 
published_at: 2023-02-01 
updated_at: 
tags: []
---

# Wikilink Markup Testing

back to [Index](/)

## Text Link Testing:

- normal md link: [My Note](note)
- single `[]`: [note]
- double `[]`: [[note]]
- double `[]` with alias: [[note|My Note]]
- double `[]` with number alias: [[note|100]]

## Image Testing:

### Regular with height 50

![my image](/img/avatar.png){ height=50 }

### Wikilink

```
![[/img/avatar.png]]
```

![[/img/avatar.png]]

### Wikilink with width

size:100

```
![[/img/avatar.png|100]]
```

![[/img/avatar.png|100]]

### Wikilink with size

size:150x500

```
![[/img/avatar.png|150x300]]
``` 

![[/img/avatar.png|150x300]]

## Multiple links

不會被 Plugin 更改的 Code Block
```
two link:
- [[bug]] and [[job]]
- [[story|Story Item]] and [[subitem|Sub Item]]

image:
- [[/img/avatar.png]] 
- [[/img/avatar.png|job]]
- ![[/img/avatar.png|30]]
- ![[/img/avatar.png|30x50]]

two image:
- [[/img/avatar.png]] and [[img/icons/job.png]]
- [[/img/avatar.png|First]] and [[/img/avatar.png|Second]]
- ![[/img/avatar.png|30]] and ![[/img/avatar.png|50]]
- ![[/img/avatar.png|30x40]] and ![[/img/avatar.png|50x60]]
```

會被 Plugin 更改的 Code Block
~~~
two link:
- [[bug]] and [[job]]
- [[story|Story Item]] and [[subitem|Sub Item]]

image:
- [[/img/avatar.png]] 
- [[/img/avatar.png|job]]
- ![[/img/avatar.png|30]]
- ![[/img/avatar.png|30x50]]

two image:
- [[/img/avatar.png]] and [[img/icons/job.png]]
- [[/img/avatar.png|First]] and [[/img/avatar.png|Second]]
- ![[/img/avatar.png|30]] and ![[/img/avatar.png|50]]
- ![[/img/avatar.png|30x40]] and ![[/img/avatar.png|50x60]]
~~~

two link:
- [[bug]] and [[job]]
- [[story|Story Item]] and [[subitem|Sub Item]]

image:
- [[/img/avatar.png]] 
- [[/img/avatar.png|job]]
- ![[/img/avatar.png|30]]
- ![[/img/avatar.png|30x50]]

two image:
- [[/img/avatar.png]] and [[img/icons/job.png]]
- [[/img/avatar.png|First]] and [[/img/avatar.png|Second]]
- ![[/img/avatar.png|30]] and ![[/img/avatar.png|50]]
- ![[/img/avatar.png|30x40]] and ![[/img/avatar.png|50x60]]
