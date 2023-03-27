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

![my image](/img/logo.png){ height=50 }

### Wikilink

![[img/logo.png]]

### Wikilink with width

size:100

![[img/logo.png|100]]

### Wikilink with size

size:150x500

![[img/logo.png|150x300]]

## Multiple links

two link:
- [[bug]] and [[job]]
- [[story|Story Item]] and [[subitem|Sub Item]]

image:
- [[icons/bug.png]]
- [[icons/job.png|job]]
- ![[icons/story.png|30]]
- ![[icons/subitem.png|30x50]]

two image:
- [[icons/bug.png]] and [[icons/job.png]]
- [[icons/story.png|Story Item]] and [[icons/subitem.png|Sub Item]]
- ![[icons/story.png|30]] and ![[icons/subitem.png|50]]
- ![[icons/story.png|30x40]] and ![[icons/subitem.png|50x60]]
