import React, { useEffect } from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import Spinner from "./../../components/shared/Spinner";
import Header from "../../components/shared/Layout/Header";
const Login = () => {
    const { loading, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: "bottom-right"
            });
        }
    }, [error]);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div className="container">
                    <Header />
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-5 login-container">
                            <Form
                                formTitle={"Login Page"}
                                submitBtn={"Login"}
                                formType={"login"}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
