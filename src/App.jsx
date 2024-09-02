import './styles/global.css'
import styles from './styles/App.module.css'

import { Header } from "./components/Header"
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'


const posts = [
  {
    id: 1,
    publishedAt: new Date('2024-08-22 18:00:00'),
    author: { name:"Bruno Camargo", role:"Fullstack Developer",  avatar_url:"https://avatars.githubusercontent.com/u/146772995?v=4" },
    content: [ 
      {type: 'paragraph', content: 'Fala pessoal 👋' }, 
      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ' },
      {type: 'paragraph', content: 'Acesse e deixe seu feedback 👉' },
      {type: 'link', content: 'devonlane.design' },

      {type: 'hashtag', content: '#uiux'},
      {type: 'hashtag', content: '#userexperience'}
    ]
  },

  {
    id: 2,
    publishedAt: new Date('2024-08-19 20:00:00'),
    author: { name:"Mayk Brito", role:"Educator @Rocketseat",  avatar_url:"https://github.com/Henrry-Maximo.png" },
    content: [ 
      {type: 'paragraph', content: 'Fala pessoal 👋' }, 
      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ' },
      {type: 'paragraph', content: 'Acesse e deixe seu feedback 👉' },
      {type: 'link', content: 'devonlane.design' },

      {type: 'hashtag', content: '#uiux'},
      {type: 'hashtag', content: '#userexperience'}
    ]
  },
]


function App() {

  // Render
  return (
    <>
      <Header />
    
      <div className={styles.wrapper} >
    
        <Sidebar />

        <main>
          {
            posts.map( (post) =>
              (<Post {...post} />)
            )
          }


          {/*

            <Post 
              author={ {avatar_url:"", name:"", role:""} }
              publishedAt={ new Date() }
              content={ "" }
            />

          */}

        </main>

      </div>

    </>
  )
}

export default App
