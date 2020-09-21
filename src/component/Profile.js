import React from 'react';

const Profile = ({ proData }) => {
  return (
    <div className='card card-body mb-3'>
      <div className='row'>
        <div className='col-md-3'>
          <img
            src={proData.avatar_url}
            className='img-fluid mb-2'
            alt={proData.login}
          />
          <a
            href={proData.html_url}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary btn-block mt-2'
          >
            View Profile
              </a>
        </div>
        <div className='col-md-9'>
          <span className='badge badge-primary mr-1'>
            Public Reops: {proData.public_repos}
          </span>
          <span className='badge badge-success mr-1'>
            Public Gists: {proData.public_gists}
          </span>
          <span className='badge badge-dark mr-1'>
            Public Followers: {proData.followers}
          </span>
          <span className='badge badge-info'>
            Public Following: {proData.following}
          </span>
          <br />
          <div className='list-group'>
            <div className='list-group-item'>Company: {proData.company}</div>
            <div className='list-group-item'>Website/blog: {proData.blog}</div>
            <div className='list-group-item'>Location: {proData.location}</div>
            <div className='list-group-item'>
              Member Since: {proData.created_at}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;