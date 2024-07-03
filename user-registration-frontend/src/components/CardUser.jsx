import { useState } from "react";
import { Pencil, SquareX, SquareCheck, Trash2 } from "lucide-react";

// eslint-disable-next-line react/prop-types
const CardUser = ({ userName, userAge, userEmail, deleteClick, editNameRef, editAgeRef, editEmailRef, editSubmitButton }) => {
    const [isEditing, editSwitch] = useState(true);

   
    const editClick = () => {
        editSwitch(!isEditing);
    };
    return (
        <section className="flex flex-col mb-5 p-5 w-full max-w-[500px] rounded-lg bg-slate-600/30">
            {isEditing ? (
                // Show User Card
                <div className="flex justify-between items-center gap-5">
                    {/* Users Infos */}
                    <div className="text-slate-300">
                        <p>
                            <strong className="text-slate-50">Nome: </strong>
                            {userName}
                        </p>
                        <p>
                            <strong className="text-slate-50">Idade: </strong>
                            {userAge}
                        </p>
                        <p>
                            <strong className="text-slate-50">E-mail: </strong>
                            {userEmail}
                        </p>
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-col items-center gap-4">
                        <button onClick={editClick} title="Editar Usuário">
                            <Pencil
                                size={30}
                                className="text-slate-50 hover:text-cyan-500 hover:cursor-pointer hover:animate-pulse"
                            />
                        </button>
                        <button onClick={deleteClick} title="Deletar Usuário">
                            <Trash2
                                size={30}
                                className="text-slate-50 hover:text-red-500 hover:cursor-pointer hover:animate-pulse"
                            />
                        </button>
                    </div>
                </div>
            ) : (
                // Show Edit User Card
                <form action="#" className="flex justify-between items-center gap-5">
                    {/* Inputs */}
                    <div className="text-slate-300 w-4/5">
                        <div>
                            <label htmlFor="editName">
                                <strong className="text-slate-50">Nome: </strong>
                            </label>
                            <input type="text" id="editName" ref={editNameRef} placeholder="Digite um novo nome..." className="w-[80%] rounded-lg border-2 px-2 py-0.5 focus:outline-none placeholder:italic text-slate-400 placeholder:text-slate-500 bg-slate-600 border-slate-500 focus:border-slate-100" />
                        </div>
                        <div>
                            <label htmlFor="editAge">
                                <strong className="text-slate-50">Idade: </strong>
                            </label>
                            <input type="number" id="editAge" ref={editAgeRef} placeholder="Digite uma nova idade..." className="w-[80%] rounded-lg border-2 px-2 py-0.5 focus:outline-none placeholder:italic text-slate-400 placeholder:text-slate-500 bg-slate-600 border-slate-500 focus:border-slate-100" />
                        </div>
                        <div>
                            <label htmlFor="editEmail">
                                <strong className="text-slate-50">E-mail: </strong>
                            </label>
                            <input type="text" id="editEmail" ref={editEmailRef} placeholder="Digite um novo email..." className="w-[80%] rounded-lg border-2 px-2 py-0.5 focus:outline-none placeholder:italic text-slate-400 placeholder:text-slate-500 bg-slate-600 border-slate-500 focus:border-slate-100" />
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-col items-center gap-4">
                        <button title="Confirmar Edição" type="submit" onClick={editSubmitButton}>
                            <SquareCheck
                                size={30}
                                className="text-slate-50 hover:text-green-500 hover:cursor-pointer hover:animate-pulse"
                            />
                        </button>
                        <button onClick={editClick} title="Cancelar Edição">
                            <SquareX
                                size={30}
                                className="text-slate-50 hover:text-red-500 hover:cursor-pointer hover:animate-pulse"
                            />
                        </button>
                    </div>
                </form>
            )}
        </section>
    );
};

export default CardUser;
