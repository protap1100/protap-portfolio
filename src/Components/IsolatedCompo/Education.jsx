const educationData = [
  {
    title: "Secondary School Certificate",
    institute: "Dhaka Board",
    subject: "Science",
    result: "GPA 5.00",
    session: "2014/15",
  },
  {
    title: "Diploma in Engineering",
    institute: "Dhaka Polytechnic Institute",
    subject: "Electronics",
    result: "CGPA 3.10",
    session: "2017/18",
  },
  {
    title: "BSc in CSE",
    institute: "Eastern University",
    subject: "Computer Science and Engineering",
    result: "CGPA 3.34",
    session: "2025",
  },
];

const EducationCard = ({ item }) => (
  <div className="border-l-4 border-black pl-4 py-3 hover:bg-gray-50 transition rounded">
    <h2 className="text-xl font-semibold">{item.title}</h2>
    <p className="text-gray-700">{item.institute}</p>
    <p className="text-gray-600">Subject: {item.subject}</p>
    <p className="text-gray-600">{item.result}</p>
    <p className="text-gray-500 text-sm">Session: {item.session}</p>
  </div>
);

const Education = () => {
  return (
    <section className="mt-10 border  p-6 rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold text-center mb-2">
        My Academic Qualification
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Here is my academic journey
      </p>

      <div className="max-w-2xl mx-auto space-y-4">
        {educationData.map((item, index) => (
          <EducationCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Education;
