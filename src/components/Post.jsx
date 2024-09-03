import { ptBR } from 'date-fns/locale'
import styles from '../styles/Post.module.css'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { useState } from 'react'

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
    const [newCommentText, setNewCommentText] = useState("")
    const [comments, setComments] = useState( [
        "Post muito bacana men !!!"
    ] )

    //Métodos
    function handleCreateNewComment( event ) {
        event.preventDefault()

        setComments( [...comments, newCommentText] );
        setNewCommentText("");
    }

    function handleNewCommentInvalid(event) {
        event.target.setCustomValidity("Esse campo é obrigatorio")
    }

    function deleteComment(comment) {
        setComments( comments.filter( c => c != comment ) )
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
                    if( item.type === 'paragraph' ) return <p key={item.content} >{item.content}</p>
                    else if( item.type === 'link' ) return <a key={item.content} >{item.content}</a>
                    else if( item.type === 'hashtag' ) return <p key={item.content} ><a>{item.content}</a></p>
                }   
                ) }
            </div>

            <form onSubmit={ handleCreateNewComment } className={styles.commentForm} >
               <strong>Deixe seu feedback</strong>

               <textarea
                 name='comment'
                 value={ newCommentText }
                 onChange={ (event) =>  { setNewCommentText(event.target.value); event.target.setCustomValidity(""); } }
                 placeholder='Deixe um comentário'
                 
                 onInvalid={handleNewCommentInvalid}
                 required
               />
                <footer>
                    <button type='submit' disabled={ newCommentText.length === 0 }>
                        Publicar
                    </button> 
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map( comment => <Comment key={ comment } content={ comment } onDeleteComment={deleteComment} /> )
                }
            </div>

       </article>
    )

}