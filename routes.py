from flask import render_template


def register_routes(app):
    @app.route("/")
    def homepage():
        return render_template("site.html")
    
    @app.route("/Minha-Lista")
    def minha_lista():
        return "toma a lista do pae otarios"
    
    @app.route("/Assitidos")
    def assitidos():
        return "esses são meus filmes assitidos"
    