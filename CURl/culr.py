import requests
from bs4 import BeautifulSoup

headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
}

def ottenere_html_da_link(link):
    # Esegui una richiesta POST al link fornito
    response = requests.get(link, headers=headers)

    # Verifica se la richiesta ha avuto successo (codice di stato 200)
    if response.status_code == 200:
        # Utilizza BeautifulSoup per analizzare l'HTML e ottenere il contenuto del body
        soup = BeautifulSoup(response.content, 'html.parser')
        body_content = soup.body.contents  # ottieni il contenuto del body in formato "prettified"
        body_content = str(body_content).replace("\"", "").replace("\'", "").replace("\n", " ").replace("\t", " ").replace("\r", " ").replace("  ", " ")
        return body_content
    else:
        print(f"Errore nella richiesta. Codice di stato: {response.status_code}")
        return None

if name == "__main__":
    # Inserisci il link HTML da cui ottenere il contenuto del body
    link_html = input("Inserisci il link HTML: ")

    # Ottieni il contenuto del body dal link HTML
    risultato = ottenere_html_da_link(link_html)
    risultato = str(risultato).replace("\"", "").replace("\'", "").replace("\n", " ").replace("\t", " ").replace("\r", " ").replace("  ", " ")

    # Stampa il risultato
    if risultato:
        print("\nContenuto del body:")
        print(risultato)
        open("html.txt", "w").write(risultato)