import { useMagicColor } from "./useMagicColor";

export default function Square() {

    return (
        <div className="w-20 h-20" style={{ backgroundColor: useMagicColor() }}>Square</div>
    )
}
