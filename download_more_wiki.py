import urllib.request
import urllib.parse
import json
import ssl

ssl._create_default_https_context = ssl._create_unverified_context
req_headers = {'User-Agent': 'Mozilla/5.0'}

articles = {'ankara': 'Ankara', 'bursa': 'Bursa', 'trabzon': 'Trabzon'}

for city, title in articles.items():
    encoded_title = urllib.parse.quote(title)
    url = f"https://en.wikipedia.org/w/api.php?action=query&titles={encoded_title}&prop=pageimages&format=json&pithumbsize=800"
    req = urllib.request.Request(url, headers=req_headers)
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode('utf-8'))
            pages = data['query']['pages']
            page_id = list(pages.keys())[0]
            if 'thumbnail' in pages[page_id]:
                img_url = pages[page_id]['thumbnail']['source']
                print(f"Downloading {img_url} for {city}...")
                img_req = urllib.request.Request(img_url, headers=req_headers)
                with urllib.request.urlopen(img_req) as img_resp, open(f"images/img_{city}.jpg", 'wb') as f:
                    f.write(img_resp.read())
            else:
                print(f"No image found for {city}")
    except Exception as e:
        print(f"Failed to download {city}: {e}")
