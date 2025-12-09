import React from 'react'
import { memo } from "react";

function Child() {
    console.log("Child component rendered");

    return (
        <div>child</div>
    )
}

export default memo(Child);