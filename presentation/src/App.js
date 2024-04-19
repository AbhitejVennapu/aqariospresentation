import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material"

const App = () => {
    const darkTheme = createTheme({
        typography: {
            fontFamily: "DM Sans, sans-serif",
        },
        palette: {
            mode: "dark",
            primary: {
                main: "#FFF",
            },
        },
    })

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
