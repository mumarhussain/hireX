const InputField = React.forwardRef(
  ({ label, type = "text", placeholder, className = "", ...rest }, ref) => {
    return (
      <div>
        {label && <label className="block text-gray-700 mb-2">{label}</label>}
        <input
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
          className={`w-full bg-gray-100 text-gray-700 border border-gray-200 rounded-xl p-4 placeholder-gray-500 focus:outline-none ${className}`}
        />
      </div>
    );
  }
);

InputField.displayName = "InputField";

export { InputField };
