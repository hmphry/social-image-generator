function Button({ children, ...props }) {
    return (
        <button className="bg-blue text-black font-bold px-4 py-2 rounded hover:bg-blue-600  select-none cursor-pointer" {...props}>
        {children}
        </button>
    );
}

export default Button;