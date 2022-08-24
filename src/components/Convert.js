import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranlated] = useState("");
  const [debouncingtext, setDebouncingtext] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncingtext(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncingtext,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      console.log(data.data.translations[0].translatedText);
      setTranlated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncingtext]);
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
