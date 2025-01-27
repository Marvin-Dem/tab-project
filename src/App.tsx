import { Tab } from "./tab-panel";
import TabPanel from "./tab-panel";

const tabcontent: Tab[] = [
    {
        title: "First Tab",
        content: <div>Test Content 1</div>,
    },
    {
        title: "Second Tab",
        content: 123,
    },
    {
        title: "Third Tab",
        content: "Test String Tab 3",
    },
    {
        title: "Fourth Tab",
        content: <button>Click the test button</button>,
    },
];

export default function App() {
    return <TabPanel tabs={tabcontent}></TabPanel>;
}
