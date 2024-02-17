function Button({ text = 'Click Me!', color = 'blue', fontSize = 12, handleClick }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    }

    return (
        <button style={buttonStyle} onClick={() => handleClick('https://navalwarfare.netlify.app/')}>
            {text}
        </button>
    );
}

Button.defaultProps = {
    text: 'Click Me!',
    color: 'blue',
    fontSize: 12
}

export default function DataTransfer() {
    const handleButtonClick = (url) => {
        window.location.href = url;
    }

    return (
        <div>
            <Button handleClick={handleButtonClick}/>
        </div>
    );
}