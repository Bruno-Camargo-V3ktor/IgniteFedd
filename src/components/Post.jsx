import styles from '../styles/Post.module.css'
import { Avatar } from './Avatar'
import { Comment } from './Comment'

export function Post(props) {
    
    //Atributos
    const { 
        author = { avatar_url:"", name:"", role:"" } ,
        publishedAt = new Date(),
        content = [""]
    } = props

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
                  dateTime='2024-08-21 19:00:00' 
                  title='21 de agosto de 2024 ás 19:00'
                  >
                    Publicado há 1h
                </time>

            </header>
            
            <div className={styles.content}>
                <p>Fala pessoal 👋</p>
                <p>Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 </p>
                <p>Acesse e deixe seu feedback 👉 <a href='#'>devonlane.design</a></p>
                <p>
                    <a href='#'>#uiux</a>{' '}
                    <a href='#'>#userexperience</a>
                </p>
            </div>

            <form className={styles.commentForm} >
               <strong>Deixe seu feedback</strong>

               <textarea 
                 placeholder='Deixe um comentário'
               />
                <footer>
                    <button type='submit'>Publicar</button> 
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

       </article>
    )

}