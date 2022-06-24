//mantem uma estelirização do query para ser mais facil organizar os campos
import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

//acessa p graphcms, pegando as informações necessárias para configurar a pagina
const GET_LESSONS_QUERY = gql`
    query{
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED){
            id
            lessonType
            availableAt
            title
            slug
        }
    }
`;

//defini as props que podem ser utilizadas no component
interface GetLessonsQueryResponse{
    lessons: {
        id: string
        title: string
        slug: string
        availableAt: string
        lessonType: 'live' | 'class'
    }[]
}

export function Sidebar(){

    const {data} = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

    return(
    <aside className="w-[348px] bg-gray-700 p-6 borde-l border-gray-600">
        <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
            Cronograma de aulas
        </span>
        <div className="flex flex-col gap-8">
            {data?.lessons.map(lesson=>{
                return(
                    <Lesson
                        key={lesson.id}
                        title={lesson.title}
                        slug={lesson.slug}
                        availableAt={new Date(lesson.availableAt)}
                        type={lesson.lessonType}
                    />
                );
            })}
        </div>
    </aside>
    );
}