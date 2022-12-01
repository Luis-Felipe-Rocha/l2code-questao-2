import './IconText.css'

export default function IconText({icon, h1, text}) {
    return(
        <div className="icon-text">
            <img src={icon} alt='Icon' />
            <h1>{h1}</h1>
            <p>{text}</p>
        </div>
    )
}