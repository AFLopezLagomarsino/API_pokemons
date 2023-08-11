import style from "./Loader.module.css"

function Loader(){
    const gif = "https://i.gifer.com/2iiJ.gif" 
return (
    <div>
        <div className={style.principal}>
            <img src={gif} alt="pokemon" className={style.img} />
            <h1 className={style.h1}>Loading...</h1>
        </div>

    </div>

)

}


export default Loader