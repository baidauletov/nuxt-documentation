---
title: '<ClientOnly>'
description: Render components only in client-side with the <ClientOnly> component.
links:
  - label: Source
    icon: i-simple-icons-github
    to: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/components/client-only.ts
    size: xs
---

The `<ClientOnly>` component renders its slot only in client-side. To import a component only on the client, register the component in a client-side only plugin.

## Props

- `placeholderTag` | `fallbackTag`: specify a tag to be rendered server-side.
- `placeholder` | `fallback`: specify a content to be rendered server-side.

```vue
<template>
  <div>
    <Sidebar />
    <ClientOnly fallback-tag="span" fallback="Loading comments...">
      <Comment />
    </ClientOnly>
  </div>
</template>
```

## Slots

- `#fallback`: specify a content to be displayed server-side.

```vue
<template>
  <div>
    <Sidebar />
    <ClientOnly>
      <!-- ... -->
      <template #fallback>
        <!-- this will be rendered on server side -->
        <p>Loading comments...</p>
      </template>
    </ClientOnly>
  </div>
</template>
```