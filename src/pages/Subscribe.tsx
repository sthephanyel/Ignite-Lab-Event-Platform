import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

//Essa solicitação "mutation", envia os dados para o graphcms, para ser cadastrado um novo nome e email no Subscriber
//É recomendado que esses dados não seja enviados diretamente pelo Front, e sim que a requisição seja enviadad para um Back-end, e lá o mesmo realizar a operação.
//Mas como é quesstão de estudo e os dados são simples, será realizada atraves do Front
// const CREATE_SUBSCRIBER_MUTATION=gql`
//     # Esse parametro além de criar um novo campo com os dados, solicita o id para ser utilizado posteriormente
//     mutation CreateSubscriber($name: String!, $email: String!) {
//         createSubscriber(data: {name: $name, email: $email}) {
//         id
//         }
//     }
// `;


export function Subscribe(){
    const navigate = useNavigate();
    //Esses states servem para pegar os dados escritos nos imputs, armazenando os valores e posteriormente sendo usados para enviar ao graphcms
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    //Diferente do useQuery, o multation não precisa ser renderizado logo após a inicialização da pagina
    //então como parametro, e passado a função 'createSubscriber', ou seja, só será executado quando o mesmo for solicitado
    // const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION);

    const [createSubscriber, { loading }] = useCreateSubscriberMutation();

    async function handleSubscribe(event: FormEvent){
        event.preventDefault();
        //ativa o mutation enviando os dados para criação do novo cadastro
        await createSubscriber({
            variables:{
                name, 
                email,
            }
        })
        //após o armazenamento dos dados, o navigate envia o usuário para outra janela usando os campos pré-configurados no Router
        navigate('/event')
    }

    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo></Logo>
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong> JS
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text" 
                            placeholder="Seu nome completo"
                            onChange={event=>setName(event.target.value)}
                            />
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email"
                            placeholder="Digite seu e-mail"
                            onChange={event=>setEmail(event.target.value)}
                             />
                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>
            <img src="/src/assets/codelocal.png" className="mt-10"></img>
        </div>
    );
}