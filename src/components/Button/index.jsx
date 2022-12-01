import './Button.css'

export default function Button({primary, text}) {
    return(
        <button className={primary?'primary':'secondary'}>{text}</button>
    )
}