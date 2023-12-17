#!/bin/bash
rm test.txt
rm final.txt
ollama run llama2 "Get all information about techinical System Requirements from this text: $(cat extracted_text.txt)" >> test.txt
ollama run llama2 "Considering the requirements: $(cat test.txt). Substitute the values (not the key) following JSON structure: $(cat structure.json) and return just the json, not other text." >> final.txt