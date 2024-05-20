import React from 'react';
import "./userDetails.css"
import userIcon from '../../assets/image/user_icon.png';

const UserDetails = () => {
    return (
        <div>
            <div className='user_container'>
                <div>
                </div>
                <div className='user_details_container'>
                    <div className='user_details_left_container'>
                        <div className='about_user_container'>
                            <div className='user_image'>
                                <img src={userIcon} alt='' width="100%" height="100%" />
                                <i class="fa-solid fa-video"></i>
                            </div>
                            <div className='user_details'>
                                <div className='user_name'>
                                    <h3 className=''>Pet3011 Par3011</h3>
                                    <div className='user_edit_icons'>
                                        <i className="fa-solid fa-pen"></i>
                                        <i class="fa-solid fa-ellipsis-vertical"></i>

                                    </div>
                                    <button><i class="fa-solid fa-plus" style={{ color: "white", paddingRight: "5px" }}></i>Chart</button>
                                    <button><i class="fa-solid fa-plus" style={{ color: "white", paddingRight: "5px" }}></i>Enroll</button>
                                </div>
                                <h6><i className="fa-solid fa-mars" style={{ paddingRight: "5px" }}></i>Male DOB: 01-Jan-1980 (42 Years)</h6>
                                <h6><i class="fa-solid fa-globe" style={{ paddingRight: "5px" }}></i>Ethnicity: Caucascian (Europen)</h6>
                                <h6><i class="fa-solid fa-list-check" style={{ paddingRight: "5px" }}></i>Occupation: Management</h6>
                                <h6><i class="fa-solid fa-file-invoice" style={{ paddingRight: "5px" }}></i>Account #: 14251541825 MRN:- (EBS Demo Faclity - 36)</h6>
                            </div>
                        </div>
                        <div className='about_user_status'>
                            <div className='user_status'>
                                <h5>Risk</h5>
                                <h6>This Year: N/A</h6>
                                <h6>Last Year: N/A</h6>
                            </div>
                            <div className='user_status'>
                                <h5>Risk</h5>
                                <h6>This Year: N/A</h6>
                                <h6>Last Year: N/A</h6>
                            </div>
                            <div className='user_status'>
                                <h5>Risk</h5>
                                <h6>This Year: N/A</h6>
                                <h6>Last Year: N/A</h6>
                            </div>
                            <div className='user_status'>
                                <h5>Risk</h5>
                                <h6>This Year: N/A</h6>
                                <h6>Last Year: N/A</h6>
                            </div>
                        </div>
                    </div>
                    <div className='user_details_right_container'>
                        <div className='user_policy_details'>
                            <h5><i class="fa-solid fa-location-dot" style={{ paddingRight: "5px" }}></i>No Details Provided</h5>
                            <h5>Primary: 1234567890 </h5>
                            <h5>Emergency: 0987654321</h5>
                            <h5>Policy Number: 9999999999</h5>
                            <h5>Insurer: MediCare</h5>

                        </div>
                        <div className='user_health_details'>
                            <div>
                                <h6>Screenings</h6>
                            </div>
                            <div className='radio_wrapper'>
                                <div className='radio_container'>
                                    <input type="radio" id="toboco" name="option" value="Toboco" />
                                    <label for="toboco" style={{ fontSize: "12px" }}>Toboco</label>
                                </div>
                                <div className='radio_container'>
                                    <input type="radio" id="toboco" name="option" value="Toboco" />
                                    <label for="toboco" style={{ fontSize: "12px" }}>Toboco</label>
                                </div>
                                <div className='radio_container'>
                                    <input type="radio" id="toboco" name="option" value="Toboco" />
                                    <label for="toboco" style={{ fontSize: "12px" }}>Toboco</label>
                                </div>
                                <div className='radio_container'>
                                    <input type="radio" id="toboco" name="option" value="Toboco" />
                                    <label for="toboco" style={{ fontSize: "12px" }}>Toboco</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='user_activity_container'>
                    <div>
                        <div className='user_activity'>
                            <h5><i class="fa-solid fa-list-check" style={{ paddingRight: "5px" }}></i> Recent Activity :</h5>

                            <i class="fa-solid fa-plus"></i>

                        </div>
                        <div className='user_activity_details'>
                            <h6 style={{ fontWeight: "500" }}>Follow Up</h6>
                        </div>
                    </div>
                    <div>
                        <div className='user_activity'>
                            <h5><i class="fa-solid fa-list-check" style={{ paddingRight: "5px" }}></i> Latest Note :</h5>
                            <i className="fa-solid fa-plus"></i>

                        </div>
                        <div className='user_activity_details'>
                            <h6 style={{ fontWeight: "500" }}>Follow Up</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails