import { GoDotFill } from "react-icons/go";

export default function AboutRight() {
  return (
    <div className="bg-white p-7 rounded-lg w-3/4 ">
      <div>
        <p className="text-lg font-bold"> Content Marketing</p>
        <p className="text-gray-500 text-sm">
          When it comes to content marketing, quality should always be your
          priority over quantity.
        </p>
        <div className="bg-[#F4F6FF] p-5 rounded-md mt-5 text-black text-sm">
          <p>Why Quality Matters</p>
          <ul className="list-disc ml-5">
            <li> Quality content resonates, encouraging more interaction.</li>
            <li> Search engines reward relevant, well-written content.</li>
            <li> Quality positions your brand as an authority.</li>
          </ul>
        </div>
        <div className="bg-[#F4F6FF] p-5 rounded-md mt-5 text-black text-sm">
          <p>How to Create Quality Content</p>
          <ul className="list-disc ml-5">
            <li> Tailor content to their needs.</li>
            <li> Keep your content genuine and aligned with your brand.</li>
            <li> Back up claims with reliable data.</li>
            <li> Ensure content is SEO-friendly but naturally written.</li>
          </ul>
        </div>
      </div>
      <div className="bg-white p-3 px-4 absolute bottom-[120px] right-0 rounded-lg w-1/2">
        <div className="flex  mb-8">
          <GoDotFill className="text-2xl text-red-600" />{" "}
          <GoDotFill className="text-2xl text-yellow-600" />{" "}
          <GoDotFill className="text-2xl text-green-600" />
        </div>
        <div className="flex-col flex gap-1">
          <div className="w-4/5 bg-deep-purple-700 h-2 rounded mb-0"></div>
          <div className="w-full bg-[#fafafa ] h-2 rounded"></div>
          <div className="w-3/5 bg-[#f7f2f2ec] h-2 rounded"></div>
          <div className="w-1/5 bg-[#f7f2f2ec] h-2 rounded"></div>
        </div>
      </div>
    </div>
  );
}
