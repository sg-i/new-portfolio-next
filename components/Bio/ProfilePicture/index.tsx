import Image from 'next/image';
export default function ProfilePicture() {
  return (
    <div className="m-[-40px] md:m-0 scale-[0.75] sm:scale-[0.75] md:scale-[0.95] profile-picture-wrap w-[360px] h-[360px]">
      <div className="mask mask-wrapper">
        <img className=" mask image" src="/profile-picture.jpg" alt="profile picture" />
      </div>
    </div>
  );
}
