from flask import Flask, render_template, request

app = Flask(__name__)

cadastros = []

@app.route("/")
def inicio():
    return render_template("index.html")

@app.route("/cadastro", methods=["GET", "POST"])
def cadastro():
    if request.method == "POST":
        nome = request.form.get("nome")
        cpf = request.form.get("cpf")
        email = request.form.get("email")
        telefone = request.form.get("telefone")
        genero = request.form.get("genero")

        dados = {
            "nome": nome,
            "cpf": cpf,
            "email": email,
            "telefone": telefone,
            "genero": genero
        }

        cadastros.append(dados)

        return render_template("cadastro.html", mensagem="Cadastro realizado com sucesso!")

    return render_template("cadastro.html")

@app.route("/lista")
def lista():
    return render_template("lista.html", cadastros=cadastros)

if __name__ == "__main__":
    app.run(debug=True)
