# AI Text Converter

A Python tool that converts text through multiple translation steps and AI processing to create more readable, human-like content. 

**I do not condone cheating on any assigments in school😉**

## Overview

You can either download the python file (installation)





## Requirements

- Python 3
- OpenAI API key
- Required packages:
  - openai
  - requests
  - pyautogui

## Installation

1. Clone the repository:
```bash
git clone https://github.com/KaiStephens/gptZeroCheat
```

2. Navigate to the project directory and install requirements:
```bash
pip install -r requirements.txt
```

3. Configure your OpenAI API key in the script:
```python
os.environ["OPENAI_API_KEY"] = "YOUR-OPEN-AI-KEY"
```

## Usage

1. Run the program:
```bash
python3 gptZeroCheat.py
```

2. Enter your text when prompted
3. The program will:
   - Process text through GPT-4o-mini to make the language simpler
   - Translate through multiple languages (English -> Sanskrit -> Thai -> English)
   - Add a special whitespace (does not work in google docs, but program works fine without it)
   - Type the result automatically

## Features

### Translation Pipeline
- Converts text through Sanskrit and Thai before returning to English
- Uses Google Translate API for translations

### GPT-4 Processing
- Simplifies text for better readability
- Optimizes content for non-native speakers

### Auto-Typing
- Automatically types the processed text
- Configurable typing speed (default: 0.01s interval)

## Important Notes

- Ensure proper window focus before auto-typing begins
- Internet connection required for translation services
- The program uses GPT-4o-mini model by default

[License information should be added here]

## Contact

[Contact information should be added here]
