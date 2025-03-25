document.getElementById("pesquisar").addEventListener("click", function() {
    const uf = document.getElementById("uf").value.toUpperCase();
    let nome, capital, gentilicoUF, gentilicoCapital;

    switch (uf) {
        case "AC":
            nome = "Acre";
            capital = "Rio Branco";
            gentilicoUF = "Acriano";
            gentilicoCapital = "Rio-branquense";
            break;
        case "AL":
            nome = "Alagoas";
            capital = "Maceió";
            gentilicoUF = "Alagoano";
            gentilicoCapital = "Maceioense";
            break;
        case "AP":
            nome = "Amapá";
            capital = "Macapá";
            gentilicoUF = "Amapaense";
            gentilicoCapital = "Macapaense";
            break;
        case "AM":
            nome = "Amazonas";
            capital = "Manaus";
            gentilicoUF = "Amazonense";
            gentilicoCapital = "Manauara";
            break;
        case "BA":
            nome = "Bahia";
            capital = "Salvador";
            gentilicoUF = "Baiano";
            gentilicoCapital = "Soteropolitano";
            break;
        case "CE":
            nome = "Ceará";
            capital = "Fortaleza";
            gentilicoUF = "Cearense";
            gentilicoCapital = "Fortalezense";
            break;
        case "DF":
            nome = "Distrito Federal";
            capital = "Brasília";
            gentilicoUF = "Brasiliense";
            gentilicoCapital = "Brasiliense";
            break;
        case "ES":
            nome = "Espírito Santo";
            capital = "Vitória";
            gentilicoUF = "Capixaba";
            gentilicoCapital = "Vitoriense";
            break;
        case "GO":
            nome = "Goiás";
            capital = "Goiânia";
            gentilicoUF = "Goiano";
            gentilicoCapital = "Goianiense";
            break;
        case "MA":
            nome = "Maranhão";
            capital = "São Luís";
            gentilicoUF = "Maranhense";
            gentilicoCapital = "Ludovicense";
            break;
        case "MT":
            nome = "Mato Grosso";
            capital = "Cuiabá";
            gentilicoUF = "Mato-grossense";
            gentilicoCapital = "Cuiabano";
            break;
        case "MS":
            nome = "Mato Grosso do Sul";
            capital = "Campo Grande";
            gentilicoUF = "Sul-mato-grossense";
            gentilicoCapital = "Campo-grandense";
            break;
        case "MG":
            nome = "Minas Gerais";
            capital = "Belo Horizonte";
            gentilicoUF = "Mineiro";
            gentilicoCapital = "Belo-horizontino";
            break;
        case "PA":
            nome = "Pará";
            capital = "Belém";
            gentilicoUF = "Paraense";
            gentilicoCapital = "Belense";
            break;
        case "PB":
            nome = "Paraíba";
            capital = "João Pessoa";
            gentilicoUF = "Paraibano";
            gentilicoCapital = "Pessoense";
            break;
        case "PR":
            nome = "Paraná";
            capital = "Curitiba";
            gentilicoUF = "Paranaense";
            gentilicoCapital = "Curitibano";
            break;
        case "PE":
            nome = "Pernambuco";
            capital = "Recife";
            gentilicoUF = "Pernambucano";
            gentilicoCapital = "Recifense";
            break;
        case "PI":
            nome = "Piauí";
            capital = "Teresina";
            gentilicoUF = "Piauiense";
            gentilicoCapital = "Teresinense";
            break;
        case "RJ":
            nome = "Rio de Janeiro";
            capital = "Rio de Janeiro";
            gentilicoUF = "Fluminense";
            gentilicoCapital = "Carioca";
            break;
        case "RN":
            nome = "Rio Grande do Norte";
            capital = "Natal";
            gentilicoUF = "Potiguar";
            gentilicoCapital = "Natalense";
            break;
        case "RS":
            nome = "Rio Grande do Sul";
            capital = "Porto Alegre";
            gentilicoUF = "Gaúcho";
            gentilicoCapital = "Porto-alegrense";
            break;
        case "RO":
            nome = "Rondônia";
            capital = "Porto Velho";
            gentilicoUF = "Rondoniense";
            gentilicoCapital = "Porto-velhense";
            break;
        case "RR":
            nome = "Roraima";
            capital = "Boa Vista";
            gentilicoUF = "Roraimense";
            gentilicoCapital = "Boa-vistense";
            break;
        case "SC":
            nome = "Santa Catarina";
            capital = "Florianópolis";
            gentilicoUF = "Catarinense";
            gentilicoCapital = "Florianopolitano";
            break;
        case "SP":
            nome = "São Paulo";
            capital = "São Paulo";
            gentilicoUF = "Paulista";
            gentilicoCapital = "Paulistano";
            break;
        case "SE":
            nome = "Sergipe";
            capital = "Aracaju";
            gentilicoUF = "Sergipano";
            gentilicoCapital = "Aracajuano";
            break;
        case "TO":
            nome = "Tocantins";
            capital = "Palmas";
            gentilicoUF = "Tocantinense";
            gentilicoCapital = "Palmense";
            break;
        default:
            alert("UF não encontrada!");
            return;
    }

    document.getElementById("nome").value = nome;
    document.getElementById("capital").value = capital;
    document.getElementById("gentilicoUf").value = gentilicoUF;
    document.getElementById("gentilicoCapital").value = gentilicoCapital;
});

document.getElementById("limpar").addEventListener("click", function() {
    document.getElementById("uf").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("capital").value = "";
    document.getElementById("gentilicoUf").value = "";
    document.getElementById("gentilicoCapital").value = "";
});
