import { ptBR } from 'date-fns/locale'
import styles from '../styles/Post.module.css'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { useState } from 'react'

const comments = [
    1,
    2,
    3
]

export function Post(props) {
    
    //Atributos
    const { 
        author = { avatar_url:"", name:"", role:"" } ,
        publishedAt = new Date(),
        content = [""]
    } = props

    const publishedDateFormatted = format( publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {locale: ptBr} );
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true} );

    // Estados
    const [comments, setComments] = useState( [1, 2, 3] )

    //Métodos
    function handleCreateNewComment( event ) {
        event.preventDefault()

        setComments( [...comments, comments.length+1] );
    }

    //Render
    return (
       <article className={styles.post}>

            <header>

                <div className={styles.author}>
                    <Avatar size={4} img={author.avatar_url}/>

                    <div className={styles.authorinfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>

                </div>

                <time 
                  dateTime = { publishedAt.toISOString() }
                  title = { publishedDateFormatted }
                  >
                    { publishedDateRelativeToNow }
                </time>

            </header>
            
            <div className={styles.content}>
                { content.map( item => {
                    if( item.type === 'paragraph' ) return <p>{item.content}</p>
                    else if( item.type === 'link' ) return <a>{item.content}</a>
                    else if( item.type === 'hashtag' ) return <p><a>{item.content}</a></p>
                }   
                ) }
            </div>

            <form onSubmit={ handleCreateNewComment } className={styles.commentForm} >
               <strong>Deixe seu feedback</strong>

               <textarea 
                 placeholder='Deixe um comentário'
               />
                <footer>
                    <button type='submit'>Publicar</button> 
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map( comment => <Comment /> )
                }
            </div>

       </article>
    )

}