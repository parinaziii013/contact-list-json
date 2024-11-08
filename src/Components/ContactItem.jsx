export const ContactItem = ({ name, number, className }) => {
  return (
    <div className={className}>
      <div>
        <img
          className="rounded-full w-[100px] h-[100px]"
          src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small_2x/default-avatar-icon-of-social-media-user-vector.jpg"
        />
      </div>
      <div className="pl-4">
        <p>Name: {name}</p>
        <p>Number: {number}</p>
      </div>
    </div>
  );
};
