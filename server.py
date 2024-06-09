from flask import Flask, request, send_from_directory

web = "web"

app = Flask(__name__)


@app.route("/")
def index():
    return send_from_directory(web, "iCkYw3cRwLo.html")


@app.route("/videoplayback")
def video():
    return send_from_directory(web, "iCkYw3cRwLo.mp4")


@app.route("/annotations_invideo", methods=["GET", "POST"])
def annotations():
    return send_from_directory(web, "iCkYw3cRwLo.xml")


@app.route("/<path:filename>")
def get_file(filename):
    return send_from_directory(web, filename)


if __name__ == "__main__":
    app.run()
