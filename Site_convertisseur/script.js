// Déf de la variable root de façon globale et inchangable qui est nécessaire pour utiliser les variables CSS en JavaScript
const setCSSvar = (var_name, var_new_value) => {document.documentElement.style.setProperty(var_name, var_new_value)}
let theme_clair = localStorage.getItem("theme_clair") === "true";
theme_check()

// Fonction pour la conversion, les erreurs et le bouton clear
function conversion()
{   
    setCSSvar("--erreur_caractere", "hidden")
    setCSSvar("--erreur_remplissage", "hidden")
    setCSSvar("--erreur_infinity", "hidden")
    setCSSvar("--erreur_vide", "hidden")

    decimal_var=parseInt(decimal.value,10)
    binaire_var=parseInt(binaire.value,2)
    hexadecimal_var=parseInt(hexadecimal.value,16)


    if(binaire.value!='' && decimal.value=='' && hexadecimal.value=='')
        { 
            let input_correcte=true   
            for (let caractere of binaire.value)
                {
                if (caractere!="0" && caractere!="1")
                    {
                    setCSSvar("--erreur_caractere", "visible")
                    input_correcte=false
                    }
                }
            if (input_correcte) {conversion_Binaire()}
            
        }

    else if(decimal.value!=''&& binaire.value=='' && hexadecimal.value=='') 
        {
            let input_correcte=true   
            for (let caractere of decimal.value)
                {
                if (caractere!="0" && caractere!="1" && caractere!="2" && caractere!="3" && caractere!="4" && caractere!="5" && caractere!="6" && caractere!="7" && caractere!="8" && caractere!="9")
                    {
                    setCSSvar("--erreur_caracter", "visible")
                    input_correcte=false
                    }
                }
            if (input_correcte) {conversion_Decimal()}
        }

    else if(hexadecimal.value!=''&& decimal.value=='' && binaire.value=='') 
        {
            let input_correcte=true   
            for (let caractere of hexadecimal.value)
                {
                if (caractere!="0" && caractere!="1" && caractere!="2" && caractere!="3" && caractere!="4" && caractere!="5" && caractere!="6" && caractere!="7" && caractere!="8" && caractere!="9" && caractere!="a" && caractere!="b" && caractere!="c" && caractere!="d" && caractere!="e" && caractere!="f" && caractere!="g" && caractere!="A" && caractere!="B" && caractere!="C" && caractere!="D" && caractere!="E" && caractere!="F" && caractere!="G")
                    {
                    setCSSvar("--erreur_caractere", "visible")
                    input_correcte=false
                    }
                }
            if (input_correcte) {conversion_Hexadecimal()}
        }

    else if (hexadecimal.value==''&& decimal.value=='' && binaire.value=='')
        {setCSSvar("--erreur_vide", "visible")}

    else {setCSSvar("--erreur_remplissage", "visible");}

    if (decimal.value=="Infinity" || binaire.value=="Infinity" || hexadecimal.value=="Infinity") {
        setCSSvar("--erreur_infinity", "visible")
        setCSSvar("--erreur_caractere", "hidden")
        setCSSvar("--erreur_remplissage", "hidden")
    }



}
function effacer()
{
    hexadecimal.value=''
    decimal.value=''
    binaire.value=''

    nb_caractere=1
    setCSSvar("--width_input","10%")

    setCSSvar("--erreur_caracter", "hidden")
    setCSSvar("--erreur_remplissage", "hidden")
    setCSSvar("--erreur_infinity", "hidden")
    setCSSvar("--erreur_vide", "hidden")

}

function conversion_Binaire()
{ 
    
    hexadecimal.value=(binaire_var).toString(16)
    decimal.value=(binaire_var).toString(10)
}
function conversion_Decimal()
{    
    hexadecimal.value=(decimal_var).toString(16)
    binaire.value=(decimal_var).toString(2)
}
function conversion_Hexadecimal()
{
    decimal.value=(hexadecimal_var).toString(10)
    binaire.value=(hexadecimal_var).toString(2)
}

