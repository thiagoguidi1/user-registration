// eslint-disable-next-line react/prop-types
const FormInput = ({ inputType, placeholderText, inputRef, ...props }) => {
    return (
        <input type={inputType} placeholder={placeholderText} ref={inputRef} {...props} className="w-full h-8 rounded-lg border-2 px-2 py-4 focus:outline-none placeholder:italic text-slate-400 placeholder:text-slate-500 bg-slate-600 border-slate-500 focus:border-slate-100"/>
    )
}

export default FormInput;