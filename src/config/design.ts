export const spacing = {
  section: "py-20 lg:py-28",
  sectionXSlim: "py-2 lg:py-3",
  sectionSlim: "py-5 lg:py-10",
  sectionCompact: "py-16 lg:py-20", 
  sectionHero: "py-28 lg:py-36",
  sectionGap: "mb-12",

  containerGap: "gap-16",
  cardGap: "gap-8",

  stackSm: "space-y-2",
  stackMd: "space-y-4",
  stackLg: "space-y-6",
  stackXl: "space-y-8",

  headerOffset: "scroll-mt-28 lg:scroll-mt-36",
} as const;





export const typography = {
  display:
    "text-5xl font-bold leading-tight tracking-tight lg:text-7xl",

  h1:
    "text-4xl font-bold tracking-tight lg:text-6xl",

  h2:
    "text-3xl font-bold tracking-tight lg:text-5xl",

  h3:
    "text-2xl font-semibold lg:text-4xl",

  h4:
    "text-xl font-semibold lg:text-3xl",

  h5:
    "text-lg font-semibold",

  h6:
    "text-base font-semibold",

  lead:
    "text-lg leading-8 text-text-muted lg:text-xl",

  body:
    "text-base leading-7",

  small:
    "text-sm",

  muted:
    "text-sm text-text-muted",
} as const;





export const card = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};





export const sectionTitle = {
  spacing: spacing.sectionGap,
  maxWidth: "max-w-3xl",
} as const;