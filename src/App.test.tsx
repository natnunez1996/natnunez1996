import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import { Cv, Home } from './pages';
import { App } from './App';


describe("Render App", () => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cv" element={<Cv />} />
            </Routes>
            <App />
        </MemoryRouter>
    )
    it("should render home page", () => {
        // expect(screen.getByText('Nathaniel Nunez')).toBeInTheDocument()

        const user = userEvent.setup();
        const home = vi.spyOn(user, 'click')
        const homeLink = screen.getByText('Nathaniel Nunez')

        user.click(homeLink)
        expect(home).toHaveBeenCalledTimes(1)
        screen.findByTestId('home-page')

        afterEach(() => {
            home.mockClear()
        })
    })


    it("should render cv page", async () => {
        expect(screen.getByAltText('CV'))
        const user = userEvent.setup();
        const cv = vi.spyOn(user, 'click')
        const cvLink = screen.getByText('CV')

        await user.click(cvLink)
        expect(cv).toHaveBeenCalledTimes(1)
        await screen.findByTestId('cv-page')

        afterEach(() => {
            cv.mockClear()
        })


    })
})

// describe("Render CV Page", () => {
//     render(
//         <RouterProvider router={router} />
//     )

//     it("should render cv page", async () => {
//         expect(screen.getByText('CV'))
//         const user = userEvent.setup();
//         const cv = vi.spyOn(user, 'click')
//         const cvLink = screen.getByText('CV')

//         await user.click(cvLink)
//         expect(cv).toHaveBeenCalledTimes(1)
//         await screen.findByTestId('cv-page')

//         afterEach(() => {
//             cv.mockClear()
//         })
//     })

// })