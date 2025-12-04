import { useState } from "react";

interface IProps {
    name?: string;
}

const TodoInput = (props: IProps) => {
    const [todo, setTodo] = useState<string>("");

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    };

    const handleClick = () => {
        console.log(todo);
    }
    return (
        <>
            <div style={{ marginBottom: "20px", display: "flex", gap: "15px" }}>
                <input
                    type="text"
                    value={todo}
                    onChange={handleTextChange}
                />
                <button onClick={handleClick}>Add todo</button>
            </div>
        </>
    )
}

export default TodoInput;

//