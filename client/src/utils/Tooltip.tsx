
import { createPortal } from "react-dom";

import {
    useState,
    useRef,
    useEffect,
    type ReactNode,
} from "react";

interface TooltipProp {
    text: string;
    children: ReactNode;
}

function Tooltip({ text, children }: TooltipProp) {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    // Reference to the DOM element
    const triggerRef = useRef<HTMLDivElement>(null);

    // Reference to the timeout
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    function updatePosition() {
        if (!triggerRef.current) return;

        const rect = triggerRef.current.getBoundingClientRect();

        setPosition({
            top: rect.top - 8,
            left: rect.left + rect.width / 2,
        });
    }

    useEffect(() => {
        if (!visible) return;

        updatePosition();

        window.addEventListener("resize", updatePosition);
        window.addEventListener("scroll", updatePosition, true);

        return () => {
            window.removeEventListener("resize", updatePosition);
            window.removeEventListener("scroll", updatePosition, true);
        };
    }, [visible]);

    // Clear timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <>
            <div
                ref={triggerRef}
                className="inline-flex"
                onMouseEnter={() => {
                    timeoutRef.current = setTimeout(() => {
                        updatePosition();
                        setVisible(true);
                    }, 1000);
                }}
                onMouseLeave={() => {
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                        timeoutRef.current = null;
                    }

                    setVisible(false);
                }}
            >
                {children}
            </div>

         {createPortal(
  <span
    className={`
      fixed z-[99999]
      -translate-x-1/2
      text-white border border-gray-700
      text-xs px-3 py-1.5
      rounded-md whitespace-nowrap
      pointer-events-none font-bold bg-black

      transition-all duration-500 ease-in-out

      ${visible
        ? "opacity-100 -translate-y-full"
        : "opacity-0 translate-y-0"
      }
    `}
    style={{
      top: position.top,
      left: position.left,
    }}
  >
    {text}
  </span>,
  document.body
)}
    </>
  );
}

export default Tooltip;
