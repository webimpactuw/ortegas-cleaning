export default function FooterColumn ({ title, children }) {
  return (
    <div className="flex flex-col gap-2">
      {title && <p className="font-bold">{title}</p>}
      {children}
    </div>
  );
}
