// rafce
const Button = ({ name, isBeam = false, containerClass }) => {
    return (
        // dynamic template string of btn and then it will render the additional containerClass
        <button className={`btn ${containerClass}`}>
            {/* if isBeam is turned on, then we can render a span element */}
            {isBeam && (
                <span className='relative flex h-3 w-3'>
                    <span className="btn-ping" />
                    <span className="btn-ping_dot" />
                </span>
            )}
            {name}
        </button>
    )
}
export default Button
