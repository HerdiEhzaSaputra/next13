export default function Loading() {
  return (
    <div className="container relative m-auto px-6 text-gray-500 md:px-12">
      <div className="animate-pulse w-full h-64 flex flex-col justify-between items-start bg-white rounded-lg border border-gray-200 mb-6 py-5 px-4">
        <div className="flex items-center">
          <div className="flex">
            <p>notes</p><span>/</span>
          </div>
          <div className="h-[16px] bg-gray-200 rounded-full dark:bg-gray-700 w-[200px] my-1"></div>
        </div>
        <div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[560px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[560px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[560px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[560px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[330px]"></div>
        </div>
        <div className="w-full flex flex-col items-start">
          <div className="mb-3 h-[25.98px] w-[117.88px] bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-gray-800 text-xs flex items-center" aria-label="Due on" role="contentinfo"></div>
          <div className="flex items-center justify-between text-gray-800 w-full">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[160px] mb-2.5"></div>
          </div>
        </div>
      </div>
    </div>
  )
}