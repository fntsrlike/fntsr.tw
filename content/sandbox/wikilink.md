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

![[img/avatar.png]]

### Wikilink with width

size:100

![[img/avatar.png|100]]

### Wikilink with size

size:150x500

![[img/avatar.png|150x300]]

## Multiple links

two link:
- [[bug]] and [[job]]
- [[story|Story Item]] and [[subitem|Sub Item]]

image:
- [[img/avatar.png]] 
- [[img/avatar.png|job]]
- ![[img/avatar.png|30]]
- ![[img/avatar.png|30x50]]

two image:
- [[img/avatar.png]] and [[img/icons/job.png]]
- [[img/avatar.png|First]] and [[img/avatar.png|Second]]
- ![[img/avatar.png|30]] and ![[img/avatar.png|50]]
- ![[img/avatar.png|30x40]] and ![[img/avatar.png|50x60]]
