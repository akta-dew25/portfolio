import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import { Layout } from "antd";

const { Header, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout className="h-full" style={{fontFamily:"lexend deca"}} >
        <Header className="flex items-center">
          <Navbar />
        </Header>
        <Content className="bg-black h-full overflow-auto overflow-x-hidden	 content-body">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
