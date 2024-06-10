// eslint-disable-next-line react/prop-types
const FormButton = ({ textButton }) => {
    return (
        <button type="button" className="h-10 rounded-full font-Poppins font-bold text-slate-700 border-2 border-slate-600 focus:border-slate-900 bg-slate-100">
            {textButton}
        </button>
    )
}

export default FormButton;