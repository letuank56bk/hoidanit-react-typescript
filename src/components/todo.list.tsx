import TodoData from "./todo.data";

const TodoList = () => {
    //hardcode data tại component cha
    const todos = [
        {
            id: 1,
            title: "Learn React TypeScript",
            isComplete: false
        },
        {
            id: 2,
            title: "Subscribe Youtube HoiDanIT",
            isComplete: true
        },
        {
            id: 3,
            title: "Learn English",
            isComplete: true
        },
    ]


    return (
        <>
            <div>My Todo list:</div>
            <br />
            <TodoData
                todos={todos}
                owner={"HoiDanIT"}
                age={25}
                isDeveloper={true}
            />
        </>
    )
}

export default TodoList;

//