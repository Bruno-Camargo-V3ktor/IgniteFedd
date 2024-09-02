import styles from '../styles/Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar(props) {
    
    //Render
    return (
        <aside className={styles.sidebar} >
            

            <img 
              className={styles.cover}
              src='https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
              alt=''
            />

            <div className={styles.profile} >
                <Avatar img='https://avatars.githubusercontent.com/u/146772995?v=4'/>

                <strong>Bruno Camargo</strong>
                <span>Fullstack Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Edtiar seu perfil
                </a>
            </footer>
        </aside>
    );
}