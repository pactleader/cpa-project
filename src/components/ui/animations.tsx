
import * as React from "react"
import { cn } from "@/lib/utils"

// Fade In Animation Component
export const FadeIn = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    delay?: number
    duration?: number
  }
>(({ className, delay = 0, duration = 300, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("animate-fade-in", className)}
    style={{
      animationDelay: `${delay}ms`,
      animationDuration: `${duration}ms`
    }}
    {...props}
  >
    {children}
  </div>
))
FadeIn.displayName = "FadeIn"

// Scale In Animation Component
export const ScaleIn = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    delay?: number
    duration?: number
  }
>(({ className, delay = 0, duration = 200, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("animate-scale-in", className)}
    style={{
      animationDelay: `${delay}ms`,
      animationDuration: `${duration}ms`
    }}
    {...props}
  >
    {children}
  </div>
))
ScaleIn.displayName = "ScaleIn"

// Slide In Right Animation Component
export const SlideInRight = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    delay?: number
    duration?: number
  }
>(({ className, delay = 0, duration = 300, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("animate-slide-in-right", className)}
    style={{
      animationDelay: `${delay}ms`,
      animationDuration: `${duration}ms`
    }}
    {...props}
  >
    {children}
  </div>
))
SlideInRight.displayName = "SlideInRight"

// Hover Scale Component
export const HoverScale = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("hover-scale", className)}
    {...props}
  >
    {children}
  </div>
))
HoverScale.displayName = "HoverScale"

// Pulse Animation Component
export const Pulse = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("animate-pulse", className)}
    {...props}
  >
    {children}
  </div>
))
Pulse.displayName = "Pulse"

// Story Link with Underline Animation
export const StoryLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, children, ...props }, ref) => (
  <a
    ref={ref}
    className={cn("story-link", className)}
    {...props}
  >
    {children}
  </a>
))
StoryLink.displayName = "StoryLink"
