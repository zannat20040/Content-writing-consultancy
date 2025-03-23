export default function AboutLeft() {
  return (
    <div className="bg-white p-7 rounded-lg w-full">
      <div className="grid grid-cols-4 gap-4 justify-between items-start">
        <ul className="text-gray-400 text-sm flex flex-col gap-2">
          <li>Offer services</li>
          <li>How started</li>
          <li>Project deadline</li>
          <li>Content originality</li>
          <li>SEO content</li>
          <li className="bg-gray-200 w-10/12 h-2 rounded-full"></li>
          <li className="bg-gray-200 w-8/12 h-2 rounded-full"></li>
          <li className="bg-gray-200 w-9/12 h-2 rounded-full"></li>
          <li className="bg-gray-200 w-5/12 h-2 rounded-full"></li>
          <li className="bg-gray-200 w-6/12 h-2 rounded-full"></li>
        </ul>
        <div className="col-span-3">
          <p className="text-lg font-bold"> Content Marketing</p>
          <p className="text-gray-500 text-sm">
            When it comes to content marketing, quality should always be your
            priority over quantity.
          </p>
          <div className="bg-[#000] p-5 rounded-md mt-5 text-gray-400 text-sm">
            <p>Why Quality Matters</p>
            <ul className="list-disc ml-5">
              <li> Quality content resonates, encouraging more interaction.</li>
              <li> Search engines reward relevant, well-written content.</li>
              <li> Quality positions your brand as an authority.</li>
            </ul>
          </div>
          <div className="bg-[#ecedf1e4] p-5 rounded-md mt-5 text-black text-sm">
            <p className="bg-gray-300 w-5/12 h-2 rounded-full"></p>
            <div className="w-full mt-3 flex flex-col gap-2">
              <p className="bg-gray-300 w-full h-2 rounded-full"> </p>
              <p className="bg-gray-300 w-full h-2 rounded-full"></p>
              <p className="bg-gray-300 w-5/12 h-2 rounded-full"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
