import React, { use } from "react";
import { DataContext } from "../Root/Root";

const Blogs = () => {
  const { blogs } = use(DataContext);
  return (
    <section className="my-20 mx-12.5">
      {/* Title and Description */}
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-4">Our Latest Blogs</h1>
        <p className="text-base md:text-lg text-center">
          Stay updated with the latest health tips, news, and insights from our
          expert doctors.
        </p>
      </div>
      {/* Blogs List */}
      <div className="join join-vertical rounded-lg mt-8 flex justify-center">
        {blogs.map((blog, index) => (
          <div key={index} className="collapse collapse-arrow join-item bg-white border-2 border-blue-600 rounded-lg mb-4 hover:shadow-lg">
            <input type="radio" id={`blog-${index}`} name="blog-group" className="peer" />
            <div className="collapse-title text-xl md:text-2xl font-semibold peer-checked:bg-blue-100 peer-checked:text-blue-600 p-4">
              {blog.title}
            </div>
            <div className="collapse-content text-sm md:text-lg p-4 bg-gray-50 rounded-b-lg">
              {blog.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;