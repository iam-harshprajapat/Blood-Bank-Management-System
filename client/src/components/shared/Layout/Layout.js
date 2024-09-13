import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    const { user } = useSelector((state) => state.auth);
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="row g-0">
                <div className="col-md-3"><Sidebar />s</div>
                {(user?.role !== 'donar') &&
                    <div className="col-md-9">{children}</div>
                }

            </div>
        </>
    );
};

export default Layout;
