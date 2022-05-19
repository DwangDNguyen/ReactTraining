import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const textRef = useRef(null);
  const questionRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    setIsShow(!isShow);
  };

  useEffect(() => {
    if (!textRef.current || !questionRef.current) return;
    const answerHeight = textRef.current.getBoundingClientRect().height;
    if (isShow) {
      questionRef.current.style.minHeight = `${answerHeight}px`;
    } else {
      textRef.current.style.maxHeight = 0;
    }
  }, [isShow]);

  return (
    <article className="question" ref={questionRef}>
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={toggle}>
          {!isOpen ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {isShow && <p ref={textRef}>{info}</p>}
    </article>
  );
};

export default Question;
