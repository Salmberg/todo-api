
var todos = [
    {
        todo: "Plugga",
        done: false
    },
    {
        todo: "Träna",
        done: false
    },
    {
        todo: "Äta",
        done: false
    },
];




exports.handler = async (event, context) => {

    const { method, path } = event.requestContext.http;

    /*------------GET--------------- */
    if (method === "GET" && path === "/todos") {
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todos)
        };

    /*------------POST--------------- */

    } else if (method === "POST" && path === "/todos") {
        const body = JSON.parse(event.body);

        todos.push(body);

        return {
            statusCode: 201,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: "Todo added" })
        };

    }
    return "Hej!";
}