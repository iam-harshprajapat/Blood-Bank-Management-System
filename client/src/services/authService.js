import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";
import { toast } from 'react-toastify'

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return toast.error("Please provide all fields", {
        position: "bottom-right",
      });
    }
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  phone,
  organisationName,
  address,
  hospitalName,
  website,
  bloodGroupType,
) => {
  e.preventDefault();
  try {
    if (!password || !email || !role ||
      (role === 'donar' && (!bloodGroupType || !name)) ||
      (role === 'organisation' && !organisationName) ||
      (role === 'hospital' && !hospitalName)) {
      return toast.error("Please provide necessary fields", {
        position: "bottom-right",
      });
    }
    if (password.length < 8) {
      return toast.error("Password should be of atleast 8 characters", {
        position: "bottom-right",
      });
    }
    store.dispatch(
      userRegister({
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
        bloodGroupType,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
