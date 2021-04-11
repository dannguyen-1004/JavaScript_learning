
/*var car = {
    car_brand:"Tesla",
    car_model: "Model 3",
    price: 35000,

    teslaAutoPilot: function(){
        document.write("This car has autopilot");
    }

    
}*/
//instead we can do create new object
function Cars(car_brand,car_model,price)
{
    this.car_brand = car_brand;
    this.car_model = car_model;
    this.price = price;
    this.tesLaAutoPilot = function()
    {
        document.write("This car has autopilot");
    }
}

var c1 = new Cars("Tesla","Model", 35000);
var c2 = new Cars("Honda", "Model P", 45000);
c1.tesLaAutoPilot();
document.write("<h2>" + c2.car_model);
