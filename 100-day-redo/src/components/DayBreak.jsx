// DayBreak.jsx
function DayBreak(props) {
    return (
        <div className="line">
            <div className="small-object-breaker">
                {props.day <= 99 ? (
                    <p className="breaktext">{props.day}+</p>
                ) : null}
            </div>
        </div>
    );
}

export default DayBreak;
