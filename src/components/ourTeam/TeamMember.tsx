import Image from "next/image";

interface TeamMemberProps {
  profilePictureSrc: string | null;
  name: string;
  title: string;
}

const getNameAndTitle = (name: string, title?: string) => {
  return title ? `${title} ${name}` : name;
};

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  profilePictureSrc,
  title,
}) => {
  return (
    <div className="text-center mb-4">
      {profilePictureSrc && (
        <Image
          height={276}
          width={380}
          src={profilePictureSrc}
          alt={getNameAndTitle(name, title)}
          className="object-cover max-w-full mx-auto"
        />
      )}
      <h4 className="text-lg font-bold mt-4">{getNameAndTitle(name, title)}</h4>
    </div>
  );
};
