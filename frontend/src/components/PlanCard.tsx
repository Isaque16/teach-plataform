interface PlanCardProps {
  width: string;
  plan: string;
  name: string;
  text: string;
  link: string;
}

export default function PlanCard({
  width,
  plan,
  name,
  text,
  link,
}: PlanCardProps) {
  let planColor: string;

  switch (plan) {
    case "New":
      planColor = "bg-green-600/10 text-green-700";
      break;
    case "Popular":
      planColor = "bg-blue-600/10 text-blue-700";
      break;
    case "Featured":
      planColor = "bg-purple-600/10 text-purple-700";
      break;
    default:
      planColor = "bg-gray-600/10 text-gray-700";
  }

  return (
    <article className={`${width} h-fit p-4 rounded-lg bg-white shadow-lg`}>
      <span className={`px-3 py-1 ${planColor} text-md text-center rounded-lg`}>
        {plan}
      </span>
      <h3
        className="font-semibold text-xl my-3"
        dangerouslySetInnerHTML={{ __html: name }}
      ></h3>
      <p className="text-md text-blue-gray mb-4">{text}</p>
      <a
        href={link}
        className="block py-2 border-2 border-sky-600 rounded-lg text-sky-600 text-center hover:text-white hover:bg-sky-600 transition-colors duration-300 font-semibold"
      >
        Take a Lesson
      </a>
    </article>
  );
}
