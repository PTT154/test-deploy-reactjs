import { useMagicColor } from "./useMagicColor"

export default function Circle() {
    return (
        <div className="w-20 h-20 rounded-full" style={{ backgroundColor: useMagicColor() }}>Circle</div>
    )
}
