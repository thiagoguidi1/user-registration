import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import CardUser from "../../components/CardUser";

function Home() {
    {/* Simulate DB */}
    const users = [
        {
            id: "54ads23sa5d",
            name: "Rodolfo",
            age: 25,
            email: "rodolfo@gmail.com",
        },
        {
            id: "qw978weq45",
            name: "Maria",
            age: 43,
            email: "maria@gmail.com",
        },
        {
            id: "45asddas452",
            name: "Adalberto",
            age: 47,
            email: "adalberto@gmail.com",
        }
    ];
    
    return (
        <div className="flex flex-col items-center w-screen min-h-screen p-4 bg-gradient-slate">
            {/* Register User Form */}
            <form action="" className="flex flex-col w-full max-w-[500px] p-3 gap-5 mb-5 bg-slate-500/30 rounded-lg">
                <h1 className="flex justify-center border-b-4 rounded font-Poppins text-lg text-slate-50">
                    Cadastro de Usuário
                </h1>
                <FormInput
                    inputType={"text"}
                    placeholderText={"Insira o nome..."}
                />
                <FormInput
                    inputType={"number"}
                    placeholderText={"Insira a idade..."}
                />
                <FormInput
                    inputType={"email"}
                    placeholderText={"Insira o email..."}
                />
                <FormButton textButton={"CADASTRAR"}/>
            </form>

            {/* User Cards */}
            {users.map((user) => (
                <CardUser 
                    key={user.id}
                    userName={user.name}
                    userAge={user.age}
                    userEmail={user.email}
                />
            ))}
        </div>
    );
}

export default Home;
