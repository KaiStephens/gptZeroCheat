
async function translate(text, sourceLang, targetLang) {
    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data[0].map(x => x[0]).join('');
        }
        return "Translation failed";
    } catch (error) {
        console.error('Translation error:', error);
        return "Translation failed";
    }
}

async function humanizeText(text) {
    console.log("cycling through languages");
    text = await translate(text, 'en', 'sa');
    text = await translate(text, 'sa', 'th');
    text = await translate(text, 'th', 'en');
    return text;
}

async function callOpenAI(text, apiKey) {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{
                    role: "user",
                    content: "I need you to make this text with simple language a foreigner would easily understand while talking like a human, re-write this text, ONLY return the re-written text: " + text
                }]
            })
        });

        const data = await response.json();
        if (data.choices && data.choices[0]) {
            return data.choices[0].message.content;
        } else {
            throw new Error('Invalid API response');
        }
    } catch (error) {
        console.error('OpenAI API error:', error);
        return "Error processing with OpenAI";
    }
}

function addWhiteSpace(text) {
    console.log("replacing whitespace");
    return text.replace(/ /g, "  ");
}

async function processText() {
    const loading = document.getElementById('loading');
    const output = document.getElementById('output');
    const text = document.getElementById('inputText').value;
    const apiKey = document.getElementById('apiKey').value;

    if (!text || !apiKey) {
        alert('Please enter both text and API key');
        return;
    }

    loading.style.display = 'block';
    output.textContent = '';

    try {
        const openAIResult = await callOpenAI(text, apiKey);
        const humanizedResult = await humanizeText(openAIResult);
        const finalResult = addWhiteSpace(humanizedResult);
        output.textContent = finalResult;
    } catch (error) {
        output.textContent = 'Error processing text: ' + error.message;
    } finally {
        loading.style.display = 'none';
    }
}