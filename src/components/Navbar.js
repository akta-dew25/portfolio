import React,{useState,useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";


function Navbar() {
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(location.pathname);
  

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname])

  const items = [
    {
      key: '/',
      label: <Link to="/">About</Link>,
    },
    {
      key: '/projects',
      label: <Link to="/projects">Projects</Link>,
    },
    {
      key: '/skills',
      label: <Link to="/skills">Skills</Link>,
    },
    {
      key: '/testimonials',
      label: <Link to="/testimonials">Testimonials</Link>,
    },
    {
      key: '/contact',
      label: <Link to="/contact">Contact</Link>,
    },
  ]

 
  return (
    <>     
      <div className="ml-10">
      <p className="flex items-center  text-2xl">
        <span className="text-white">About</span>
        <span className="text-yellow-500">Me</span>
      </p>
      </div>
    <Menu
      className="flex justify-end"
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      selectedKeys={[selectedKey]}
      items={items}
      style={{
        flex: 1,
        minWidth: 0,
      }}
     
      />
     
    </>
  );
}

export default Navbar;
