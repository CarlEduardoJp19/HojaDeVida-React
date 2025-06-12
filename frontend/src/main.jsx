import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { Header } from '../components/header'
import { InfoEduardo } from "../components/infoEduar";
import { Lenguajes } from "../components/lenguajes";
import { Laboral } from "../components/expLab";

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Header/>
        <InfoEduardo/>
        <Lenguajes/>
        <Laboral/>
    </StrictMode>
)