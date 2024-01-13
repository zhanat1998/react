const router = createBrowserRouter([
    {
        path: "/",
        element: <div>root router</div>,
    },
    {
        path: "/Todo/",
        element: <Todo />
    },
    {
        path: "/list/",
        element: <List />
    },
    {
        path: "/Todo-List/",
        element: <>
        </>


    },

]);

export default router;