// Fonction pour le thème switch
function theme_switch_black() {

    // dark
    setCSSvar("--bg_dark", "hsl(0,0%,0%)");
    setCSSvar("--bg", "hsl(0,0%,5%)");
    setCSSvar("--bg_light", "hsl(0,0%,10%)");
    setCSSvar("--bg_hover", "hsl(0,0%,6%)");
    setCSSvar("--bg_light_hover", "hsl(0,0%,15%)");
    setCSSvar("--texte0", "hsl(0,0%,100%)");
    setCSSvar("--texte1", "hsl(0,0%,95%)");
    setCSSvar("--texte2", "hsl(0,0%,70%)");
    setCSSvar("--ligne", "hsl(0,0%,95%)");

    setCSSvar("--border_bank", "solid 1px hsl(0,0%,30%)");
    setCSSvar("--box_shadow_bank", "-2px 7px 7px 3px hsl(0,0%,3%)");

    setCSSvar("--bg_image","url(images/bg.jpg)");
    setCSSvar("--logo_BaseX","url(images/logo_BaseX_dark.png)");
    setCSSvar("--logo_IND","url(images/logo_IND_dark.png)");

    setCSSvar("--deci_bin","url(images/tableau_deci_a_bin_dark.png")
    setCSSvar("--bin_deci","url(images/tableau_bin_a_deci_dark.png")
    setCSSvar("--hex_deci","url(images/tableau_hex_a_deci_dark.png")
    setCSSvar("--bin_hex","url(images/tableau_bin_a_hex_dark.png")

    setCSSvar("--image_apercu_binaire","url(images/binaire_apercu_dark.png)")
    setCSSvar("--image_apercu_decimal","url(images/decimal_apercu_dark.png)")
    setCSSvar("--image_apercu_hexadecimal","url(images/hexadecimal_apercu_dark.png)")
    setCSSvar("--image_apercu_convertisseur","url(images/convertisseur_apercu_dark.png)")

    theme_clair=false
    localStorage.setItem("theme_clair", theme_clair)
}
function theme_switch_white() {

    // clair
    setCSSvar("--bg_dark", "hsl(0,0%,90%)");
    setCSSvar("--bg", "hsl(0,0%,95%)");
    setCSSvar("--bg_light", "hsl(0,0%,98%)");
    setCSSvar("--bg_hover", "hsl(0,0%,96%)");
    setCSSvar("--bg_light_hover", "hsl(0,0%,100%)");
    setCSSvar("--texte0", "hsl(0,0%,0%)");
    setCSSvar("--texte1", "hsl(0,0%,5%)");
    setCSSvar("--texte2", "hsl(0,0%,30%)");
    setCSSvar("--ligne", "hsl(0,0%,15%)");

    setCSSvar("--box_shadow_bank", "-2px 2px 3px 1px hsl(0,0%,20%)");

    setCSSvar("--bg_image","url(images/bg_light.png)");
    setCSSvar("--logo_BaseX","url(images/logo_BaseX_white.png)");
    setCSSvar("--logo_IND","url(images/logo_IND_clair.png)");

    setCSSvar("--deci_bin","url(images/tableau_deci_a_bin_clair.png")
    setCSSvar("--bin_deci","url(images/tableau_bin_a_deci_clair.png")
    setCSSvar("--hex_deci","url(images/tableau_hex_a_deci_clair.png")
    setCSSvar("--bin_hex","url(images/tableau_bin_a_hex_clair.png")

    setCSSvar("--image_apercu_binaire","url(images/binaire_apercu_clair.png)")
    setCSSvar("--image_apercu_decimal","url(images/decimal_apercu_clair.png)")
    setCSSvar("--image_apercu_hexadecimal","url(images/hexadecimal_apercu_clair.png)")
    setCSSvar("--image_apercu_convertisseur","url(images/convertisseur_apercu_clair.png)")

    theme_clair=true
    localStorage.setItem("theme_clair", theme_clair)
}
function theme_check() {
    if (theme_clair) {
        theme_switch_white()
    }
    else {theme_switch_black()}
    localStorage.setItem("theme_clair", theme_clair)
}

// Fonction pour l'aperçu dans la navbar
function visibility_apercu(nom,visibility) {
    setCSSvar(`--visibility_apercu_${nom}`,visibility)
}

// Fonction qui permet d'allonger les inputs si besoin
function width_input() {

    if (binaire.value.length<10 ){setCSSvar("--width_input_binaire","10ch")}
    else if (binaire.value.length<39) {setCSSvar("--width_input_binaire",`${binaire.value.length+1}ch`)}
    else {setCSSvar("--width_input_binaire",`${40}ch`)}

    if (decimal.value.length<10 ){setCSSvar("--width_input_decimal","10ch")}
    else if (decimal.value.length<39) {setCSSvar("--width_input_decimal",`${decimal.value.length+1}ch`)}
    else {setCSSvar("--width_input_decimal",`${40}ch`)}

    if (hexadecimal.value.length<10 ){setCSSvar("--width_input_hexadecimal","10ch")}
    else if (hexadecimal.value.length<35) {setCSSvar("--width_input_hexadecimal",`${hexadecimal.value.length+1}ch`)}
    else {setCSSvar("--width_input_hexadecimal",`${36}ch`)}
}