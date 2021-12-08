const Carrer = ({ title, institute, time, period }) => {
    return (
        <div className="carrer">
            <h3>{title}</h3>
            <p className="institute">{institute}</p>
            <p className="time">{time}</p>
            <p className="period">{period}</p>
        </div>
    )
}

export default Carrer