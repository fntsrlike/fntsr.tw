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
