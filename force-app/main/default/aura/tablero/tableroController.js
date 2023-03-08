({
    myAction : function(component, event, helper) {

    },
    callApex : function(component, event, helper){
        

        var action = component.get("c.generar");
        var numIntento = event.getParam("numero");

        component.set("v.numIntento", numIntento);
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var numero = response.getReturnValue()
                if (numero === component.get("v.numViejo")){
                    console.log("numero" + numero)
                    console.log("numeroviejo " +component.get("v.numViejo"))

                    var evento = $A.get("e.c:reloadApexMethod");
                    evento.fire();
                }
                else{
                    component.set("v.numero", numero);
                    component.set("v.numViejo", numero);
                }
                
                
                switch (numero){
                    case 1:
                        component.find("1").set("v.clase", "color");
                        component.find("2").set("v.clase", "limpia");
                        component.find("3").set("v.clase", "limpia");
                        component.find("4").set("v.clase", "limpia");
                        component.find("5").set("v.clase", "limpia");
                        component.find("6").set("v.clase", "limpia");
                        component.find("7").set("v.clase", "limpia");
                        component.find("8").set("v.clase", "limpia");
                        break;
                    case 2:
                        component.find("1").set("v.clase", "limpia");
                        component.find("2").set("v.clase", "color");
                        component.find("3").set("v.clase", "limpia");
                        component.find("4").set("v.clase", "limpia");
                        component.find("5").set("v.clase", "limpia");
                        component.find("6").set("v.clase", "limpia");
                        component.find("7").set("v.clase", "limpia");
                        component.find("8").set("v.clase", "limpia");
                        break;
                    case 3:
                        component.find("1").set("v.clase", "limpia");
                        component.find("2").set("v.clase", "limpia");
                        component.find("3").set("v.clase", "color");
                        component.find("4").set("v.clase", "limpia");
                        component.find("5").set("v.clase", "limpia");
                        component.find("6").set("v.clase", "limpia");
                        component.find("7").set("v.clase", "limpia");
                        component.find("8").set("v.clase", "limpia");
                        break;
                    case 4:
                        component.find("1").set("v.clase", "limpia");
                        component.find("2").set("v.clase", "limpia");
                        component.find("3").set("v.clase", "limpia");
                        component.find("4").set("v.clase", "color");
                        component.find("5").set("v.clase", "limpia");
                        component.find("6").set("v.clase", "limpia");
                        component.find("7").set("v.clase", "limpia");
                        component.find("8").set("v.clase", "limpia");
                        break;
                    case 5:
                        component.find("1").set("v.clase", "limpia");
                        component.find("2").set("v.clase", "limpia");
                        component.find("3").set("v.clase", "limpia");
                        component.find("4").set("v.clase", "limpia");
                        component.find("5").set("v.clase", "color");
                        component.find("6").set("v.clase", "limpia");
                        component.find("7").set("v.clase", "limpia");
                        component.find("8").set("v.clase", "limpia");
                        break;
                    case 6:
                        component.find("1").set("v.clase", "limpia");
                        component.find("2").set("v.clase", "limpia");
                        component.find("3").set("v.clase", "limpia");
                        component.find("4").set("v.clase", "limpia");
                        component.find("5").set("v.clase", "limpia");
                        component.find("6").set("v.clase", "color");
                        component.find("7").set("v.clase", "limpia");
                        component.find("8").set("v.clase", "limpia");
                        break;
                    case 7:
                        component.find("1").set("v.clase", "limpia");
                        component.find("2").set("v.clase", "limpia");
                        component.find("3").set("v.clase", "limpia");
                        component.find("4").set("v.clase", "limpia");
                        component.find("5").set("v.clase", "limpia");
                        component.find("6").set("v.clase", "limpia");
                        component.find("7").set("v.clase", "color");
                        component.find("8").set("v.clase", "limpia");
                        break;
                    case 8:
                        component.find("1").set("v.clase", "limpia");
                        component.find("2").set("v.clase", "limpia");
                        component.find("3").set("v.clase", "limpia");
                        component.find("4").set("v.clase", "limpia");
                        component.find("5").set("v.clase", "limpia");
                        component.find("6").set("v.clase", "limpia");
                        component.find("7").set("v.clase", "limpia");
                        component.find("8").set("v.clase", "color");
                        break;
                }
            }
        });
        $A.enqueueAction(action);
    },
    aumentarContador : function(component, event){
        var acierto = event.getParam("sumar");
        if (acierto){
            var numScore = component.get("v.score");
            component.set("v.score", numScore+1);
        }
        else{
            component.set("v.highscore", component.get("v.score"));
            component.set("v.score", 0);
        }
        var evento = $A.get("e.c:reloadApexMethod");
        evento.fire();
    },
    stopGame : function(component, event){
        component.set("v.highscore", component.get("v.score"));
    },
    startReset : function(component, event){
        component.set("v.score", 0);
        component.set("v.highscore", component.get("v.score"));
        var evento = $A.get("e.c:reloadApexMethod");
        evento.fire();
    }
})
