import { useEffect } from "react";

const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.createElement("div");
        cursor.className = "custom-cursor";
        document.body.appendChild(cursor);

        const moveCursor = (e) => {
            const { clientX: x, clientY: y } = e;
            cursor.style.transform = `translateX(${x}px) translateY(${y}px) scale(0.4) translateZ(0px)`;
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.removeChild(cursor);
        };
    }, []);

    return null;
};

export default CustomCursor;
