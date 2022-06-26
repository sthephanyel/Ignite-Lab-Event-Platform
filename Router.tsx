import { Route, Routes } from "react-router-dom";
import { Event } from "./src/pages/Event";
import { Subscribe } from "./src/pages/Subscribe";
//Sistema de roteamento de paginas
export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Subscribe/>}></Route>
            <Route path="/event" element={<Event/>}></Route>
            <Route path="/event/lesson/:slug" element={<Event/>}></Route>
        </Routes>
    );
}