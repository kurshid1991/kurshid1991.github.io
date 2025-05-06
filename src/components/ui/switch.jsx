export function Switch({ checked, onCheckedChange }) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="sr-only"
      />
      <div className="w-11 h-6 bg-gray-700 rounded-full shadow-inner relative transition">
        <div
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition transform ${
            checked ? 'translate-x-5' : ''
          }`}
        ></div>
      </div>
    </label>
  );
}
