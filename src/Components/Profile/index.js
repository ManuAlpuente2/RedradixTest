import React, { useState } from 'react';
import "./style.scss";

import { ReactComponent as CalendarIcon } from './../../assests/icons/Calendar.svg';
import { ReactComponent as StatsIcon } from './../../assests/icons/Stats.svg';
import { ReactComponent as DiffusionIcon } from './../../assests/icons/Diffusion.svg';
import { ReactComponent as MessagesIcon } from './../../assests/icons/Messages.svg';
import { ReactComponent as ProfileIcon } from './../../assests/icons/Profile.svg';
import { ReactComponent as SettingsIcon } from './../../assests/icons/Settings.svg';

const Profile = ({ user }) => {

  const { pic, currentStatus, name, desc, data, resume } = user;

  const [resumeExpanded, setResumeExpanded] = useState(false);

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-header_user">
          <div className="profile-pic">
            <img src={pic} alt={`Foto de ${name}`} className="profile-pic_img" />
            <span
              className={`profile-status profile-status__${currentStatus}`}
              title={`${name} se encuentra ${currentStatus}`}
            />
          </div>
          <div className="profile-user">
            <h2 className="profile-user_name">{name}</h2>
            <p className="profile-user_desc">{desc}</p>
          </div>
        </div>
        <div className="profile-header_data">
          {data.map((data, i) => (
            <div key={`profile-data_item_${i}`} className="profile-data_item">
              <span className="profile-data_value">
                {data.value * 100}%
                <span
                  className={`profile-data_change profile-data_change__${data.change}`}
                  title={`El valor ha ${data.change === 'up' ? 'incrementado' : 'decrecido'}`}
                >
                </span>
              </span>
              <p className="profile-data_label">{data.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-resume">
          <div className="profile-resume_header">
            <p className="profile-goal"><span className="profile-goal_value">{resume.value}</span> out of 10</p>
            <div className="profile-goal_bar">
              <div
                className={`profile-goal_progress profile-goal_progress__${resume.value >= 5 ? 'ok' : 'ko'}`}
                style={{ width: `${resume.value * 10}%` }}
              />
            </div>
          </div>
          <div
            className={`profile-resume_content profile-resume_content__${resumeExpanded ? 'expanded' : 'colapsed'}`}
            dangerouslySetInnerHTML={{ __html: resume.desc }}
          >
          </div>
          <button
            type="button"
            className={`view-more-btn`}
            onClick={() => setResumeExpanded(!resumeExpanded)}
            aria-hidden="true"
          >
            <span className={`btn-arrow btn-arrow__${resumeExpanded ? 'expanded' : 'colapsed'}`}></span>
            {`View ${resumeExpanded ? 'less' : 'more'}`}
          </button>
        </div>
        <aside className="profile-links">
          <a href="#!" className="profile-link">
            <CalendarIcon className="profile-link_icon" />
            <span className="profile-link_txt">Calendar</span>
          </a>
          <a href="#!" className="profile-link">
            <StatsIcon className="profile-link_icon" />
            <span className="profile-link_txt">Stats</span>
          </a>
          <a href="#!" className="profile-link">
            <DiffusionIcon className="profile-link_icon" />
            <span className="profile-link_txt">Diffusion</span>
          </a>
          <a href="#!" className="profile-link">
            <MessagesIcon className="profile-link_icon" />
            <span className="profile-link_txt">Messages</span>
          </a>
          <a href="#!" className="profile-link">
            <ProfileIcon className="profile-link_icon" />
            <span className="profile-link_txt">Profile</span>
          </a>
          <a href="#!" className="profile-link">
            <SettingsIcon className="profile-link_icon" />
            <span className="profile-link_txt">Settings</span>
          </a>
        </aside>
      </div>
    </div>
  );
}

export default Profile;