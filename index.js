class Breakfast {
  constructor(food,drink){
    this.food = food;
    this.drink = drink;
  }
}
 let bfast = new Breakfast('eggs', 'milk')
 bfast.food;
 bfast.drink;
 
 class Lunch {
  constructor(salad,soup,drink){
    this.salad= salad;
    this.soup = soup;
    this.drink = drink;
  }
}
let lunch = new Lunch('side salad', 'broccoli soup', 'cola')
 lunch.salad;
 lunch.soup;
 lunch.drink;
 
 class Dinner{
   constructor(salad,soup,entree,dessert){
     this.salad = salad;
     this.soup = soup;
     this.entree = entree;
     this._dessert = dessert;
   }
 }
 let dinner = new Dinner('ci salad', 'consomme', 'mashroom', 'cheesecake')
 dinner.salad;
 dinner.soup;
 dinner.entree;
 dinner.dessert;