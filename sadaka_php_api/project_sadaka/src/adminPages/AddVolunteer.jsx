import React from 'react';
import AdminNavbar from '../adminComponents/AdminNavbar';
import AdminSidebar from '../adminComponents/AdminSidebar';
import AdminSlider from '../adminComponents/AdminSlider';
import AdminFooter from '../adminComponents/AdminFooter';

const AddVolunteer = () => {
    return (
        <>
           <AdminNavbar/>
           <AdminSidebar/>
           <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Volunteer:</h1>
                            <AdminSlider />
                        </div> <br />
                        <div className=" row-center">
                            <div className="modal-dialog col-md-6">
                                    <div className="modal-content col-md-12">
                                    
                                        <div className="modal-body">
                                            <form className="form-donation">
                                            <h3 className="title-style-1 text-center">
                                                Thank you for join Us <span className="title-under" />
                                            </h3>
                                            <div className="row">
                                                
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="firstName"
                                                    placeholder="First name*"
                                                />
                                                </div>
                                                <div className="form-group col-md-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="lastName"
                                                    placeholder="Last name*"
                                                />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="email"
                                                    placeholder="Email*"
                                                />
                                                </div>
                                                <div className="form-group col-md-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="phone"
                                                    placeholder="Phone"
                                                />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-12">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="address"
                                                    placeholder="Address"
                                                />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-12">
                                                <textarea
                                                    cols={30}
                                                    rows={4}
                                                    className="form-control"
                                                    name="note"
                                                    placeholder="Additional note"
                                                    defaultValue={""}
                                                />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-12">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary pull-right"
                                                    name="donateNow"
                                                >
                                                    SUBMMIT NOW
                                                </button>
                                                </div>
                                            </div>
                                            </form>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AdminFooter />
            </div>

        

          

        </>
    );
};

export default AddVolunteer;