function Button({ text, color, fontSize }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    }

    return (
        <button style={buttonStyle}>{text}</button>
    );
}

Button.defaultProps = {
    text: 'Click Me!',
    color: 'blue',
    fontSize: 12
}

export default function DataTransfer() {
    return (
        <div>
            <Button text="Click Me!" color="blue" fontSize={12} />
            <Button text="Don't Click Me!" color="red" />
            <Button fontSize={20} />
        </div>
    );
}