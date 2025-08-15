import { faker } from "@faker-js/faker";

type UserProfileProps = {
  open: boolean;
  name: string;
};

export const UserProfile: React.FC<
  UserProfileProps
> = ({ open, name }) => {
  if (!open) return null; // hide completely when sidebar is closed

  return (
    <div className="flex items-center gap-3 mt-auto mb-4 px-2 cursor-pointer transition-all">
      <img
        src={faker.image.avatar()}
        alt={name}
        className="rounded-full w-10 h-10 transition-all duration-300"
      />
      <div className="flex flex-col text-white">
        <span className="font-semibold text-sm">
          {name}
        </span>
      </div>
    </div>
  );
};
