//framework de icones prontos, possui interação com o react
import { CheckCircle, Lock } from 'phosphor-react';

//define a formatação do horário
import {isPast, format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

//controle de rotas com o react-router-dom, funciona como um <a></a> redirecionando para outra pagina com o clique
import { Link, useParams } from 'react-router-dom';

import classNames from 'classnames'

//define o type dos valores que poderam ser utilizados na requisição do graphCMS
interface LessonProps{
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

//props: LessonProps - utiliza as props criadas acima
export function Lesson(props: LessonProps){

    const {slug} = useParams<{slug: string}>()

    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm",{
        locale: ptBR,
    })

    const isActiveLesson = slug === props.slug;
    return(
    <Link to={`/event/lesson/${props.slug}`} className="group">
        <span className="text-gray-300">
            {availableDateFormatted}
        </span>
        <div 
            className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',{
            'bg-green-500': isActiveLesson
        })}
        >
            <header className="flex items-center justify-between">
                {/* Esse campo é um condicional, caso a condição seja true, as primeiras linhas de codigo são uasdas */}
                {/* caso seja false, o outro bloco de codigo, separado por " : " será utilizado */}
                {isLessonAvailable ? (
                    <span className={classNames('text-sm font-medium flex items-center gap-2',{
                        'text-white': isActiveLesson,
                        'text-blue-500': !isActiveLesson,
                    })}>
                        <CheckCircle size={20}/>
                        Conteúdo Libera
                    </span>
                ):(
                    <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                        <Lock size={20}/>
                        Em breve
                    </span>
                )}
                <span className={classNames('text-xs rounded py -[0.125rem] px-2 text-white border font-bold',{
                    'border-white': isActiveLesson,
                    'border-green-300': !isActiveLesson,
                })}>
                    {props.type === 'live' ? 'AO VIVO' : 'AULA PRATICA'}
                </span>
            </header>
            {/* classnames é uma extensão que precisa ser baixada, funciona como um condicional de um active, onde aciona algum valor caso o campo estaja com status de active */}
            <strong className={classNames('mt-5 block',{
                'text-white': isActiveLesson,
                'text-gray-200': !isActiveLesson,
            })}>
                {props.title}
            </strong>
        </div>
    </Link>
    );
}