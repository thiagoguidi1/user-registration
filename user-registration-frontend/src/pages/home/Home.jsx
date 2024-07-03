import { useEffect, useState, useRef } from "react";
import FormButton from "../../components/FormButton.jsx";
import FormInput from "../../components/FormInput.jsx";
import CardUser from "../../components/CardUser.jsx";
import api from "../../services/api.js";

function Home() {
    const [users, setUsers] = useState( [] );

    const inputFormRefName = useRef();
    const inputFormRefAge = useRef();
    const inputFormRefEmail = useRef();

    const editRefName = useRef();
    const editRefAge = useRef();
    const editRefEmail = useRef();
 
    //List Users
    async function getUsers() {
        const usersFromApi = await api.get('/users');
        setUsers(usersFromApi.data)
    }
    //Create Users
    async function createUsers() {
        await api.post('/users', {
            name: inputFormRefName.current.value,
            age: inputFormRefAge.current.value,
            email: inputFormRefEmail.current.value
        });
        getUsers();
    }
    //Edit Users
    async function editUsers(id) {
        await api.put(`/users/${id}`, {
            name: editRefName.current.value,
            age: editRefAge.current.value,
            email: editRefEmail.current.value
        })
        getUsers();
    }
    //Delete Users
    async function deleteUsers(id) {
        await api.delete(`/users/${id}`);
        getUsers();
    }

    useEffect(() => {
        getUsers();
    }, [])
    
    
    return (
        <div className="flex flex-col items-center w-screen min-h-screen p-4 bg-gradient-slate">
            {/* Register User Form */}
            <form action="" className="flex flex-col w-full max-w-[500px] p-3 gap-5 mb-5 bg-slate-500/30 rounded-lg" >
                <h1 className="flex justify-center border-b-4 rounded font-Poppins text-lg text-slate-50">
                    Cadastro de Usuário
                </h1>
                <FormInput
                    inputType={"text"}
                    placeholderText={"Insira o nome..."}
                    inputRef={inputFormRefName}
                />
                <FormInput
                    inputType={"number"}
                    placeholderText={"Insira a idade..."}
                    inputRef={inputFormRefAge}
                />
                <FormInput
                    inputType={"email"}
                    placeholderText={"Insira o email..."}
                    inputRef={inputFormRefEmail}
                />
                <FormButton 
                    textButton={"CADASTRAR"} 
                    onClick={createUsers} 
                /> 
            </form>

            {/* User Cards */}
            {users.map((user) => (
                <CardUser 
                    // Form Register Part
                    key={user.id}
                    userName={user.name}
                    userAge={user.age}
                    userEmail={user.email}
                    deleteClick={() => deleteUsers(user.id)}

                    //Card Edit User Part
                    editNameRef={editRefName}
                    editAgeRef={editRefAge}
                    editEmailRef={editRefEmail}
                    editSubmitButton={() => editUsers(user.id)}

                />
            ))}
        </div>
    );
}

export default Home;
