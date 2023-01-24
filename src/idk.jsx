import React from "react";

const idk = () => {
  const [generatedText, setGeneratedText] = useState("");

  useEffect(() => {
    generateText().then((text) => {
      setGeneratedText(text);
    });
  }, []);

  const generateText = async () => {
    const apiKey = "YOUR_API_KEY";
    const prompt = "What is the weather like today?";
    const maxTokens = 1024;
    const temperature = 0.5;
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    };
    const body = JSON.stringify({
      prompt,
      max_tokens: maxTokens,
      temperature,
    });
    try {
      const response = await fetch(
        "https://api.openai.com/v1/engines/davinci/completions",
        {
          method: "POST",
          headers,
          body,
        }
      );
      const data = await response.json();
      return data.choices[0].text;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <p>{generatedText}</p>;
    </div>
  );
};

export default idk;
