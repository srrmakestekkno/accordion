import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

const App = () => {
  return <Accordion data={faqs} />;
};

const Accordion = ({ data }) => {
  const [currentOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((f, i) => (
        <AccordionItem
          key={i}
          currOpen={currentOpen}
          num={i + 1}
          title={f.title}
          onOpen={setCurOpen}
        >
          {f.text}
        </AccordionItem>
      ))}
    </div>
  );
};

const AccordionItem = ({ currOpen, num, title, onOpen, children }) => {
  const isOpen = num === currOpen;

  const handleToggle = () => {
    onOpen(isOpen ? null : num);
  };

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p>{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};

export default App;
