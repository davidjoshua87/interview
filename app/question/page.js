"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="flex justify-center w-full text-center text-3xl font-bold">
          Mini Blog
        </h1>

        {/* Posts Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-8">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>

        {/* Blog Form */}
        <div className="flex justify-center w-full">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-center text-gray-700">
              Blog Post
            </h2>
            <form className="w-full">
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium mb-2 text-gray-700"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  className="form-input mt-1 block w-full rounded-md shadow-sm border border-gray-300 text-gray-700"
                  placeholder="Insert blog title ..."
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="content"
                  className="block text-sm font-medium mb-2 text-gray-700"
                >
                  Content
                </label>
                <textarea
                  id="content"
                  className="form-textarea mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-gray-700"
                  rows="5"
                  placeholder="Insert blog content ..."
                />
              </div>

              <button className="btn btn-block btn-primary w-full py-2 bg-blue-500 text-white rounded hover:bg-white transition">
                Create
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Footer Links */}
        <button
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          onClick={toggleModal}
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Question Lists
        </button>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/arrow-back.svg"
            alt="Back icon"
            width={16}
            height={16}
          />
          Back
        </Link>
      </footer>

      {/* Modal */}
      {isModalOpen && <Modal onClose={toggleModal} />}
    </div>
  );
}

// Post Component
const Post = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h4 className="text-lg font-semibold text-gray-700">Frontend Developer</h4>
      <p className="h-24 overflow-hidden text-gray-700">
        In my journey as a frontend developer, I have encountered numerous
        challenges and invaluable lessons. From diving into the realms of HTML
        and CSS to grasping the dynamics of JavaScript and modern frameworks
        like Vue.js and React.js, each step has added new colors and meaning to
        my career.
      </p>
      <div className="flex space-x-2 mt-2">
        <button className="w-1/2 bg-gray-500 text-white rounded py-1 hover:bg-green-600 transition">
          Edit
        </button>
        <button className="w-1/2 bg-yellow-500 text-white rounded py-1 hover:bg-red-600 transition">
          Delete
        </button>
      </div>
    </div>
  );
};

// Modal Component
const Modal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Define your questions for each tab
  const questions = [
    [
      "How to implement a function to create a new blog post whose submit button is only active when the title and content fields are filled in?",
      "How to implement validation on form fields to ensure that the fields are filled in correctly and should not be left blank?",
      "How to ensure that when a new blog post is created, the data is correctly added to the existing blog post list?",
    ],
    [
      "How to implement a function to edit a blog post that has already been created?",
      "How to get data from a blog post that is being edited is filled in the form field and when it has been filled in the form there will be 2 buttons, namely save and cancel?",
      "How to ensure that edited blog post data will be visible in the blog post list when the save button is clicked and reset the edit if the cancel button is clicked?",
    ],
    [
      "How to implement a function to delete a blog post?",
      "How to ensure that when a blog post is deleted, its data is deleted in the blog post list?",
      "What if the blog post content is more than 4 lines?",
    ],
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-4 sm:w-1/3 lg:w-1/2 h-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-8 h-8 text-gray-600 hover:text-gray-800 flex items-center justify-center"
          aria-label="Close modal"
        >
          X
        </button>

        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Technical Test
        </h2>

        {/* Tab Headers */}
        <div className="flex border-b mb-2">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-1 text-sm font-medium py-2 text-center ${
                activeTab === index
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              {`Question ${index + 1}`}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-2">
          <ul className="list-disc list-inside pl-4">
            {" "}
            {/* Added classes for bullet styling */}
            {questions[activeTab].map((question, index) => (
              <li key={index} className="py-1 text-gray-700">
                {question}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
