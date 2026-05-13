from flask import render_template


def register_routes(app):
    @app.route("/")
    def homepage():
        return render_template("site.html")
