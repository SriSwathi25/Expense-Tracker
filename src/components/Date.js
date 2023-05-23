import './Date.css';
export default function Date(props){
    return(
        <div className="date text-center">
        <h2>{props.day}</h2>
        <p>{props.month+' '+props.year}</p>

        </div>
    )
}