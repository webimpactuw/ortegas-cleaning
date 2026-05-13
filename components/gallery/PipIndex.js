"use client"

import { useState } from 'react';

export default function PipIndex(max) {
    const [index, setIndex] = useState(0);

    const increase = () => {
        if (index < max-1) {
            setIndex(index + 1);
        }
    }

    const decrease = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    return {index, increase, decrease};
}