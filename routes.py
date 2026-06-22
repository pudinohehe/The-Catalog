from flask import jsonify, render_template, request


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
    
    @app.route("/login")
    def login():
        return render_template("login.html")
    
    @app.route("/search-films")
    def search_films():
        movie = request.args.get("name")
        movie_data = {
            "title": movie,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "release_year": 2023,
            "rating": 8.5
        }
        return jsonify(movie_data)

   
