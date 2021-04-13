var car = {
    brand: "Tesla",
    model: "Model 3",
    price: 35000,

    teslaAutoPilot: function()
    {
        return "This car has autopilot";
    }
}
//add properties
car.oil = "$30";
document.write(car.oil);

//delete properties
delete car.model;
document.write( car.model);


/*function Cars(brand, model, price)
{
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.teslaAutoPilot = function(){
        document.write ("This car has autopilot");
    }
}

var c1 = new Cars("Tesla", "Model 3", 35000);
document.write(c1.model);*/


