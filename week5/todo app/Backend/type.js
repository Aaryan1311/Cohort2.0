const zod = required("zod");

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
})

const updateTodo = zod.objecrt({
    id: zod.string(),
})


module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}