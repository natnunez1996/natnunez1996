import type React from "react";
import { type NavigateFunction } from "react-router-dom";


export function fadeAnimation(
    setFade: React.Dispatch<React.SetStateAction<boolean>>,
    navigate: NavigateFunction,
    location: string): void {
    setFade(true);
    setTimeout(() => {
        navigate(location)
    }, 900)
}