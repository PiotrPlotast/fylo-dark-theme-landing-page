export default function TestimonialCard({
  message,
  name,
  avatar,
  occupation,
}: {
  message: string;
  name: string;
  avatar: string;
  occupation: string;
}) {
  return (
    <div className="bg-cardBgColor px-5 pt-6 pb-5 rounded">
      <p className="font-secondary text-textColor text-xs leading-[1.125rem] sm:text-sm">
        {message}
      </p>
      <div className="mt-4 flex">
        <img src={avatar} alt="" className="w-6 h-6 rounded-full mr-2" />
        <div className="">
          <h3 className="font-secondary text-textColor text-xs font-bold sm:text-sm">
            {name}
          </h3>
          <p className="font-secondary text-textColor text-xxs sm:text-xs">
            {occupation}
          </p>
        </div>
      </div>
    </div>
  );
}
