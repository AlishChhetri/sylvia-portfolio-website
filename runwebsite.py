import http.server
import socketserver

PORT = 8001
DIRECTORY = "../sylviaWebsite"

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

Handler = MyHttpRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving HTTP on port {PORT}")
    print(f"Access index.html at http://localhost:{PORT}")
    print(f"Access sylviaIndex.html at http://localhost:{PORT}/sylviaIndex.html")
    httpd.serve_forever()
