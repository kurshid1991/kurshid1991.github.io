export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl p-4 bg-white/10 shadow-lg backdrop-blur-md ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
