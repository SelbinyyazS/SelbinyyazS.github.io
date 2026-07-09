import urllib.request
import re
import ssl

ssl._create_default_https_context = ssl._create_unverified_context
req_headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for query in ['izmir', 'cappadocia', 'antalya']:
    url = f"https://unsplash.com/s/photos/{query}"
    req = urllib.request.Request(url, headers=req_headers)
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            match = re.search(r'https://images\.unsplash\.com/photo-[a-zA-Z0-9\-]+', html)
            if match:
                print(f"{query}: {match.group(0)}?auto=format&fit=crop&w=800&q=80")
            else:
                print(f"{query}: No match")
    except Exception as e:
        print(f"Error for {query}: {e}")
