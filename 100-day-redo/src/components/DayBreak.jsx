function DayBreak(props) {
    return (
        <div className="line">
            <div className="small-object-breaker">
                <p className="breaktext">{props.day}+</p>
            </div>
        </div>
    );
}

export default DayBreak