import { Tab } from "./tab-panel";
import TabPanel from "./tab-panel";

const numberArray = [1, 2, 3, 4];

const tabcontent: Tab[] = [
    {
        title: "First Tab",
        content: (
            <div className="flex flex-col gap-2 items-center">
                <p className="text-lg">Header of Test Content 1</p>
                <div className="text-white bg-black text-lg p-4 rounded-lg">
                    Boxed main content of Test Content 1
                </div>
                <p className="text-lg">Bottom text of Test Content 1</p>
            </div>
        ),
    },
    {
        title: "Second Tab",
        content: (
            <div className="grid grid-cols-2 gap-2">
                {numberArray.map((number) => {
                    return (
                        <div className="border border-black rounded-full flex justify-center">
                            {number}
                        </div>
                    );
                })}
            </div>
        ),
    },
    {
        title: "Third Tab",
        content: (
            <div className="flex justify-center">
                <img
                    src="/bisasam.png"
                    alt="Picture of Bulbasaur"
                    width={475}
                    height={475}
                ></img>
            </div>
        ),
    },
    {
        title: "Fourth Tab",
        content: (
            <div className="grid grid-cols-2 gap-2">
                <button className="text-white bg-black text-lg p-4 rounded-lg cursor-pointer hover:bg-gray-800">
                    Click the first test button
                </button>
                <button className="text-white bg-black text-lg p-4 rounded-lg cursor-pointer hover:bg-gray-800">
                    Click the second test button
                </button>
                <button className="text-white bg-black text-lg p-4 rounded-lg cursor-pointer hover:bg-gray-800">
                    Click the third test button
                </button>
                <button className="text-white bg-black text-lg p-4 rounded-lg cursor-pointer hover:bg-gray-800">
                    Click the fourth test button
                </button>
            </div>
        ),
    },
];

export default function App() {
    return (
        <div className="w-1/2">
            <TabPanel tabs={tabcontent}></TabPanel>
        </div>
    );
}
