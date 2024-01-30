from flask import Flask, send_from_directory

app = Flask(__name__)


@app.route("/")
def index():
    return send_from_directory(".", "iCkYw3cRwLo.html")


@app.route("/annotations_invideo", methods=["GET", "POST"])
def annotations():
    return send_from_directory(".", "iCkYw3cRwLo.xml")


@app.route("/<path:filename>")
def get_file(filename):
    return send_from_directory(".", filename)


if __name__ == "__main__":
    app.run()
