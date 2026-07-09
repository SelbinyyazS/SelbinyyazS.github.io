from duckduckgo_search import DDGS
import urllib.request

queries = {'izmir': 'izmir clock tower', 'cappadocia': 'cappadocia hot air balloons', 'antalya': 'antalya marina turkey'}
req_headers = {'User-Agent': 'Mozilla/5.0'}

with DDGS() as ddgs:
    for city, query in queries.items():
        results = ddgs.images(query, max_results=1)
        if results:
            url = results[0]['image']
            print(f"Downloading {url} for {city}...")
            req = urllib.request.Request(url, headers=req_headers)
            try:
                with urllib.request.urlopen(req) as response, open(f"images/img_{city}.jpg", 'wb') as f:
                    f.write(response.read())
            except Exception as e:
                print(f"Failed to download {city}: {e}")
