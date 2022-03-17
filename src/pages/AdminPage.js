import React from "react";
import Layout from "../components/Layout";

function AdminPage() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-2 border border-2">Column</div>
          <div className="col-10">Column</div>
        </div>
      </div>
    </Layout>
  );
}

export default AdminPage;
