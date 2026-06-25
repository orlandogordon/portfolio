import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { useInView } from "../hooks/useInView";
import { useReducedMotion } from "../hooks/useReducedMotion";

type RevealProps<E extends ElementType> = {
  as?: E;
  /** Stagger position among siblings; adds index * 70ms to the reveal. */
  index?: number;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<E>, "as" | "children">;

/**
 * Fades + slides its content up the first time it scrolls into view. Matches
 * the design source's [data-reveal] behavior; no-ops when motion is reduced.
 */
export function Reveal<E extends ElementType = "div">({
  as,
  index = 0,
  className,
  style,
  children,
  ...rest
}: RevealProps<E>) {
  const reduce = useReducedMotion();
  const { ref, inView } = useInView<HTMLElement>();
  const Comp: ElementType = as ?? "div";

  const motionStyle: CSSProperties = reduce
    ? {}
    : {
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(26px)",
        transition:
          "opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1)",
        transitionDelay: inView ? `${index * 0.07}s` : "0s",
      };

  return (
    <Comp
      ref={ref}
      className={className}
      style={{ ...motionStyle, ...(style as CSSProperties) }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
