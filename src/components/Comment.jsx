import styles from '../styles/Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment(props) {
    
    // Atributos
    const { content="", onDeleteComment: headerDeleteComment } = props

    // Estados
    const [likeCount, setLikeCount] = useState(0)

    //Métodos
    function handleLikeComment() {
        setLikeCount( likeCount + 1 )
    }

    // Render
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} img='https://avatars.githubusercontent.com/u/146772995?v=4'/>

            <div className={styles.commentBox}>
                <div className={styles.content}>

                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Bruno Camargo</strong>
                            <time
                              title="21 de Agosto de 2024 ás 19:00"
                              dateTime="2024-08-21 19:00:00"
                              >
                                Cerca de 2h atrás
                            </time>
                        </div>

                        <button title='Deletar comentário' onClick={ () =>  headerDeleteComment(content) }>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment} >
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}