import { Trash2, Pencil } from "lucide-react";

// eslint-disable-next-line react/prop-types
const CardUser = ({ userName, userAge, userEmail, editClick, deleteClick }) => {
    return (
        <section className="flex flex-col mb-5 p-5 w-full max-w-[500px] rounded-lg bg-slate-600/30">
            <div className="flex justify-between items-center gap-5">
                <div className="text-slate-300">
                    <p><strong className="text-slate-50">Nome: </strong>{userName}</p>
                    <p><strong className="text-slate-50">Idade: </strong>{userAge}</p>
                    <p><strong className="text-slate-50">E-mail: </strong>{userEmail}</p>
                </div>
                <div className="flex flex-col gap-4">
                    <button onClick={editClick}>
                        <Pencil size={28} className="text-slate-50 hover:text-cyan-500 hover:cursor-pointer hover:animate-pulse" />
                    </button>
                    <button onClick={deleteClick}>
                        <Trash2 size={28} className="text-slate-50 hover:text-red-500 hover:cursor-pointer hover:animate-pulse"/>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CardUser;