import React from 'react';
import Profile from './profile.png';

const ReviewContent = (props) => (
  <li className="review_Item">
    <a
      className="review_Item_Link"
      href="파일"
      target="_blank"
    >
      <div className="review_Item_User">
        <span className="review_Item_UserInfoWrap">
          <div className="review_Item_UserPicWrap">
            <img className="review_Item_UserPic" src={Profile} alt="user profile" />
          </div>
          <span className="review_Item_UserNickName">
            {props.comment.user__user_email}
            {/* //span 크기 수정하기 */}
          </span>
        </span>
        <div className="review_Item_Content">
          <div className="review_Item_TextWrap">
            <span className="review_Item_ReviewDate">
              {props.comment.created_at.substring(0, 10)}
            </span>
            <p className="review_Item_ReviewText">
              {props.comment.content}
            </p>
          </div>
        </div>
      </div>
    </a>
  </li>
);
export default ReviewContent;
