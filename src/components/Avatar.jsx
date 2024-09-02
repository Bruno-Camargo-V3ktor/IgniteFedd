import styles from '../styles/Avatar.module.css'

export function Avatar(props) {
    
    //Atributos
    const { img, hasBorder=true, size=3 } = props
    const style = {
        width: `${size}rem`,
        height: `${size}rem`,

        border: hasBorder ? '4px solid var(--gray-800)' : 'none',
        outline: hasBorder ? '2px solid var(--green-500)' : 'none'
    }


    //Render
    return (
        <>
            <img
              className={styles.avatar}
              style={ style }
              src={img}
              alt=''
            />
        </>
    )
}