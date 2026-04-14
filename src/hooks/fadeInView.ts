import { useInView } from "react-intersection-observer";

export function useFadeInView(additionalClassNames:string) {
    const [ref, inView] = useInView({
        root: null,
        rootMargin: "0%",
        threshold: 0.9,
    });

    const className = additionalClassNames + ` ${inView ? "fadeIn" : "fadeOut"}`;

    return { ref, className, inView };
}