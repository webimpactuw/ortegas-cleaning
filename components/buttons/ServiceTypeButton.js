"use client"

export default function ServiceTypeButton({
    label,
    icon,
    active,
    onClick,
    color = "bg-gray-100",
    activeColor = "bg-blue-500 text-white",
}) {
    return (
        <button type="button" onClick={onClick} className={`font-[inter] font-normal w-full flex items-center gap-2 px-4 py-6 rounded-xl border transition ${active ? activeColor : color}`}>
            {icon && <span className="text-lg">{icon}</span>}
            <span className="font-medium">{label}</span>
        </button>
    );
}