import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-md font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "text-primary hover:font-bold",
        outline: "border-border border-muted bg-muted transition duration-300 ease-in-out hover:bg-muted-neutral hover:border-muted-neutral hover:text-foreground active:bg-muted-neutral aria-expanded:bg-muted-neutral aria-expanded:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
        simplified: "text-primary hover:font-bold",
      },
      size: {
        default: "h-10 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-9",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
        "icon-lg": "size-10",
      },
    },
    compoundVariants: [
      {
        variant: "simplified",
        size: "xs",
        class: "hover:text-sm",
      },
      {
        variant: "simplified",
        size: "sm",
        class: "hover:text-lg",
      },
      {
        variant: "simplified",
        size: ["default", "lg"],
        class: "hover:text-lg",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const RX = 7

function calcDotOffset(width: number, height: number): number {
  // Path starts at (rx,0) going clockwise. Center of left edge is reached after:
  // top + top-right corner + right + bottom-right corner + bottom + bottom-left corner + half of left straight
  const pCenter = 2 * width + 1.5 * height - 7 * RX + 1.5 * Math.PI * RX
  const pTotal = 2 * width + 2 * height - 8 * RX + 2 * Math.PI * RX
  return 1 - pCenter / pTotal
}

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"
  const svgRef = React.useRef<SVGSVGElement>(null)
  const [dotOffset, setDotOffset] = React.useState(0.083)

  React.useEffect(() => {
    if (variant !== "default" || asChild) return
    const button = svgRef.current?.parentElement
    if (!button) return
    const calc = () => {
      const { width, height } = button.getBoundingClientRect()
      if (width && height) setDotOffset(calcDotOffset(width, height))
    }
    calc()
    const ro = new ResizeObserver(calc)
    ro.observe(button)
    return () => ro.disconnect()
  }, [variant, asChild])

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {variant === "default" && !asChild && (
        <svg
          ref={svgRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 size-full overflow-visible"
        >
          <rect
            className="btn-border-rect"
            width="100%"
            height="100%"
            rx={RX}
            pathLength="1"
            style={{ "--btn-dot-offset": dotOffset } as React.CSSProperties}
          />
        </svg>
      )}
      {children}
    </Comp>
  )
}

export { Button }
