import { useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";

interface ITodo {
    id: number,
    title: string,
    isComplete: boolean
}

const TodoList = () => {
    //hardcode data tại component cha
    // const todos = [
    //     {
    //         id: 1,
    //         title: "Learn React TypeScript",
    //         isComplete: false
    //     },
    //     {
    //         id: 2,
    //         title: "Subscribe Youtube HoiDanIT",
    //         isComplete: true
    //     },
    //     {
    //         id: 3,
    //         title: "Learn English",
    //         isComplete: true
    //     },
    // ]

    const [listTodo, setListTodo] = useState<ITodo[]>([])
    return (
        <>
            <div style={{ width: "600px", margin: "50px auto", border: "1px solid black", padding: "10px", borderRadius: "10px" }}>
                <div style={{
                    padding: "10px 0",
                    borderBottomWidth: 1,
                    borderBottomStyle: "solid",
                    borderBottomColor: "#ccc",
                }}
                >My Todo list:</div>
                <br />
                <TodoInput
                    name="Learn React TypeScript"
                />
                <TodoData
                    todos={listTodo}
                // owner={"HoiDanIT"}
                // age={25}
                // isDeveloper={true}
                />
            </div >
        </>
    )
}

export default TodoList;

//