import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        async lazy() {
            const { App } = await import("./App")
            return { Component: App }
        },
        children: [
            {
                index: true,
                async lazy() {
                    const { Home } = await import('@/pages')
                    return { Component: Home }
                }
            },
            {
                path: "about",
                async lazy() {
                    const { About } = await import('@/pages')
                    return { Component: About }
                }
            },
            {
                path: 'cv',
                async lazy() {
                    const { Cv } = await import('@/pages')
                    return { Component: Cv }
                }
            },
            {
                path: 'projects',
                async lazy() {
                    const { Projects } = await import('@/pages')
                    return { Component: Projects }
                }
            },
            {
                path: '*',
                index: true,
                async lazy() {
                    const { Home } = await import('@/pages')
                    return { Component: Home }
                }
            }
        ]
    }
])