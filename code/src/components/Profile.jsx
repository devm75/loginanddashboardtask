import React from "react";
import { useLocation } from "react-router-dom";
import Auth from "../auth/Auth";
import { AiFillEye } from "react-icons/ai";
import { BsPencilSquare, BsFillPersonFill, BsPersonFill } from "react-icons/bs";
import companylogo from "../assets/images/companylogo.png";
import { BsFlagFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { HiQuestionMarkCircle } from "react-icons/hi";

export const Profile = () => {
  const { state } = useLocation();
  const { email, name, phone, id, role } = state?.data || Auth?.userData();

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-text-manage-profile">
          <p>Manage Profile</p>
        </div>
        <div className="profile-text-view-profile">
          <span className="profile-eye-icon">
            <AiFillEye className="eye-icon-profile"  />
          </span>
          <span className="view-profile-text">
            View Profile
          </span>
        </div>
        <div className="profile-text-edit-profile">
          <span className="profile-edit-icon">
            <BsPencilSquare className="edit-profile-icon" />
          </span>
          <span className="edit-profile-text">Edit Profile</span>
        </div>
      </div>
      <div className="profile-content-container">
        <div className="profile-dashboard">
          <div className="profile-dashboard-top-section">
            <div className="large-logo-background-image-container">
              <div className="text-over-background-image">
                <p className="profile-dashboard-welcome-text">
                  Welcome! {name}
                </p>
                <p className="profile-dashboard-description-text">
                  complete your profile and it will help the suppliers to
                  understand your company's <br />
                  background and strengths faster.
                </p>
              </div>
            </div>
            <div className="profile-dashboard-top-lower-section">
              <span>
                <img
                  src={companylogo}
                  className="company-logo-inside-profile-dashboard"
                  alt="company-logo"
                />
              </span>
              <div className="profile-dashboard-top-section-lower-content-container">
                <div>
                  <p className="test-text">test</p>
                  <span>
                    <BsFlagFill className="profile-flag-icon" />
                  </span>
                </div>
                <div className="profile-dashboard-email-and-social-media-logo-container">
                  <div className="email-icon-and-text-container">
                    <AiOutlineMail />

                    <span>test@gmail.com</span>
                  </div>
                  <div className="profile-dashboard-social-media-icons-container">
                    <GrFacebookOption className="red-icon-social-media" />
                    <AiOutlineTwitter className="red-icon-social-media" />
                    <AiOutlineGoogle className="red-icon-social-media" />
                    <BsYoutube className="red-icon-social-media" />
                  </div>
                </div>
                <div className="profile-dashboard-btn-container">
                  <button className="edit-profile-btn">
                    Edit Profile <BsArrowRight />
                  </button>
                  <button className="change-password-btn">
                    Change Password <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-dashboard-bottom-section">
            <div className="profile-dashboard-bottom-left-section">
              <p>Personal Information</p>
              <div className="name-and-image-container">
                <span className="profile-image-container">
                  <BsFillPersonFill className="profile-person-icon" />
                </span>
                <span className="profile-name-text">{name}</span>
              </div>
              <div className="profile-info">
                <span className="profile-info-title">Member ID :</span>
                <span className="profile-info-value">{id || "PCM248"}</span>
              </div>
              <div className="profile-info">
                <span className="profile-info-title">Email:</span>
                <span className="profile-info-value">{email || "-"}</span>
              </div>
              <div className="profile-info">
                <span className="profile-info-title">Role :</span>
                <span className="profile-info-value">{role || "seller"}</span>
              </div>
              <div className="profile-info-last">
                <span className="profile-info-title">Moblie :</span>
                <span className="profile-info-value">
                  {phone || "+962 6547657567"}
                </span>
              </div>
            </div>
            <div className="profile-dashboard-bottom-right-section">
              <p className="company-details-text">Company Details</p>
              <div className="profile-info">
                <span className="profile-info-title">Email :</span>
                <span className="profile-info-value">{"test@gmail.com"}</span>
              </div>
              <div className="profile-info">
                <span className="profile-info-title">Bussiness Type :</span>
                <span className="profile-info-value">{"Broker"}</span>
              </div>
              <div className="profile-info-last">
                <span className="profile-info-title">Phone :</span>
                <span className="profile-info-value">{"160106"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-right-section">
          <div className="profile-right-section-completeness-container">
            <p className="">Completeness</p>
            <div className="profile-right-section-completeness-container-user-image-container">
              <BsPersonFill className="large-person-image" />
              <div className="overlay-text">
                <p>100%</p>
              </div>
            </div>
            <p className="completeness-description">
              Please fill the required field before submitting
            </p>
          </div>
          <div className="profile-right-section-help-container">
            <div className="help-content-container">
              <HiQuestionMarkCircle className="question-mark-icon" />
              <span className="help-text">Help</span>
            </div>
            <div className="profile-right-section-help-container-description">
              <p className="help-description-text">
                If you are experiencing technical issues with our website,please
                contact us.
              </p>
              <button className="ask-for-help-btn">Ask for help</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
