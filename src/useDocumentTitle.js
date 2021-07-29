import {useEffect} from "react";

export default function FocusInput(count) {
    useEffect(
        () => document.title = `Count - ${count}`
    )
}
