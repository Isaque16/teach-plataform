import studying2 from "../../assets/images/explore/studying2.webp";
import group from "../../assets/images/explore/group.webp";
import studying3 from "../../assets/images/explore/studying3.webp";
import music from "../../assets/images/explore/music.webp";
import studying5 from "../../assets/images/explore/studying5.webp";
import graduated from "../../assets/images/explore/graduated.webp";
import studying4 from "../../assets/images/explore/studying4.webp";
import studying from "../../assets/images/explore/studying.webp";
import collegeWoman from "../../assets/images/explore/college-woman.webp";
import student from "../../assets/images/explore/student.webp";
import ExploreImage from "./Image.tsx";

export default function ExploreImages() {
  const images = [
    {
      index: 1,
      src: studying2,
      alt: "Student actively participating in an online class",
      width: 128,
      height: 192,
      className: "w-[72px] h-[96px] md:w-[128px] md:h-[192px]",
    },
    {
      index: 2,
      src: group,
      alt: "Group of students collaborating on an international project",
      width: 172,
      height: 258,
      className: "w-[96px] h-[129px] md:w-[172px] md:h-[258px]",
    },
    {
      index: 3,
      src: studying3,
      alt: "Student focused on her online studies",
      width: 128,
      height: 212,
      className: "w-[72px] h-[106px] md:w-[128px] md:h-[212px]",
    },
    {
      index: 4,
      src: music,
      alt: "Teacher and student in an online music class",
      width: 128,
      height: 215,
      className: "w-[72px] h-[107.5px] md:w-[128px] md:h-[215px]",
    },
    {
      index: 5,
      src: studying5,
      alt: "University student engaged in an international course",
      width: 128,
      height: 160,
      className: "w-[72px] h-[80px] md:w-[128px] md:h-[160px]",
    },
    {
      index: 6,
      src: graduated,
      alt: "Graduate celebrating completion of an international course",
      width: 128,
      height: 171,
      className: "w-[72px] h-[85.5px] md:w-[128px] md:h-[171px]",
    },
    {
      index: 7,
      src: studying4,
      alt: "Student participating in a virtual educational exchange",
      width: 128,
      height: 172,
      className: "w-[72px] h-[86px] md:w-[128px] md:h-[172px]",
    },
    {
      index: 8,
      src: studying,
      alt: "Student in a video call with an international teacher",
      width: 128,
      height: 192,
      className: "w-[72px] h-[96px] md:w-[128px] md:h-[192px]",
    },
    {
      index: 9,
      src: collegeWoman,
      alt: "University student prepared for international classes",
      width: 160,
      height: 255,
      className: "w-[88px] h-[127.5px] md:w-[160px] md:h-[255px]",
    },
    {
      index: 10,
      src: student,
      alt: "Student reflecting on global educational opportunities",
      width: 128,
      height: 165,
      className: "w-[72px] h-[85.5px] md:w-[128px] md:h-[165px]",
    },
  ];

  return (
    <div className="w-full lg:w-[600px] my-10 grid grid-cols-4 items-center justify-center gap-x-4">
      <div className="flex flex-col gap-y-4 items-end">
        <ExploreImage {...images[0]} />
        <ExploreImage {...images[1]} />
      </div>

      <div className="flex flex-col items-center gap-y-4">
        <ExploreImage {...images[2]} />
        <ExploreImage {...images[3]} />
        <ExploreImage {...images[4]} />
      </div>

      <div className="w-fit flex flex-col items-center gap-y-4">
        <ExploreImage {...images[5]} />
        <ExploreImage {...images[6]} />
        <ExploreImage {...images[7]} />
      </div>

      <div className="w-fit flex flex-col items-start gap-y-4">
        <ExploreImage {...images[8]} />
        <ExploreImage {...images[9]} />
      </div>
    </div>
  );
}
