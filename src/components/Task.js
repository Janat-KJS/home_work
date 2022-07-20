import React, {useState} from "react";

function Task() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Вы кликнули {count} раз(а)</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={() => setCount(count + 5)}>
                Click me
            </button>
            <button onClick={() => setCount(count + 10)}>
                Click me
            </button>
        </div>
    );
}

export default Task;