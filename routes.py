from flask import render_template


def register_routes(app):
    @app.route("/")
    def homepage():
        return render_template("site.html")
    
    @app.route("/Minha-Lista")
    def minha_lista():
        return render_template("Minha-Lista.html")
    
    @app.route("/Assitidos")
    def assistidos():
        return render_template("assistidos.html")
    