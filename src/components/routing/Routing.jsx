import { Routes, Route } from 'react-router-dom'
import { About } from '../../pages/About'
import { Contact } from '../../pages/Contact'
import { Home } from '../../pages/Home'
import { Projects } from '../../pages/Projects'

export const Routing = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}