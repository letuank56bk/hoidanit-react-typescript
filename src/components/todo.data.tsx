interface IProps {
    todos: {
        id: number,
        title: string,
        isComplete: boolean
    }[];
    owner?: string;
    age?: number;
    isDeveloper?: boolean;
}
const TodoData = (props: IProps) => {
    const { todos } = props;
    return (
        <>
            <div>
                {todos.map(item => {
                    return (
                        <div key={item.id}>
                            <div style={{ padding: "10px 0" }}>
                                {item.id} - {item.title}
                                &nbsp;&nbsp;&nbsp;<button>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TodoData;

//