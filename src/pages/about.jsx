import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About PySTEM Learning - Our Mission & Values</title>
        <meta name="description" content="Learn about PySTEM Learning's mission to provide quality Python, ML, AI, and STEM education aligned with Ontario Curriculum." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About PySTEM Learning</h1>
          <p className="text-xl">Empowering the next generation of tech leaders</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary">
            <p className="text-lg text-gray-800 leading-relaxed">
              PySTEM Learning is committed to making quality Python, Machine Learning, AI, and STEM education accessible to all Ontario Grade 6-12 students. We believe that every student deserves the opportunity to develop 21st-century skills and discover their passion for technology and innovation. Our curriculum is carefully aligned with Ontario educational standards and designed to prepare students for success in technology-driven careers.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We deliver high-quality education that meets and exceeds industry standards. Our courses are designed by experienced educators and industry professionals.',
              },
              {
                title: 'Accessibility',
                description: 'We believe quality education should be available to all. Our flexible learning paths and affordable pricing ensure no student is left behind.',
              },
              {
                title: 'Innovation',
                description: 'We stay ahead of technology trends and continuously update our curriculum. Students learn cutting-edge technologies and practices.',
              },
              {
                title: 'Student-Centered Learning',
                description: 'Every student is unique. Our personalized approach ensures each learner gets the support and pace they need to succeed.',
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Alignment */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Ontario Curriculum Alignment</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border p-4 text-left">Grade Level</th>
                  <th className="border p-4 text-left">Core Subjects</th>
                  <th className="border p-4 text-left">PySTEM Courses</th>
                  <th className="border p-4 text-left">Ontario Standards</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border p-4 font-semibold">Grade 6-8</td>
                  <td className="border p-4">Mathematics, Science, Technology</td>
                  <td className="border p-4">Python Basics, Data & AI, STEM Projects</td>
                  <td className="border p-4">Problem solving, coding, data literacy</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border p-4 font-semibold">Grade 9-10</td>
                  <td className="border p-4">Applied Mathematics, Science, Tech</td>
                  <td className="border p-4">Python Intermediate, Machine Learning, Web Dev</td>
                  <td className="border p-4">Algorithm design, ML concepts, web applications</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border p-4 font-semibold">Grade 11-12</td>
                  <td className="border p-4">Advanced Math, Physics, Computer Science</td>
                  <td className="border p-4">Advanced Python, Deep Learning, Capstone</td>
                  <td className="border p-4">Advanced algorithms, AI/ML, real-world projects</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose PySTEM Learning?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '👨‍🏫', title: 'Expert Instructors', desc: 'Learn from experienced educators and industry professionals' },
              { icon: '📚', title: 'Curriculum-Aligned', desc: 'All courses aligned with Ontario educational standards' },
              { icon: '🎯', title: 'Hands-On Learning', desc: 'Real projects and practical applications throughout' },
              { icon: '💻', title: 'Modern Tools', desc: 'Learn industry-standard tools and technologies' },
              { icon: '🌟', title: 'Career Ready', desc: 'Prepare for tech careers and higher education' },
              { icon: '🏆', title: 'Certifications', desc: 'Earn recognized certificates upon completion' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join PySTEM Learning Today</h2>
          <p className="text-xl mb-8">
            Start your journey to master Python, Machine Learning, and STEM concepts.
          </p>
          <a
            href="/courses"
            className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition text-lg"
          >
            Explore Courses
          </a>
        </div>
      </section>
    </>
  );
}
