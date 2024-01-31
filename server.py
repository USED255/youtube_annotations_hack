from flask import Flask, request, send_from_directory

web = "web"

app = Flask(__name__)


@app.route("/")
def index():
    return send_from_directory(web, "iCkYw3cRwLo.html")


@app.route("/annotations_invideo", methods=["GET", "POST"])
def annotations():
    return send_from_directory(web, "iCkYw3cRwLo.xml")


@app.route("/videoplayback")
def video():
    mime = request.args.get('mime')
    if mime == "video/mp4":
        return send_from_directory(web, "iCkYw3cRwLo.video.mp4")
    if mime == "audio/mp4":
        return send_from_directory(web, "iCkYw3cRwLo.audio.mp4")
    if mime == "video/webm":
        return send_from_directory(web, "iCkYw3cRwLo.video.webm")
    if mime == "audio/webm":
        return send_from_directory(web, "iCkYw3cRwLo.audio.webm")
    return None

@app.route("/<path:filename>")
def get_file(filename):
    return send_from_directory(web, filename)


if __name__ == "__main__":
    app.run()
