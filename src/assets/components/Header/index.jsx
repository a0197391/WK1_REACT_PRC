import style from "./header.module.css"

export default function Header(){
   return(
    <header className={style.Header}>
            <img className={style.headerAvatar} src="./images/avatar.png" alt="avatar" />
            <h1 className={style.headerTitle}>name</h1>
            {/* <hr className="divider--light"/> */}
            {/* <p className={style.headerSlogan}>slogan</p>  */}
   </header>
   );
}