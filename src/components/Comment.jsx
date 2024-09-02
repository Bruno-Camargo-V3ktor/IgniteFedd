import styles from '../styles/Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment(props) {
    
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

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Dev, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}