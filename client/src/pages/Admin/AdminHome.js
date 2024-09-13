import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import style from './../../../node_modules/dom-helpers/esm/css';
import colors from './../../../node_modules/d3-scale/src/colors';

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3 style={{ color: "#0CB8B6" }} >Manage Blood Bank App </h3>
          <hr />
          <h3 style={{ color: "#0CB8B6" }}>Dashboard Navigation</h3>
          <ul>
            <li>
              <b>Sidebar Navigation:</b> Use the sidebar on the left to easily access different sections of the dashboard.
            </li>
            <li>
              <b>Three Main Panels:</b> The dashboard is divided into three panels:
            </li>
            <ol>
              <li><b>Donor List:</b>View and manage the list of blood donors.</li>
              <li><b>Organization List:</b> Access details of partner organizations.</li>
              <li><b>Hospital List:</b> Review information related to hospitals.</li>
            </ol>
          </ul>
          <h3 style={{ color: "#0CB8B6" }}>Admin Privilages</h3>
          <ul>
            <li><b>View Links:</b> Admins can view links associated with donors, organizations, and hospitals.</li>
            <li><b>Delete Users:</b> Admins have the ability to delete any user, organization, or hospital from the lists.</li>
            <li><b>Contact Information:</b> The contact details of donors, organizations, and hospitals are available in each panel for easy communication.</li>
          </ul>
          <h3 style={{ color: "#0CB8B6" }}>Importance of Donating Blood</h3>
          <ul>
            <li><strong>Life-Saving Act:</strong> A single blood donation can save up to three lives by providing essential components like red cells, plasma, and platelets.</li>
            <li><strong>Support for Patients:</strong> Blood donations are critical for patients undergoing surgeries, those with severe injuries, cancer patients, and individuals with chronic illnesses.</li>
            <li><strong>Inability to Manufacture Blood:</strong> Blood cannot be artificially created; it relies solely on donors' generosity.</li>
            <li><strong>Stable Blood Supply:</strong> Regular donations are necessary to maintain a sufficient blood supply, especially during emergencies.</li>
          </ul>

        </div>
      </div>
    </Layout >
  );
};

export default AdminHome;
