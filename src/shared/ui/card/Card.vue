<template>
  <!-- 
    Card component
    Container for displaying content in a structured card layout
    Should be used with Card subcomponents (CardPreview, CardTitle, etc.)
    @component
    
    @slot default - Card content (use with CardTitle, CardInfo, CardDescription, CardActions)
    
    @example
    <Card>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Description text</CardDescription>
      <CardActions>
        <Button>Action</Button>
      </CardActions>
    </Card>
   -->
  <div
    class="relative rounded-game-card border-2 border-game-border-red bg-game-yellow shadow-game-card p-4 w-full"
  >
    <div class="flex flex-col gap-2">
      <slot />
    </div>
  </div>
</template>
