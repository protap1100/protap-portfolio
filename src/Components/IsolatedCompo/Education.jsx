const Education = () => {
    return (
      <div className="mt-10 border border-black p-5">
        <h1 className="text-4xl font-bold text-center mb-5">
          My Academic Qualification
        </h1>
        <h1 className="text-xl text-center mb-10">
          Here is my Academic Qualification
        </h1>
        <div className="max-w-xl mx-auto">
          {/* Education Entry */}
          <div className="flex m-2  items-center justify-between border-b-2 border-gray-300 pb-4">
            <div className="border-l-4 border-black pl-3 text-2xl">
              <h1>Secondary School Certificate</h1>
              <h1>Dhaka Board</h1>
              <h1>Group Science</h1>
              <h1>GPA 5.00</h1>
              <h1>Session 2017/18</h1>
            </div>
          </div>
          <div className="flex m-2 items-center justify-between border-b-2 border-gray-300 pb-4">
            <div className="border-l-4 border-black pl-3 text-2xl">
              <h1>Diploma In Engineering</h1>
              <h1>Dhaka Polytechnic Institute</h1>
              <h1>Subject: Electronics</h1>
              <h1>CGPA 3.10</h1>
              <h1>Session 2017/18</h1>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Education;
  