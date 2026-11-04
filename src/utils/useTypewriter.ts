import { useState, useEffect } from "react";

const period = 1000;

// Types each word, pauses, deletes it, then moves to the next one
export function useTypewriter(words: string[]) {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 20);

  useEffect(() => {
    const tick = () => {
      const i = loopNum % words.length;
      const fullText = words[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
      setText(updatedText);
      if (isDeleting) setDelta((prev) => Math.max(prev / 2, 40));
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setDelta(500);
      }
    };

    // One tick per render: an interval could fire twice on stale state and skip a title
    const ticker = setTimeout(tick, delta);
    return () => clearTimeout(ticker);
  }, [text, delta, isDeleting, loopNum, words]);

  return text;
}
