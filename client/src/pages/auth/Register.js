import { React, useEffect } from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";
import { toast } from 'react-toastify'
import Header from "../../components/shared/Layout/Header";

const Register = () => {
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
                    <div className="row justify-content-center mt-5 ">
                        <div className="col-md-5 register-container">
                            <Form
                                formTitle={"Register"}
                                submitBtn={"Register"}
                                formType={"register"}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Register;
