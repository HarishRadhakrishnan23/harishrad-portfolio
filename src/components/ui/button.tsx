import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neon: "relative overflow-hidden bg-transparent border-2 border-neon-cyan text-neon-cyan hover:text-background hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.5)] transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-neon-cyan before:to-neon-pink before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-10",
        neonPink: "relative overflow-hidden bg-transparent border-2 border-neon-pink text-neon-pink hover:text-background hover:shadow-[0_0_20px_hsl(var(--neon-pink)/0.5)] transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-neon-pink before:to-neon-purple before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-10",
        neonGreen: "relative overflow-hidden bg-transparent border-2 border-neon-green text-neon-green hover:text-background hover:shadow-[0_0_20px_hsl(var(--neon-green)/0.5)] transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-neon-green before:to-neon-cyan before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-10",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
