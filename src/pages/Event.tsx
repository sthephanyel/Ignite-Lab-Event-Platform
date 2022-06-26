import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar.";
import { Video } from "../components/Video";

export function Event(){
  const {slug} = useParams<{slug: string}>();
    return(
        <div className="flex flex-col min-h-screen">
          <Header/> 
          <main className="flex flex-1">
            {/* Caso não tenha nem uma aula pre selecionada, será mostrado o segundo campo apos o : */}
            {/* desafio, mostrar alguma mensagem ou algo padrao */}
            {slug 
            ? <Video lessonSlug={slug}/> 
            : <div className="flex-1">Nem uma Aula Selecionada</div>}
            <Sidebar/>
          </main>
        </div>
        
    );
}