import Image from 'next/image';
export default function ProfilePicture() {
  return (
    <div className="profile-picture-wrap ">
      <div className="mask mask-wrapper">
        <img className=" mask image" src="/profile-picture.jpg" alt="profile picture" />
      </div>
    </div>
  );
}
