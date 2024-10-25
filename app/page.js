import Image from "next/image";

export default function Home() {
  const questions = [
    "Read the question carefully.",
    "Before answering, create a new branch in the development environment. Perform all work in this branch and only push and merge to the master/main branch when ready.",
    "When committing, follow this commit format: feat: [your_name][#01][first-answer].",
    "Write the solution code on the answer page.",
    "If anything is unclear, feel free to ask for clarification.",
    "If you can perform unit testing, it will be a bonus.",
    "Enhancing the UI and UX will also be considered an added value.",
    "Successfully deploying the project to the public will further increase the value.",
    "Before pushing to GitHub, ensure that everything is functioning correctly.",
    "Don't forget to pray and good luck! :)"
  ];  

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-bold text-4xl">Technical Test</h1>
        <h2 className="text-2xl underline">Read First!</h2>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {questions.map((question, index) => (
            <li key={index} className="mb-2">
              {question}
            </li>
          ))}
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/question"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Question Page
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center gap-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/answer"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Answer Page
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/frontend.svg"
            alt="Frontend icon"
            width={16}
            height={16}
          />
          Front-End Developer &copy;{new Date().getFullYear()}
        </a>
      </footer>
    </div>
  );
}
