import { useEffect, useRef } from "react";

export default function useEffectArman(func, arrVal) {
    const render = useRef(false)

    useEffect(() => {
        if (render.current) {
            func()
        } else {
            render.current = true
        }
    }, [arrVal]);
}
