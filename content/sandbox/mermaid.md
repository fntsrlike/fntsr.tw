---
title: 'Mermaid 渲染示例'
title_en: 'Mermaid Render'
slug: 'mermaid-render'
aliases: []
description: ''
created_at: 2023-02-01 
published_at: 2023-02-01 
updated_at: 
tags: []
---

# Mermaid Render Test

## HTML with Render

```md
<div class="mermaid">
graph TD
    A[Client] --> B[Load Balancer]
    B --> C[Server01]
    B --> D[Server02]
</div>
<MermaidRender />
```

<div class="mermaid">
graph TD
    A[Client] --> B[Load Balancer]
    B --> C[Server01]
    B --> D[Server02]

</div>

<MermaidRender />

<hr />

## Graph Component

```md
<MermaidGraph>
    <div class="mermaid">
    graph TD
        A[Client] --> B[Load Balancer]
        B --> C[Server01]
        B --> D[Server02]
    </div>

</MermaidGraph>
```

<MermaidGraph>
    <div class="mermaid">
    graph TD
        A[Client] --> B[Load Balancer]
        B --> C[Server01]
        B --> D[Server02]
    </div>

</MermaidGraph>

<hr />

## Graph Component

```md
<MermaidGraph>
    <div class="mermaid">
    graph TD
        A[Client] --> B[Load Balancer]
        B --> C[Server01]
        B --> D[Server02]
    </div>

</MermaidGraph>
```

<MermaidGraph>
    <div class="mermaid">
    graph TD
        A[Client] --> B[Load Balancer]
        B --> C[Server01]
        B --> D[Server02]
    </div>

</MermaidGraph>

## Build In Component

```md
<MermaidGraphBuildIn />
```

<MermaidGraphBuildIn />
